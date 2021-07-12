import moment from 'moment'

class DataParser {
    private readonly rawData: string

    private start: StartSet | undefined

    private span: SpanSet | undefined

    private stop: StopSet | undefined

    private data: Array<DataSet>

    private chartData: Array<ChartData>

    constructor(rawData: string) {
        this.rawData = rawData
        this.start = undefined
        this.span = undefined
        this.stop = undefined
        this.data = []
        this.chartData = []
    }

    private readStart(obj: StartSet) {
        this.start = obj
        this.stop = undefined
        this.span = undefined
        this.data = []
    }

    private readSpan(obj: SpanSet) {
        if (!this.start) return
        this.span = obj
    }

    private readStop(obj: StopSet) {
        this.stop = obj
        this.generateChartData()
        this.span = undefined
        this.start = undefined
    }

    private readData(obj: DataSet) {
        if (this.stop || !this.start || !this.span) return
        if (obj.timestamp < this.span.begin || obj.timestamp > this.span.end)
            return
        this.data.push(obj)
    }

    private stringToObject(text: string) {
        return text
            .replace(/^{|}$/g, '')
            .split(/,(?! ')(?!')/g)
            .map((keyVal) => {
                return keyVal.split(':').map((_) => _.trim())
            })
            .reduce((accumulator, currentValue) => {
                const [key, value] = currentValue
                accumulator[key] = value.match(/^\[|\]$/g)
                    ? JSON.parse(value.replace(/'/g, '"'))
                    : value.replace(/'/g, '')
                return accumulator
            }, {})
    }

    private redirectToFunc(obj: any) {
        switch (obj.type) {
            case 'start':
                return this.readStart(obj)
            case 'span':
                return this.readSpan(obj)
            case 'stop':
                return this.readStop(obj)
            case 'data':
                return this.readData(obj)
            default:
                return null
        }
    }

    private getId(data: DataSet, field: string): string {
        return `${this.start!.group.map((group) => {
            return data[group]
        }).join(' ')} ${field.replace(/_/g, ' ')}`.replace(
            /(^\w{1})|(\s+\w{1})/g,
            (match) => match.toUpperCase()
        )
    }

    private generateChartData() {
        this.data.forEach((data) => {
            this.start!.select.forEach((field) => {
                const foundChartData = this.chartData.findIndex(
                    (x) => x.id === this.getId(data, field)
                )

                if (foundChartData > -1) {
                    this.chartData[foundChartData].data.push({
                        x: moment
                            .unix(data.timestamp / 1000)
                            .subtract(this.span!.begin)
                            .format('mm:SS'),
                        y: Object.keys(data).find((x) => x === field)
                            ? data[field]
                            : 0,
                    })
                } else {
                    this.chartData.push({
                        id: `${this.getId(data, field)}`,
                        data: [
                            {
                                x: moment
                                    .unix(data.timestamp / 1000)
                                    .subtract(this.span!.begin)
                                    .format('mm:SS'),
                                y: Object.keys(data).find((x) => x === field)
                                    ? data[field]
                                    : 0,
                            },
                        ],
                    })
                }
            })
        })
    }

    public readTextData(): Array<ChartData> {
        this.rawData.split('\n').forEach((line) => {
            this.redirectToFunc(this.stringToObject(line))
        })

        return this.chartData
    }
}

export default DataParser
