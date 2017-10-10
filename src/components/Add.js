/*
Add component has a form element with an input text and a button. 

We want to test the behavior of the component when the button is clicked. 

The Add component calls the handleAdd method when the button is clicked. 
  The handleAdd method calls the onAdd function set in the props. 
    Usually, the actual work is performed by the parent component or a Redux action.

Testing behavior is best performed by mounting the component. Jest has good mocking support. 
We will use jest.fn() to create a mock function. We will supply the mock to the onAdd prop of 
our component.

*/

import React from "react";
export default class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(e) {
    e.preventDefault();
    this.props.onAdd(this.state.name);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <button onClick={this.handleAdd}>Add</button>
      </form>
    );
  }
}
