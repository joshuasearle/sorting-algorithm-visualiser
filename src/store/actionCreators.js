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

export const swapElements = (idx1, idx2, visId) => {
  return {
    type: actionTypes.SWAP_ELEMENTS,
    idx1: idx1,
    idx2: idx2,
    visId: visId,
  };
};

export const highlightElements = (idxColorMap, visId) => {
  return {
    type: actionTypes.HIGHLIGH_ELEMENTS,
    idxColorMap: idxColorMap,
    visId: visId,
  };
};

export const startVisualisation = () => {
  return { type: actionTypes.START_VISUALISATION };
};

export const stopVisualisation = (visId) => {
  return { type: actionTypes.STOP_VISUALISATION, visId: visId };
};
