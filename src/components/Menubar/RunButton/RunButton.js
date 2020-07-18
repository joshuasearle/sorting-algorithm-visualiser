import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../inputs/Button/Button';
import * as actionCreators from '../../../store/actionCreators';
import sortingAlgs from '../../../sorting-algs/sorting-main';
import { store } from '../../../index';

const RunButton = () => {
  const dispatch = useDispatch();
  const [currentList, algorithm] = useSelector((state) => [
    state.currentList,
    state.algorithm,
  ]);

  const buttonPressHandler = () => {
    const alg = sortingAlgs[algorithm];
    const animations = alg(currentList);
    recursiveTimeout(animations, 0);
  };

  const recursiveTimeout = (actions, actionIdx) => {
    setTimeout(() => {
      dispatch(actions[actionIdx]);
      if (actionIdx + 1 === actions.length) return;
      recursiveTimeout(actions, actionIdx + 1);
    }, store.getState().interval);
  };

  return <Button onClick={buttonPressHandler}>RUN SORT</Button>;
};

export default RunButton;
