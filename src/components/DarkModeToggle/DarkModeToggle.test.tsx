import {render, screen} from '@testing-library/react'
import DarkModeToggle from '../components';

describe("DarkModeToggle", () => {
  it("DarkModeToggle mounts", () => {
    render(<DarkModeToggle />)
    expect(screen.getAllByTestId(DarkModeToggle)).toBeInTheDocument();
  })
})