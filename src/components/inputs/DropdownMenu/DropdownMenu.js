import React from 'react';

import classes from '../Input.module.css';

const DropdownMenu = ({ options, value, onChange, disabled }) => {
  const dropDownOptions = options.map((option) => (
    <option key={option}>{option}</option>
  ));
  return (
    <select
      disabled={disabled}
      value={value}
      className={classes.Input}
      onChange={onChange}
    >
      {dropDownOptions}
    </select>
  );
};

export default DropdownMenu;
