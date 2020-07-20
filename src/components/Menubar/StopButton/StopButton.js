import React from 'react';
import { useDispatch } from 'react-redux';

import * as actionCreators from '../../../store/actionCreators';
import Button from '../../inputs/Button/Button';

const StopButton = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(actionCreators.stopVisualisation());
  };

  return <Button onClick={clickHandler}>STOP SORT</Button>;
};

export default StopButton;
