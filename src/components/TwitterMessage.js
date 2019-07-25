import React from "react";

class TwitterMessage extends React.Component {
  state = {
    availableCharacters: this.props.maxChars,
    message: ""
  };

  handleChange = e =>{
    this.setState({
      availableCharacters:(this.props.maxChars - e.target.value.length),
      message: e.target.value
    })
  }
  render() {
    console.log(this.state.message)
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} value={this.state.message} type="text" name="message" id="message" />
        {this.state.availableCharacters}
      </div>
    );
  }
}

export default TwitterMessage;
