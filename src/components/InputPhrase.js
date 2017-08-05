import React, { Component } from 'react';
import update from 'immutability-helper';
import ActivePhrase from './ActivePhrase';
import main from '../main.css';

class InputPhrase extends Component {
  constructor(props){
    super(props)

    this.state = ({
      phrase: null,
    })
  }

  handleClick() {
    const phrase = this.textInput.value;
    this.setState({phrase});
  }

  render() {
    return (
      <div>
        <div className="phrase">
          <div className="input-phrase">
            <h1>Enter a phrase you want to remember</h1>
          </div>
          <div className="enter-phrase">
            <input type="text" ref={(input) => { this.textInput = input; }}/>
            <button onClick={this.handleClick.bind(this)}>click here when done</button>
          </div>
        </div>

        <ActivePhrase
          phrase={this.state.phrase}
        />
      </div>
    )
  }
}

export default InputPhrase;
