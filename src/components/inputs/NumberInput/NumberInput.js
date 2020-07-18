import React from 'react';

import classes from '../Input.module.css';

const NumberInput = ({ value, onChange, disabled }) => {
  return (
    <input
      className={classes.Input}
      type='number'
      value={value}
      onChange={onChange}
      disabled={disabled}
    ></input>
  );
};

export default NumberInput;
