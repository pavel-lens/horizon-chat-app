import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const styleButton = {
  margin: 12,
};

export default class MessageForm extends Component {
  render() {
    return (
      <form ref="form">
        <div className="container">
          <TextField
            onChange={this.props.onAuthorChange}
            value={this.props.author}
            floatingLabelText="Author"
            hintText="Your name"/>
          <TextField
            onChange={this.props.onTextChange}
            value={this.props.text}
            floatingLabelText="Message"
            hintText="Hey there.."/>
          <RaisedButton
            primary={true}
            onTouchTap={this.props.onSendMessage}
            style={styleButton}
            >Send Message</RaisedButton>
        </div>
      </form>
    )
  }
}
