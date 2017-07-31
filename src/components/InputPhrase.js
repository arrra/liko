import React, { Component } from 'react';

class InputPhrase extends Component {
  constructor(){
    super()
    this.state = ({
      phrase: ''
    })
  }

  handleClick() {
    this.props.onDone(this.state.phrase);
  }

  render() {
    return (
      <div>
        <h1>Enter a phrase you want to remember</h1>
        <input type="text"/>
        <button onClick={this.handleClick.bind(this)}>click here when done</button>
      <h2>Phrase: {this.state.phrase}</h2>
      </div>
    )
  }
}

export default InputPhrase;
