import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { Container } from './styles'

declare interface LineChartProps {
    data: Array<ChartData>
}

const LineChart: React.FC<LineChartProps> = ({ data }: LineChartProps) => {
    return (
        <Container id="chartContainer">
            <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 220, bottom: 50, left: 80 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    reverse: false,
                }}
                enableGridX={false}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legendOffset: 36,
                    legendPosition: 'middle',
                }}
                colors={{ scheme: 'paired' }}
                axisLeft={null}
                pointSize={10}
                pointColor={{ from: 'color' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'top-right',
                        direction: 'column',
                        justify: false,
                        translateX: 220,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 200,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1,
                                },
                            },
                        ],
                    },
                ]}
            />
        </Container>
    )
}

export default LineChart
