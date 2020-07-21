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

export const setSpeed = (speed) => {
  return {
    type: actionTypes.SET_SPEED,
    speed: speed,
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
    type: actionTypes.HIGHLIGHT_ELEMENTS,
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

export const visualise = () => {
  return (dispatch, getState) => {
    // stop any current visualisations
    dispatch(stopVisualisation());
    // get alg, visId, and animations from alg
    const alg = sortingAlgs[getState().algorithm];
    const visId = getState().nextVisId;
    const animations = alg(getState().currentList, visId);
    // start visualisation
    dispatch(startVisualisation());
    recursiveTimeout(dispatch, getState, animations, 0, visId);
  };
};

const recursiveTimeout = (dispatch, getState, actions, actionIdx, visId) => {
  setTimeout(() => {
    if (actionIdx >= actions.length - 1 || getState().currentVisId !== visId) {
      // if visualisation has ended, or at end of animation sequence, end the visualisation
      dispatch(stopVisualisation());
      return;
    }
    // do the animation
    dispatch(actions[actionIdx]);
    recursiveTimeout(dispatch, getState, actions, actionIdx + 1, visId);
  }, speedToInterval(getState().speed)); // continually update the interval
};

const speedToInterval = (speed) => {
  return 100 - speed + 4; // max interval of 4ms on modern browsers
};

export const animateElements = (visId, highlights, swap) => {
  return {
    type: actionTypes.ANIMATE_ELEMENTS,
    visId: visId,
    highlights: highlights,
    swap: swap,
  };
};
