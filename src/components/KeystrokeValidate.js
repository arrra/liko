import React, { Component } from 'react';
import InputPhrase from './InputPhrase';

class Keystroke extends Component {
  constructor() {
    super()
    this.state = {
      phrase: '',
      keyPressed: '',
      disableInput: false
    }
  }

  handleKeyPress(event) {
    this.setState({keyPressed :  this.state.keyPressed + event.key});
    if(this.state.keyPressed !== this.state.phrase.slice(0, this.state.keyPressed.length )){
      this.setState({disableInput: true});
    }

  }

  getdata(data) {
    this.setState({phrase: this.state.phrase + data})
  }

  render() {
    return (
      <div>
        <input onKeyPress={this.handleKeyPress.bind(this)} disabled={this.state.disableInput}/>
        <InputPhrase onDone={this.getdata.bind(this)}/>
      </div>
    )
  }
}

export default Keystroke;
