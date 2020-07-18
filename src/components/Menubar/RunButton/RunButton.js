import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../inputs/Button/Button';
import sortingAlgs from '../../../sorting-algs/sorting-main';
import { store } from '../../../index';
import * as actionCreators from '../../../store/actionCreators';

const RunButton = () => {
  const dispatch = useDispatch();
  const [currentList, algorithm] = useSelector((state) => [
    state.currentList,
    state.algorithm,
  ]);

  const buttonPressHandler = () => {
    dispatch(actionCreators.stopVisualisation());
    const alg = sortingAlgs[algorithm];
    const visId = store.getState().nextVisId;
    const animations = alg(currentList, visId);
    dispatch(actionCreators.startVisualisation());
    recursiveTimeout(animations, 0, visId);
  };

  const recursiveTimeout = (actions, actionIdx, visId) => {
    setTimeout(() => {
      dispatch(actions[actionIdx]);
      if (actionIdx + 1 === actions.length) {
        dispatch(actionCreators.stopVisualisation(visId));
        return;
      }
      recursiveTimeout(actions, actionIdx + 1, visId);
    }, store.getState().interval);
  };

  return <Button onClick={buttonPressHandler}>RUN SORT</Button>;
};

export default RunButton;
