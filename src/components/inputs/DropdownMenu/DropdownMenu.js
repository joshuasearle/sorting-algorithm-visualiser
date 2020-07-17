import React from 'react';

import classes from '../Input.module.css';

const DropdownMenu = ({ options, value, onChange }) => {
  const dropDownOptions = options.map((option) => (
    <option key={option}>{option}</option>
  ));
  return (
    <select value={value} className={classes.Input} onChange={onChange}>
      {dropDownOptions}
    </select>
  );
};

export default DropdownMenu;
