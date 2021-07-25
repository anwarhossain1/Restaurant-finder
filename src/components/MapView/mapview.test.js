import React from "react";
import { shallow } from "enzyme";
import MapView from "./MapView";
import { render, getByRole } from "@testing-library/react";
const setUp = (props = {}) => {
  const component = shallow(<MapView {...props} />);
  return component;
};

describe("Map view componet", () => {
  it("Should render without errors", () => {
    const component = setUp();
    const wrapper = component.find(".map");
    expect(wrapper.length).toBe(1);
  });
});

describe("Button render", () => {
  it("check button renders or not", () => {});
});
