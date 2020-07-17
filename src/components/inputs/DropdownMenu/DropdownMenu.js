import React from 'react';

import classes from '../Input.module.css';

const DropdownMenu = ({ options }) => {
  const dropDownOptions = options.map((option) => <option>{option}</option>);
  return <select className={classes.Input}>{dropDownOptions}</select>;
};

export default DropdownMenu;
