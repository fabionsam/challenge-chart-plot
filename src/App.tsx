import React, { useState } from 'react'
import CodeTextArea from './components/CodeTextArea'
import LineChart from './components/LineChart'
import { MainContainer, Button, Footer, Header } from './styles'
import DataParser from './utils/dataParser'

const App: React.FC = () => {
    const [text, setText] = useState('')
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
            <CodeTextArea onChange={handleCodeTextAreaOnChange} />
            <LineChart data={chartData} />
            <Footer>
                <Button onClick={handleButtonClick}>Generate Chart</Button>
            </Footer>
        </MainContainer>
    )
}

export default App
