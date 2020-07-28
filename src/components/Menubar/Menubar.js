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
      <div className={classes.Title}>
        <h1>Sorting Algorithm Visualiser</h1>
      </div>
      <div className={classes.Options}>
        <div className={classes.AlgPicker}>
          <AlgorithmPicker />
        </div>
        <div className={classes.ElCount}>
          <ElementCountPicker />
        </div>
        <div className={classes.Speed}>
          <SpeedPicker />
        </div>
      </div>
      <div className={classes.Buttons}>
        <div className={classes.Reverse}>
          <ReverseButton />
        </div>
        <div className={classes.Instant}>
          <SortButton />
        </div>
        <div className={classes.Randomise}>
          <RandomiseList />
        </div>
        <div className={classes.Visualise}>{button}</div>
      </div>
    </div>
  );
};

export default Menubar;
