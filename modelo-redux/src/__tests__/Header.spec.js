import { render, screen } from "@testing-library/react";
import Header from "../components/header_component/Header";
import { expect, it } from "@jest/globals";
import { unmountComponentAtNode } from "react-dom";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("renders header", () => {
  render(<Header />, container);
  expect(container).toBeInTheDocument();
});

it('renders header with title', () => {
    render(<Header title="testes"/>, container)
    const title = screen.getByText(/testes/i);
    expect(title).toBeInTheDocument()
});

