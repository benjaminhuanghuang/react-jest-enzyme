import React from "react";
import ReactDOM from "react-dom";
// Shallow renders the current node and returns a shallow wrapper around it
import { shallow, mount, render } from "enzyme";
import mockStore from 'redux-mock-store';

import CommentList from '../../src/components/CommentList';

describe.skip('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['New Comment', 'Other New Comment'] };
    component = shallow(<CommentList/>, { context: { store: mockStore(props)}});
  });

  it('shows an LI for each comment', () => {
    const props = { comments: ['New Comment', 'Other New Comment'] };
    let cl = shallow(<CommentList/>, { context: { store: mockStore(props)}});
    expect(cl.find('li')).to.have.length(2);
  });

  it.skip('shows each comment that is provided', () => {
    expect(component).to.contain('New Comment');
    expect(component).to.contain('Other New Comment');
  });
});