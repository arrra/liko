import React, { Component } from 'react';
import update from 'immutability-helper';
import CharactersList from './CharactersList';

class InputPhrase extends Component {
  constructor(){
    super()
    this.state = ({
      phrase: []
    })
  }

  handleClick() {
    this.setState({phrase: this.textInput.value.split('')})
    // this.props.onDone(this.state.phrase);
  }

  render() {
    return (
      <div>
        <h1>Enter a phrase you want to remember</h1>
        <input type="text" ref={(input) => { this.textInput = input; }}/>
        <button onClick={this.handleClick.bind(this)}>click here when done</button>
      <h2>Phrase: {this.state.phrase}</h2>
      <CharactersList list={this.state.phrase}/>
      </div>
    )
  }
}

export default InputPhrase;
