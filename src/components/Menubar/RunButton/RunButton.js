import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../inputs/Button/Button';
import * as actionCreators from '../../../store/actionCreators';

const RunButton = () => {
  const dispatch = useDispatch();

  const buttonPressHandler = () => {
    console.log('lsjdf');
    dispatch(actionCreators.visualise());
  };

  return <Button onClick={buttonPressHandler}>RUN SORT</Button>;
};

export default RunButton;
