import React from "react";

// Test library
import { shallow, mount, render } from "enzyme";

// App
import AddList from '../../src/components/AddList';

describe('AddList', () => {
  let app;

  beforeEach(() => {
    app = shallow(<AddList />);
  });

  it('App renders nested components', () => {
    expect(app.find('Add').length).toEqual(1);
    expect(app.find('List').length).toEqual(1);
  });

  it('onAdd updates List', () => {
    const add = app.find('Add').first();
    add.props().onAdd('Name 1');
    app.update();     
    const list = app.find('List').first();
    const listData = list.props().data;
    expect(listData.length).toEqual(1);
    expect(listData[0]).toEqual('Name 1');
  });
});