import React, { Component } from 'react';

// Takes a phrase. And any time it get a new phrase, starts training on it.
class ActivePhrase extends Component {
  constructor(props){
    super(props)

    this.state = ({
      currentIndex: 0,
      streak: 0,
      characterStates: null,
    });
  }

  componentDidMount() {
    document.addEventListener("keydown", this._handleKeyPress.bind(this))
  }

  componentWillReceiveProps(nextProps) {
    let currentPhrase = this.props.phrase;
    let nextPhrase = nextProps.phrase;

    if (nextPhrase !== currentPhrase) {
      this._resetWithPhrase(nextPhrase)
    }
  }

  render() {
    const phrase = this.props.phrase || '';

    return (
      <div>
        {Array.from(phrase).map((char, i) => {
          let color = 'grey';

          // TODO: make safe
          const charState = this.state.characterStates[i];

          if (i < this.state.currentIndex) {
            color = (charState.isCorrect) ? 'green' : 'red';
          }

          let style = {
            fontSize: `${this.state.streak+1}rem`,
            fontWeight: 'bold',
            color,
          };
          return <span style={style}>{char}</span>
        })}
      </div>
    );
  }

  _handleKeyPress(event) {
    if (!this.props.phrase) return;

    if (this.state.currentIndex >= this.props.phrase.length) {
      this.setState({
        streak: (this._perfectPhraseEntered()) ? this.state.streak+1 : 0,
      });

      this._resetWithPhrase(this.props.phrase);
      return;
    }

    const pressedKey = event.key;
    const expectedKey = this.props.phrase[this.state.currentIndex];
    const isCorrectKeyPressed = (pressedKey === expectedKey);

    let characterStates = Object.assign([], this.state.characterStates);
    characterStates[this.state.currentIndex].isCorrect = isCorrectKeyPressed;

    this.setState({
      characterStates,
      currentIndex: this.state.currentIndex+1,
    });
  }

  _perfectPhraseEntered() {
    return this.state.characterStates.every(charState => {
      return charState.isCorrect;
    });
  }

  _resetWithPhrase(phrase) {
    // create the initial characterStates
    let characterStates = Array.from(phrase).map(() => {
      return {
        isCorrect: false,
      };
    });

    this.setState({
      currentIndex: 0,
      characterStates,
    });
  }
}

export default ActivePhrase;
