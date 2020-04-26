import React from 'react';
import classes from './Screen.module.css';

const Screen = (props) => {
  return (
    <div className={classes.Screen}>
      <p className={classes.Result}>{props.result}</p>
      <p className={classes.Equation}>1+2+3+4+5</p>
    </div>
  );
};

export default Screen;
