import React from 'react'
import {
    render,
    screen,
    queryByAttribute,
    getByRole,
    getByText,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import DataParser from './utils/dataParser'

test('check if title was rendered', () => {
    render(<App />)
    const element = screen.getByText("Fábio's Challenge")
    expect(element).toBeInTheDocument()
})

test('check if generate chart button was rendered', () => {
    const getById = queryByAttribute.bind(null, 'id')
    const dom = render(<App />)
    const element = getById(dom.container, 'generateChartButton')
    expect(element).toBeInTheDocument()
})

test('check if chartContainer was rendered', () => {
    const getById = queryByAttribute.bind(null, 'id')
    const dom = render(<App />)
    const element = getById(dom.container, 'chartContainer')
    expect(element).toBeInTheDocument()
})

test('check if dataParser works well', () => {
    const parser =
        new DataParser(`{type: 'start', timestamp: 1519862400000, select: ['min_response_time', 'max_response_time'], group: ['os', 'browser']}
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
    const chartData = parser.readTextData()
    expect(chartData.length).toEqual(8)
})

test('check if generate chart button works well when clicked', () => {
    render(<App />)
    const element = screen.getByRole('button', { name: /Generate Chart/g })
    userEvent.click(element)
    expect(element).toBeInTheDocument() // if userEvent.click did not throw an error, then it worked well
})
