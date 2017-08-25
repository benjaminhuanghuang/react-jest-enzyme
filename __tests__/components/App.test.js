import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, render } from "enzyme";

import App from "../../src/components/App";

// Group the test
describe("App", () => {
  let component;

  beforeEach(() => {
    component = shallow(<App name="app"/>);
  });

  it("it renders props correctly", () => {
    expect(component.instance().props.name).toBe('app');
  });

  // Test one attribute
  it("shows the correct text", () => {
    expect(component.find('h2').text()).toBe("React simple starter");
  });

  it("renders 1 App component using shallow", () => {
    const component = shallow(<App name="myApp" />);
    expect(component).toHaveLength(1);
  });
});
