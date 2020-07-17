import React from 'react';

import classes from './Column.module.css';

const Column = ({ value, width, left, color }) => {
  const styles = {
    backgroundColor: color,
    width: `${width}px`,
    left: `${left}px`,
    height: `${500 * value}px`,
  };
  return <div className={classes.Column} style={styles}></div>;
};

export default Column;
