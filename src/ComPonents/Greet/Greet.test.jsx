import { render, screen } from "@testing-library/react"
import { Greet } from "./Greet"

describe ('Greet', () => {

  test(' Render Correctly', () => {
    render(<Greet/>)
    const textElement = screen.getByText('Hello')
    // const textElement = screen.getByText(/hello/i)
    
    expect(textElement).toBeInTheDocument
  })
})

describe('Nested', () => {

  test(' Render Name', () => {
    render(<Greet name='Tanish'/>)
    const textElement = screen.getByText('Hello Tanish')
    // const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument
  })
})