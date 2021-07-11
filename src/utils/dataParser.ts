import moment from 'moment';

class DataParser {
    private _rawData: string;
    constructor(rawData: string){
        this._rawData = rawData;
    }

    private readStart() {

    }

    private readSpan() {

    }

    private readStop() {

    }

    private readData() {

    }

    public generateChartData() {
        this._rawData.split('\n').map(line => {
            console.log();
        });
    }
}

export default DataParser;