import React, { Component } from 'react';
import InputPhrase from './InputPhrase';

class Keystroke extends Component {
  constructor() {
    super()
    this.state = {
      phrase: '',
      keyCount: 0,
      keyRecord: false
    }
  }

  componentWillMount(){
    document.addEventListener("keydown", this.handleKeyPress.bind(this))
  }

  handleKeyPress(event) {
    let currentKeyPressed = event.key;
    if(this.state.keyRecord){
      if(this.state.phrase[this.state.keyCount] === currentKeyPressed){
        console.log('true')
      } else {
        console.log('false')
      }
      this.setState({keyCount: this.state.keyCount + 1})
    }
  }

  getdata(data) {
    this.setState({
      phrase: this.state.phrase + data,
      keyRecord: true
    })
  }

  render() {
    return (
      <div>
        <InputPhrase onDone={this.getdata.bind(this)}/>
      </div>
    )
  }
}

export default Keystroke;
