import * as actionTypes from './actionTypes';
import { act } from 'react-dom/test-utils';

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

export const highlightElements = (color, idxs) => {
  return {
    type: actionTypes.HIGHLIGH_ELEMENTS,
    color: color,
    idxs: idxs,
  };
};
