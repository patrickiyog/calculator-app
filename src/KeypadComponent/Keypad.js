import React from 'react';
import Button from '../ButtonComponent/Button';
import classes from './Keypad.module.css';

const Keypad = () => {
  const buttonValues = [
    { value: '(', type: 'symbol' },
    { value: ')', type: 'symbol' },
    { value: 'CE', type: 'symbol' },
    { value: 'C', type: 'symbol' },
    { value: '7', type: 'number' },
    { value: '8', type: 'number' },
    { value: '9', type: 'number' },
    { value: '÷', type: 'symbol' },
    { value: '4', type: 'number' },
    { value: '5', type: 'number' },
    { value: '6', type: 'number' },
    { value: 'x', type: 'symbol' },
    { value: '1', type: 'number' },
    { value: '2', type: 'number' },
    { value: '3', type: 'number' },
    { value: '+', type: 'symbol' },
    { value: '•', type: 'number' },
    { value: '0', type: 'number' },
    { value: '=', type: 'number' },
    { value: '-', type: 'symbol' }
  ];

  /*
    Try to find a way to get the first 4 elements of the buttonValues array
    and then put each of the 4 elements into a Button component that becomes
    nested in a KeypadRow component. Repeat until all 20 elements in buttonValues
    are nested in a KeypadRow component.
  */

  return <div className={classes.Keypad}></div>;
};

export default Keypad;
