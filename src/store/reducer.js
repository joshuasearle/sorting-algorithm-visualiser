import * as actionTypes from './actionTypes';
import { objectCombiner } from './objectCombiner';

const randomListGenerator = (length) => {
  return [
    ...Array.from(Array(length), () => ({
      value: Math.random(),
      color: 'black',
    })),
  ];
};

const initialState = {
  algorithm: 'selection-sort',
  currentList: randomListGenerator(20),
  interval: 10,
};

const setAlgorithm = (state, action) => {
  return objectCombiner(state, { algorithm: action.algorithm });
};

const generateList = (state, action) => {
  const newListLength = Math.max(0, Math.min(100, action.length));
  const newList = randomListGenerator(newListLength);
  return objectCombiner(state, { currentList: newList });
};

const swapElements = (state, action) => {
  const newList = [...state.currentList];
  const tmp = newList[action.idx1];
  newList[action.idx1] = newList[action.idx2];
  newList[action.idx2] = tmp;
  return objectCombiner(state, { currentList: newList });
};

const highlight = (state, action) => {
  const newList = [...state.currentList];
  for (let { idx, color } of action.idxColorMap) {
    newList[idx] = objectCombiner(newList[idx], { color: color });
  }
  return objectCombiner(state, { currentList: newList });
};

const setInterval = (state, action) => {
  return objectCombiner(state, { interval: action.interval });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ALGORITHM:
      return setAlgorithm(state, action);
    case actionTypes.GENERATE_LIST:
      return generateList(state, action);
    case actionTypes.SWAP_ELEMENTS:
      return swapElements(state, action);
    case actionTypes.HIGHLIGH_ELEMENTS:
      return highlight(state, action);
    case actionTypes.SET_INTERVAL:
      return setInterval(state, action);
    default:
      return state;
  }
};

export default reducer;
