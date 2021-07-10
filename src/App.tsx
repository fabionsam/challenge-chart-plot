import React from 'react'
import CodeTextArea from './components/CodeTextArea'
import { Header } from './styles'

const App: React.FC = () => {
    return (
        <div className="App">
            <Header>Fábio&apos;s Challenge</Header>
            <CodeTextArea />
        </div>
    )
}

export default App
