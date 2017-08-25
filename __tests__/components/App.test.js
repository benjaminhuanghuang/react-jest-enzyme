import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
// Shallow renders the current node and returns a shallow wrapper around it
import { shallow, mount } from "enzyme";

import App from "../../src/components/App";

// Group the test
describe.skip("App", () => {
  let component;

  beforeEach(() => {
    component = renderer.create(<App />).toJSON();
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
  
  // Test one attribute
  it("shows the correct text", () => {
    expect(component['children']).toContainEqual("React simple starter");
  });

  it("renders 1 App component using shallow", () => {
    const component = shallow(<App name="myApp" />);
    //console.log(component.props());
    expect(component).toHaveLength(1);
  });
});
