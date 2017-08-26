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
import CommentBox from '../../src/components/CommentBox';


describe('CommentBox', () => {
  let component;

  beforeEach(() => {
    component = mount( 
      <Provider store={createStore(reducers)}>
        <CommentBox/>
      </Provider>);
  });

  it('has the correct class', () => {
    expect(component.hasClass('comment-box')).toEqual(true);
  });

  it('do not has a h2', () => {
    expect(component.find('h2')).toHaveLength(0);
  });

  it('has a text area', () => {
    expect(component.find('textarea')).toHaveLength(1);
  });

  it('has a button', () => {
    expect(component.find('button')).toHaveLength(1);
  });

  describe('simulate entering some text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', {target: {value: 'new comment'}});
    });

    it('shows that text in the textarea', () => {
      expect(component.find('textarea').text()).toBe('new comment');
    });

    it('when submitted, clears the input', () => {
      component.simulate('submit');
      expect(component.find('textarea').text()).toBe('');
    });
  });
});