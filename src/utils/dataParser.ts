import moment from 'moment'

class DataParser {
    private rawData: string

    constructor(rawData: string) {
        this.rawData = rawData
    }

    private readStart() {
        throw new Error('Not Implemented')
    }

    private readSpan() {
        throw new Error('Not Implemented')
    }

    private readStop() {
        throw new Error('Not Implemented')
    }

    private readData() {
        throw new Error('Not Implemented')
    }

    public generateChartData() {
        this.rawData.split('\n').map((line) => {
            return {}
        })
    }
}

export default DataParser
