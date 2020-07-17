import React from 'react';

import classes from '../Input.module.css';

const NumberInput = ({ value, onChange }) => {
  return (
    <input
      className={classes.Input}
      type='number'
      value={value}
      onChange={onChange}
    ></input>
  );
};

export default NumberInput;
