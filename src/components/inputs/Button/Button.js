import React from 'react';

import classes from './Button.module.css';

const Button = ({ children, onClick, disabled }) => {
  return (
    <button disabled={disabled} className={classes.Button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
