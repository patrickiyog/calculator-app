import React, { Component } from 'react';
import classes from './App.module.css';
import Screen from './ScreenComponent/Screen';
import Keypad from './KeypadComponent/Keypad';

class App extends Component {
  state = {
    result: '',
    equation: ''
  };

  calculate = (button) => {
    console.log(button);
  };

  reset = () => {
    this.setState.result = '';
    this.setState.equation = '';
  };

  del = () => {
    this.setState.result.slice(0, -1);
  };

  render() {
    return (
      <div className={classes.Calculator}>
        <Screen result={this.state.result} />
        <Keypad onClick={this.calculate} />
      </div>
    );
  }
}

export default App;
