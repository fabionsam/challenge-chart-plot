import React from 'react'
import {
    render,
    screen,
    queryByAttribute,
    getByRole,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

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

test('check if generate chart button click works well', () => {
    render(<App />)
    const element = screen.getByRole('button')
    userEvent.click(element)
    expect(element).toBeInTheDocument()
})
