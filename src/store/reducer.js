import * as actionTypes from './actionTypes';
import { objectCombiner } from './objectCombiner';

const initialState = {
  algorithm: 'selection-sort',
  currentList: [],
};

const setAlgorithm = (state, action) => {
  return objectCombiner(state, { algorithm: action.algorithm });
};

const generateList = (state, action) => {
  const newListLength = Math.max(0, Math.min(100, action.length));
  const newList = [...Array.from(Array(newListLength), () => Math.random())];
  return objectCombiner(state, { currentList: newList });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ALGORITHM:
      return setAlgorithm(state, action);
    case actionTypes.GENERATE_LIST:
      return generateList(state, action);
    default:
      return state;
  }
};

export default reducer;
