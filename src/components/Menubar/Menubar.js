import React from 'react';
import { useSelector } from 'react-redux';

import classes from './Menubar.module.css';
import AlgorithmPicker from './AlgorithmPicker/AlgorithmPicker';
import ElementCountPicker from './ElementCountPicker/ElementCountPicker';
import RunButton from './RunButton/RunButton';
import SpeedPicker from './SpeedPicker/SpeedPicker';
import StopButton from './StopButton/StopButton';
import RandomiseList from './RandomiseList/RandomiseList';
import ReverseButton from './ReverseButton/ReverseButton';
import SortButton from './SortButton/SortButton';

const Menubar = () => {
  const visId = useSelector((state) => state.currentVisId);

  const button = visId === null ? <RunButton /> : <StopButton />;
  return (
    <div className={classes.Menubar}>
      <h1 className={classes.Title}>Sorting Algorithm Visualiser</h1>
      <div className={classes.AlgorithmPicker}>
        <AlgorithmPicker />
      </div>
      <div className={classes.ElementCountPicker}>
        <ElementCountPicker />
        <RandomiseList />
        <SpeedPicker />
        <ReverseButton />
        <SortButton />
      </div>
      <div className={classes.ElementCountPicker}></div>
      <div className={classes.RunButton}>{button}</div>
    </div>
  );
};

export default Menubar;
