import React from 'react';
import Button from '../../inputs/Button/Button';
import { useDispatch } from 'react-redux';

import * as actionCreators from '../../../store/actionCreators';

const SortButton = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(actionCreators.stopVisualisation());
    dispatch(actionCreators.instantSort());
  };

  return <Button onClick={onClickHandler}>INSTANT SORT</Button>;
};

export default SortButton;
