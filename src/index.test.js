import React from "react";
import { render } from "@testing-library/react";
import Index from "./index";

describe("checking the app component", () => {
  it("checking the app component renders properly or not", async () => {
    render(<Index />);
  });
});
