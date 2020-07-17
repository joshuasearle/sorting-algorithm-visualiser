import React from 'react';

import classes from './FormLabel.module.css';

const FormLabel = ({ children }) => {
  return <label className={classes.FormLabel}>{children}</label>;
};

export default FormLabel;
