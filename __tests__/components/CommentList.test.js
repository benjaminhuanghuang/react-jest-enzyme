// React + Redux
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Test library
import { shallow, mount, render } from "enzyme";
import mockStore from 'redux-mock-store';

// App
import reducers from '../../src/reducers';
import CommentList from '../../src/components/CommentList';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['New Comment', 'Other New Comment'] };
    component = mount(<CommentList/>, { context: {store: createStore(reducers, props)}});
  });

  it('shows an LI for each comment', () => {
    expect(component.find('li').length).toEqual(2);
  });

  it.skip('shows each comment that is provided', () => {
    expect(component.text()).toContainEqual('New Comment');
    expect(component.text()).toContainEqual('Other New Comment');
  });
});