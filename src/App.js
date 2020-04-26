import React, { Component } from 'react';
import classes from './App.module.css';
import Screen from './ScreenComponent/Screen';
import Keypad from './KeypadComponent/Keypad';

class App extends Component {
  state = {
    result: '',
    equation: ''
  };

  click = (button) => {
    if (button === '=') {
      this.calculate();
    } else if (button === 'C') {
      this.reset();
    } else if (button === 'DEL') {
      this.del();
    } else {
      this.setState({ equation: this.state.equation + button });
    }
  };

  calculate = () => {
    /* eslint no-eval: 0 */
    this.setState({ result: eval(this.state.equation) });
    this.setState({ equation: '' });
  };

  reset = () => {
    this.setState({ result: '', equation: '' });
  };

  del = () => {
    this.setState({ equation: this.state.equation.slice(0, -1) });
  };

  render() {
    return (
      <div className={classes.Calculator}>
        <Screen result={this.state.result} equation={this.state.equation} />
        <Keypad onClick={this.click} />
      </div>
    );
  }
}

export default App;
