import React from "react";
import { render } from "@testing-library/react";
import { Example1 } from "./text.composition";

it("should render with the correct text", () => {
  const { getByText } = render(<Example1 />);
  const rendered = getByText("hello from Text");
  expect(rendered).toBeTruthy();
});
