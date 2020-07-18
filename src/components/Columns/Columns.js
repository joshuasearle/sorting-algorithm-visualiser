import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Column from './Column/Column';
import classes from './Columns.module.css';

const Columns = () => {
  const currentList = useSelector((state) => state.currentList);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const windowResizeHandler = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', windowResizeHandler);
    return () => {
      window.removeEventListener('resize', windowResizeHandler);
    };
  });

  const elementWidth = Math.floor((windowWidth * 0.8) / currentList.length);
  const gapWidth = Math.floor((windowWidth * 0.2) / (currentList.length + 1));
  const residual =
    windowWidth -
    (elementWidth * currentList.length + gapWidth * (currentList.length + 1));

  const columns = currentList.map((column, index) => (
    <Column
      value={column.value}
      key={index}
      width={elementWidth}
      left={residual / 2 + gapWidth + index * (gapWidth + elementWidth)}
      color={column.color}
    />
  ));

  return <div className={classes.Columns}>{columns}</div>;
};

export default Columns;
