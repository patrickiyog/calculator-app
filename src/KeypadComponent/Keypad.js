import React from 'react';
import Button from '../ButtonComponent/Button';
import classes from './Keypad.module.css';

const Keypad = () => {
  const buttonValues = [
    { value: ')', operator: false },
    { value: '(', operator: false },
    { value: 'CE', operator: false },
    { value: 'C', operator: false },
    { value: '7', operator: false },
    { value: '8', operator: false },
    { value: '9', operator: false },
    { value: '÷', operator: true },
    { value: '4', operator: false },
    { value: '5', operator: false },
    { value: '6', operator: false },
    { value: 'x', operator: true },
    { value: '1', operator: false },
    { value: '2', operator: false },
    { value: '3', operator: false },
    { value: '+', operator: true },
    { value: '•', operator: false },
    { value: '0', operator: false },
    { value: '=', operator: true },
    { value: '-', operator: true }
  ];

  let keypad = (
    <div className={classes.Keypad}>
      {buttonValues.map((button, index) => {
        return (
          <Button key={index} value={button.value} operator={button.operator} />
        );
      })}
    </div>
  );

  return <div>{keypad}</div>;
};

export default Keypad;
