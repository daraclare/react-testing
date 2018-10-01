import React from "react";
import { render, cleanup } from "react-testing-library";
import Counter from "./Counter";

test("<Counter />", () => {
  const wrapper = render(<Counter />);
  wrapper.debug();
  const button = wrapper.getByText("0").tagName;
  expect(button).toBe("BUTTON");
});
