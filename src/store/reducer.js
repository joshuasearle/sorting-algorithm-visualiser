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
  listColors: 'todo', // lasdkjfa;lskdjfaljfkl;sjdfa;lksjdfa;sjdfaskljdfask;jld,
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ALGORITHM:
      return setAlgorithm(state, action);
    case actionTypes.GENERATE_LIST:
      return generateList(state, action);
    case actionTypes.SWAP_ELEMENTS:
      return swapElements(state, action);
    default:
      return state;
  }
};

export default reducer;
