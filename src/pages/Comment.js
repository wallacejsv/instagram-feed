import React, { Component } from 'react';

export default class Comment extends Component {
  render() {
      console.log(this.props.match.params);
    return(
        <>
            <h1>{this.props.match.params.author}</h1>
        </>
    );
  }
}
