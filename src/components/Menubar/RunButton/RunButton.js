import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../inputs/Button/Button';
import * as actionCreators from '../../../store/actionCreators';

const RunButton = () => {
  const dispatch = useDispatch();

  const buttonPressHandler = () => {
    dispatch(actionCreators.visualise());
  };

  return <Button onClick={buttonPressHandler}>VISUALISE</Button>;
};

export default RunButton;
