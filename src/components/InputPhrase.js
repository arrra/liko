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
     
    let newState = [];
    for(let i = 0; i < this.textInput.value.length; i++){
      newState.push({'id': i, 'char': this.textInput.value[i], 'color': 'black', 'isCorrect': false})
    }
    this.setState({phrase: newState});
    // this.props.onDone(this.state.phrase);
  }

  render() {
    console.log(this.state.phrase)
    return (
      <div>
        <h1>Enter a phrase you want to remember</h1>
        <input type="text" ref={(input) => { this.textInput = input; }}/>
        <button onClick={this.handleClick.bind(this)}>click here when done</button>
      <CharactersList list={this.state.phrase}/>
      </div>
    )
  }
}

export default InputPhrase;
