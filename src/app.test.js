import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("checking the app component", () => {
  it("checking the app component renders properly or not", () => {
    render(<App />);
  });
});
