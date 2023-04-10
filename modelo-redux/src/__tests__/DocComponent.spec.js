import { render, screen } from "@testing-library/react";
import { expect, it } from "@jest/globals";
import { unmountComponentAtNode } from "react-dom";
import DocComponent from "../components/doc_component/Doc_component";

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

it('render component', () => {
    render(<DocComponent />,container)
    expect(container).toBeInTheDocument()
});

it('render component with list', () => {
    render(<DocComponent />)
    const element = screen.getByRole("list");
    expect(element).toBeInTheDocument()
});
