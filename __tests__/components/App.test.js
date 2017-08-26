// React + Redux
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Test
import { shallow, mount, render } from "enzyme";
// App
import reducers from '../../src/reducers';
import App from "../../src/components/App";

// Group the test
describe("App", () => {
  let component;

  beforeEach(() => {
    component = mount(
      <Provider store={createStore(reducers)}>
        <App name="app" store={createStore(reducers)}/>
      </Provider>
    );
  });

  it("it renders props correctly", () => {
    // console.log(component.props());
    expect(component.props().children.props.name).toBe('app');
  });

  // Test one attribute
  it("shows the correct text", () => {
    expect(component.find('h2').text()).toBe("React simple starter");
  });

  it("renders 1 App component using shallow", () => {
    const component = shallow(<App name="myApp" />);
    expect(component).toHaveLength(1);
  });

  it('show a comment box has class comment-box', () => {
    expect(component.find('.comment-box').length).toEqual(1);
  });

  it('show a comment list has class comment-box', () => {
    expect(component.find('.comment-list').length).toEqual(1);
  });
});
