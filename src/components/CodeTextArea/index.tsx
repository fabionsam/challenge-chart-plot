import './code.css'
import React, { useState } from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/mode/javascript/javascript')

const CodeTextArea: React.FC = () => {
    const [text, setText] = useState('')

    return (
        <>
            <CodeMirror
                value={text}
                options={{
                    mode: 'javascript',
                    theme: 'challenge',
                    lineNumbers: true,
                }}
                onChange={(editor, data, value) => {
                    setText(value)
                }}
            />
        </>
    )
}

export default CodeTextArea
