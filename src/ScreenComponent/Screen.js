import React from 'react';
import classes from './Screen.module.css';

const Screen = (props) => {
  return (
    <div className={classes.Screen}>
      <p className={classes.Result}>{props.result}</p>
      <p className={classes.Equation}>{props.equation}</p>
    </div>
  );
};

export default Screen;
