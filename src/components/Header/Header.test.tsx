import {render, screen} from '@testing-library/react'
import Header from '../components';

describe("Header", () => {
  it("Header mounts", () => {
    render(<Header />)
    expect(screen.getAllByTestId(Header)).toBeInTheDocument();
  })
})