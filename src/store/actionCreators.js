import * as actionTypes from './actionTypes';
import sortingAlgs from '../sorting-algs/sorting-main';

export const generateList = (length) => {
  return {
    type: actionTypes.GENERATE_LIST,
    length: length,
  };
};

export const setAlgorithm = (algorithm) => {
  return {
    type: actionTypes.SET_ALGORITHM,
    algorithm: algorithm,
  };
};

export const swapElements = (idx1, idx2) => {
  return {
    type: actionTypes.SWAP_ELEMENTS,
    idx1: idx1,
    idx2: idx2,
  };
};

export const highlightElements = (idxColorMap) => {
  return {
    type: actionTypes.HIGHLIGH_ELEMENTS,
    idxColorMap: idxColorMap,
  };
};

export const visualise = () => {
  return (dispatch, getState) => {
    const algorithm = sortingAlgs[getState().algorithm];
    const animationActions = algorithm(getState().currentList);
    for (let i = 0; i < animationActions.length; i++) {
      let action = animationActions[i];
      setTimeout(() => dispatch(action), 10 * i);
    }
  };
};
