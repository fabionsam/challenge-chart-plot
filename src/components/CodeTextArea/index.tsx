import './code.css'
import React, { useEffect, useState } from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/mode/javascript/javascript')

declare interface CodeTextAreaProps {
    onChange: (editor: any, data: any, value: string) => void
}

const CodeTextArea: React.FC<CodeTextAreaProps> = ({
    onChange,
}: CodeTextAreaProps) => {
    const [initialText] =
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

    useEffect(() => {
        onChange(null, null, initialText)
    }, [])

    return (
        <CodeMirror
            value={initialText}
            options={{
                mode: 'javascript',
                theme: 'challenge',
                lineNumbers: true,
            }}
            onChange={onChange}
        />
    )
}

export default CodeTextArea
