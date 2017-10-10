import React from "react";

// Test library
import { shallow, mount, render } from "enzyme";

// App
import Add from '../../src/components/Add';

describe('Add', () => {
  let add;
  let onAdd;

  beforeEach(() => {
    onAdd = jest.fn();  //to create a mock function
    add = mount(<Add onAdd={onAdd} />);
  });

  it('Add requires onAdd prop', () => {
    expect(add.props().onAdd).toBeDefined();
  });
  
  it('Add renders button', () => {
    const button = add.find('button').first();
    expect(button).toBeDefined();
  });

  it('Button click calls onAdd', () => {
    const button = add.find('button').first();
    const input = add.find('input').first();
    //Enzyme does not allow to change the value of the input element
    input.simulate('change', { target: { value: 'Name 4' } });
    button.simulate('click');  // test button click
    expect(onAdd).toBeCalledWith('Name 4');
  });  
});