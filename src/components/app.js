import React from 'react';
import { Component } from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>React simple starter</h2>
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}