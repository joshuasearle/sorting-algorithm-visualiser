import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../inputs/Button/Button';
import * as actionCreators from '../../../store/actionCreators';

const RunButton = () => {
  const dispatch = useDispatch();
  const [currentList, algorithm] = useSelector((state) => [
    state.currentList,
    state.algorithm,
  ]);

  const buttonPressHandler = () => {
    dispatch(actionCreators.visualise());
  };

  return <Button onClick={buttonPressHandler}>RUN SORT</Button>;
};

export default RunButton;
