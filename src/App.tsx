import React, { useState } from 'react'
import CodeTextArea from './components/CodeTextArea'
import LineChart from './components/LineChart'
import { MainContainer, Button, Footer, Header } from './styles'
import DataParser from './utils/dataParser'

const App: React.FC = () => {
    const [text, setText] =
        useState(`{type: 'start', timestamp: 1519862400000, select: ['min_response_time', 'max_response_time'], group: ['os', 'browser']}
{type: 'span', timestamp: 1519862400000, begin: 1519862400000, end: 1519862460000}
{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}
{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'chrome', min_response_time: 0.2, max_response_time: 1.2}
{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.2}
{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'firefox', min_response_time: 0.1, max_response_time: 1.0}
{type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'chrome', min_response_time: 0.2, max_response_time: 0.9}
{type: 'data', timestamp: 1519862460000, os: 'mac', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.0}
{type: 'data', timestamp: 1519862460000, os: 'mac', browser: 'firefox', min_response_time: 0.2, max_response_time: 1.1}
{type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.4}
{type: 'stop', timestamp: 1519862400000}`)
    const [chartData, setChartData] = useState<Array<ChartData>>([])

    const handleCodeTextAreaOnChange = (
        editor: any,
        data: any,
        value: string
    ) => {
        setText(value)
    }

    const handleButtonClick = () => {
        const dataParser = new DataParser(text)
        setChartData(dataParser.readTextData())
    }

    return (
        <MainContainer>
            <Header>Fábio&apos;s Challenge</Header>
            {process.env.NODE_ENV !== 'test' && (
                <CodeTextArea onChange={handleCodeTextAreaOnChange} />
            )}
            <LineChart data={chartData} />
            <Footer>
                <Button
                    id="generateChartButton"
                    name="generateChartButton"
                    onClick={handleButtonClick}
                >
                    Generate Chart
                </Button>
            </Footer>
        </MainContainer>
    )
}

export default App
