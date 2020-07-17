import React from 'react';

import classes from './Button.module.css';

const Button = ({ children, onChange }) => {
  return (
    <button className={classes.Button} onChange={onChange}>
      {children}
    </button>
  );
};

export default Button;
