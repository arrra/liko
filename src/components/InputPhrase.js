import React, { Component } from 'react';
import update from 'immutability-helper';
import CharactersList from './CharactersList';

class InputPhrase extends Component {
  constructor(){
    super()
    this.state = ({
      keyCount: 0,
      keyRecord: false,
      phrase: []
    })
  }

  componentWillMount(){
    document.addEventListener("keydown", this.handleKeyPress.bind(this))
  }

  componentWillUnmount(){
    document.addEventListener("keydown", this.handleKeyPress.bind(this))
  }

  handleClick() {
    let newState = [];
    for(let i = 0; i < this.textInput.value.length; i++){
      newState.push({'id': i, 'char': this.textInput.value[i], 'color': 'black', 'isCorrect': false})
    }
    this.setState({
      phrase: newState,
      keyRecord: true
    });

  }

  handleKeyPress(event){
    let currentKeyPressed = event.key;
    if(this.state.keyRecord){
      if(this.state.phrase[this.state.keyCount]['char'] === currentKeyPressed){
        let temp = this.state.phrase;
        temp[this.state.keyCount]['color'] = 'green'
        this.setState({phrase: temp})
      } else {
        let temp = this.state.phrase;
        temp[this.state.keyCount]['color'] = 'red'
        console.log('false')
      }
      this.setState({keyCount: this.state.keyCount + 1})
    }

  }

  render() {
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
