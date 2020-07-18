import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../inputs/Button/Button';
import sortingAlgs from '../../../sorting-algs/sorting-main';
import { store } from '../../../index';
import * as actionCreators from '../../../store/actionCreators';

const RunButton = () => {
  const dispatch = useDispatch();
  const [currentList, algorithm, visualising] = useSelector((state) => [
    state.currentList,
    state.algorithm,
    state.visualising,
  ]);

  const buttonPressHandler = () => {
    const alg = sortingAlgs[algorithm];
    const animations = alg(currentList);
    dispatch(actionCreators.setVisualising(true));
    recursiveTimeout(animations, 0);
  };

  const recursiveTimeout = (actions, actionIdx) => {
    setTimeout(() => {
      dispatch(actions[actionIdx]);
      if (actionIdx + 1 === actions.length) {
        dispatch(actionCreators.setVisualising(false));
        return;
      }
      recursiveTimeout(actions, actionIdx + 1);
    }, store.getState().interval);
  };

  return (
    <Button disabled={visualising} onClick={buttonPressHandler}>
      RUN SORT
    </Button>
  );
};

export default RunButton;
