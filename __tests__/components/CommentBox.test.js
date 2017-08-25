import React from "react";
import ReactDOM from "react-dom";
// Shallow renders the current node and returns a shallow wrapper around it
import { shallow, mount, render } from "enzyme";
import mockStore from 'redux-mock-store';

import CommentBox from '../../src/components/CommentBox';


describe('CommentBox', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CommentBox/>);
  });

  it('has the correct class', () => {
    expect(component).hasClass('comment-box').to.equal(true);
  });

  // it('has a text area', () => {
  //   expect(component.find('textarea')).to.exist();
  // });

  // it('has a button', () => {
  //   expect(component.find('button')).to.exist;
  // });

  // describe('entering some text', () => {
  //   beforeEach(() => {
  //     component.find('textarea').simulate('change', 'new comment');
  //   });

  //   it('shows that text in the textarea', () => {
  //     expect(component.find('textarea')).to.have.value('new comment');
  //   });

  //   it('when submitted, clears the input', () => {
  //     component.simulate('submit');
  //     expect(component.find('textarea')).to.have.value('');
  //   });
  // });
});