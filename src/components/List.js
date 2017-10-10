/*
 List component which displays a list of items in tabular format.
 We will test if the React component renders a table and the data passed in props.
*/
import React, { Component } from 'react';

export default class List extends React.Component {
  render() {
    return (
      <table className="myClass">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((item, index) => (
            <tr key={index}>
              <td>
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}