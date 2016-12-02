import React, { Component } from 'react';

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const message = this.props.message;
    return (
      <div className="row-fluid">
        <div className="col-xs-2 center">{message.author}</div>
        <div className="col-xs-10 center">{message.text}</div>
      </div>
    );
  }
}
