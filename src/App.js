import React, { Component } from 'react';
import classes from './App.module.css';
import Screen from './ScreenComponent/Screen';
import Keypad from './KeypadComponent/Keypad';

class App extends Component {
  render() {
    return (
      <div className={classes.Calculator}>
        <Screen />
        <Keypad />
      </div>
    );
  }
}

export default App;
