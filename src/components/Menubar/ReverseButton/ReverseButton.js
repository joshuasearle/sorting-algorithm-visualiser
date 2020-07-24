import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../inputs/Button/Button';
import * as actionCreators from '../../../store/actionCreators';

const ReverseButton = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(actionCreators.stopVisualisation());
    dispatch(actionCreators.reverseList());
  };

  return <Button onClick={clickHandler}>REVERSE</Button>;
};

export default ReverseButton;
