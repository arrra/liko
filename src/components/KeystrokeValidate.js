import React, { Component } from 'react';
import InputPhrase from './InputPhrase';

class Keystroke extends Component {
  constructor() {
    super()
    this.state = {
      phrase: '',
      keyPressed: '',
      disableInput: false,
      keyCount: 0
    }
  }
  componentWillMount(){
    document.addEventListener("keydown", this.oneKeyPressed.bind(this))
  }
  oneKeyPressed(event){
    this.setState({keyCount: this.state.keyCount + 1})
    console.log(event.key)
  }

  handleKeyPress(event) {
    this.setState({keyPressed :  this.state.keyPressed + event.key});
  }

  getdata(data) {
    this.setState({phrase: this.state.phrase + data})
  }

  render() {
    console.log(this.state.phrase)
    return (
      <div>
        <input onKeyPress={this.handleKeyPress.bind(this)}/>
        <InputPhrase onDone={this.getdata.bind(this)}/>
      </div>
    )
  }
}

export default Keystroke;
