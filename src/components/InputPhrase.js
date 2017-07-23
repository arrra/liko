import React, { Component } from 'react';

class InputPhrase extends Component {
  constructor(){
    super()
    this.state = ({
      phrase: ''
    })
  }

  handleChange(event) {
    this.setState({phrase: event.target.value})
  }

  render() {
    console.log(this.state.phrase)
    return (
      <div>
        <h1>Enter a phrase you want to remember</h1>
        <input type="text" onChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
}

export default InputPhrase;
