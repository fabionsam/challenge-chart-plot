declare interface ChartData {
    id: any;
    color?: string;
    data: Array<{ x: any; y: any }>;
}

declare interface StartSet {
    type: 'start';
    timestamp: number;
    select: Array<string>;
    group: Array<string>;
}

declare interface SpanSet {
    type: 'span';
    timestamp: number;
    begin: number;
    end: number;
}

declare interface StopSet {
    type: 'stop';
    timestamp: number;
}

declare interface DataSet {
    type: 'data';
    timestamp: number;
    [key: string]: any;
}