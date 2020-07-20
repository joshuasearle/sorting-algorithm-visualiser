import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../inputs/Button/Button';
import * as actionCreators from '../../../store/actionCreators';

const RandomList = () => {
  const dispatch = useDispatch();
  const length = useSelector((state) => state.currentList.length);

  const clickHandler = () => {
    dispatch(actionCreators.stopVisualisation());
    dispatch(actionCreators.generateList(length));
  };

  return <Button onClick={clickHandler}>RANDOMISE LIST</Button>;
};

export default RandomList;
