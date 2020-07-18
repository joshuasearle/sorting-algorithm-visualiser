import React from 'react';

import classes from './Menubar.module.css';
import AlgorithmPicker from './AlgorithmPicker/AlgorithmPicker';
import ElementCountPicker from './ElementCountPicker/ElementCountPicker';
import RunButton from './RunButton/RunButton';
import SpeedPicker from './SpeedPicker/SpeedPicker';

const Menubar = () => {
  return (
    <div className={classes.Menubar}>
      <h1 className={classes.Title}>Sorting Algorithm Visualiser</h1>
      <div className={classes.AlgorithmPicker}>
        <AlgorithmPicker />
      </div>
      <div className={classes.ElementCountPicker}>
        <ElementCountPicker />
        <SpeedPicker />
      </div>
      <div className={classes.ElementCountPicker}></div>
      <div className={classes.RunButton}>
        <RunButton />
      </div>
    </div>
  );
};

export default Menubar;
