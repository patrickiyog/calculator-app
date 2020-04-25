import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  let btnClass = '';

  if (props.operator) {
    btnClass = classes.Operator;
  } else {
    btnClass = classes.Normal;
  }

  return <button className={btnClass}>{props.value}</button>;
};

export default Button;
