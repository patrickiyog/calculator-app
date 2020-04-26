import React from 'react';
import Button from '../ButtonComponent/Button';
import classes from './Keypad.module.css';

const Keypad = (props) => {
  const buttonValues = [
    { value: '(', operator: false },
    { value: ')', operator: false },
    { value: 'C', operator: false },
    { value: 'DEL', operator: false },
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
    { value: '.', operator: false },
    { value: '0', operator: false },
    { value: '=', operator: true },
    { value: '-', operator: true }
  ];

  let keypad = (
    <div className={classes.Keypad}>
      {buttonValues.map((button, index) => {
        let btnValue = '';

        if (button.value === 'x') {
          btnValue = '*';
        } else if (button.value === '÷') {
          btnValue = '/';
        } else {
          btnValue = button.value;
        }

        return (
          <Button
            key={index}
            value={btnValue}
            symbol={button.value}
            operator={button.operator}
            onClick={props.onClick}
          />
        );
      })}
    </div>
  );

  return <div>{keypad}</div>;
};

export default Keypad;
