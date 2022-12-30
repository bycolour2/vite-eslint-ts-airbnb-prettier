import {render, screen} from '@testing-library/react'
import TemplateName from '../components';

describe("TemplateName", () => {
  it("TemplateName mounts", () => {
    render(<TemplateName />)
    expect(screen.getAllByTestId(TemplateName)).toBeInTheDocument();
  })
})