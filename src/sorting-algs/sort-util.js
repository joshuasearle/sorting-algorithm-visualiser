import * as actionCreators from '../store/actionCreators';

export const instantAllColor = (length, color, visId) => {
  // create a highlight action with
  return actionCreators.highlightElements(
    getIdxColorArray(length, color),
    visId
  );
};

export const gradualAllColor = (length, color, visId) => {
  // create array of idx color objs
  // map each obj to a highlight action w/ visId
  return getIdxColorArray(length, color).map((idxColor) => {
    return getSingleHighlightAction(idxColor, visId);
  });
};

export const gradualAllColorReverse = (length, color, visId) => {
  return getIdxColorArray(length, color)
    .reverse()
    .map((idxColor) => {
      return getSingleHighlightAction(idxColor, visId);
    });
};

const getIdxColorArray = (length, color) => {
  // returns an array of color idx objects
  return Array.from(Array(length), (_, idx) => ({ idx: idx, color: color }));
};

export const getSingleHighlightAction = (idxColor, visId) => {
  return actionCreators.highlightElements([idxColor], visId);
};
