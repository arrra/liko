import React, { Component } from 'react';
import update from 'immutability-helper';
import ActivePhrase from './ActivePhrase';

class InputPhrase extends Component {
  constructor(props){
    super(props)

    this.state = ({
      phrase: null,
    })
  }

    this.setState({
      phrase: newState,
      keyRecord: true
    });

  }

  handleClick() {
    const phrase = this.textInput.value;
    this.setState({phrase});
  }

  render() {
    return (
      <div>
        <h1>Enter a phrase you want to remember</h1>
        <input type="text" ref={(input) => { this.textInput = input; }}/>
        <button onClick={this.handleClick.bind(this)}>click here when done</button>

        <ActivePhrase
          phrase={this.state.phrase}
        />
      </div>
    )
  }
}

export default InputPhrase;
