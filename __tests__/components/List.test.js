import React from "react";

// Test library
import { shallow, mount, render } from "enzyme";

// App
import List from '../../src/components/List';

describe('List', () => {
  let list;

  beforeEach(() => {
    list = shallow(<List data={['Name 1', 'Name 2', 'Name 3']} />);
  });

  it('List renders table', () => {
    expect(list.find('table').length).toEqual(1);
  });
  
  it('Class of rendered table', () => {
    expect(list.find('.myClass').length).toEqual(1);
  });

  it('List renders column', () => {
    const arr = list.find('th');
    expect(arr.length).toEqual(1);
    expect(arr.first().text()).toEqual('Name');
  });
  
  it('List renders data', () => {
    const arr = list.find('td');
    expect(arr.length).toEqual(3);
    expect(arr.at(1).text()).toEqual('Name 2');
  });
});