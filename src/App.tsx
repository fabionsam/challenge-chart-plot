import React from 'react'
import CodeTextArea from './components/CodeTextArea'
import { Button, Footer, Header } from './styles'

const App: React.FC = () => {
    return (
        <div className="App">
            <Header>Fábio&apos;s Challenge</Header>
            <CodeTextArea />
            <Footer>
                <Button>Generate Chart</Button>
            </Footer>
        </div>
    )
}

export default App
