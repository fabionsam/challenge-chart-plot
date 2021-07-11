import React, { useState } from 'react'
import CodeTextArea from './components/CodeTextArea'
import LineChart from './components/LineChart'
import { MainContainer, Button, Footer, Header } from './styles'

const App: React.FC = () => {
    const [text, setText] = useState('')

    const handleCodeTextAreaOnChange = (
        editor: any,
        data: any,
        value: string
    ) => {
        setText(value)
    }

    const handleButtonClick = () => {}

    return (
        <MainContainer>
            <Header>Fábio&apos;s Challenge</Header>
            <CodeTextArea onChange={handleCodeTextAreaOnChange} />
            <LineChart data={[]} />
            <Footer>
                <Button onClick={handleButtonClick}>Generate Chart</Button>
            </Footer>
        </MainContainer>
    )
}

export default App
