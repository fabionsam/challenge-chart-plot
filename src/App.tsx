import React from 'react'
import CodeTextArea from './components/CodeTextArea'
import LineChart from './components/LineChart'
import { MainContainer, Button, Footer, Header } from './styles'

const App: React.FC = () => {
    return (
        <MainContainer>
            <Header>Fábio&apos;s Challenge</Header>
            <CodeTextArea />
            <LineChart />
            <Footer>
                <Button>Generate Chart</Button>
            </Footer>
        </MainContainer>
    )
}

export default App
