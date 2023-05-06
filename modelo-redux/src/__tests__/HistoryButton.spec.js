import { render } from "@testing-library/react";
import HistoryButton from "../components/history_button_component/History_button";
import { expect, it } from "@jest/globals";
import { unmountComponentAtNode } from "react-dom";
import { BrowserRouter } from "react-router-dom";

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

it('render button', () => {
    render(<BrowserRouter><HistoryButton /></BrowserRouter>)
    expect(container).toBeInTheDocument();
});
