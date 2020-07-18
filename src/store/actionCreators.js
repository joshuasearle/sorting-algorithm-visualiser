import * as actionTypes from './actionTypes';

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

export const setInterval = (interval) => {
  return {
    type: actionTypes.SET_INTERVAL,
    interval: interval,
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

export const setVisualising = (visualising) => {
  return { type: actionTypes.SET_VISUALISING, visualising: visualising };
};
