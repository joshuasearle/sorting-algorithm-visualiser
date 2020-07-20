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
  speed: 50,
  nextVisId: 0,
  currentVisId: null,
};

const setAlgorithm = (state, action) => {
  return objectCombiner(state, { algorithm: action.algorithm });
};

const generateList = (state, action) => {
  const newListLength = Math.max(0, Math.min(200, action.length));
  const newList = randomListGenerator(newListLength);
  return objectCombiner(state, { currentList: newList });
};

const swapElements = (state, action) => {
  if (action.visId !== state.currentVisId) {
    return state;
  }
  const newList = [...state.currentList];
  const tmp = newList[action.idx1];
  newList[action.idx1] = newList[action.idx2];
  newList[action.idx2] = tmp;
  return objectCombiner(state, { currentList: newList });
};

const highlight = (state, action) => {
  if (action.visId !== state.currentVisId) {
    return state;
  }
  const newList = [...state.currentList];
  for (let { idx, color } of action.idxColorMap) {
    newList[idx] = objectCombiner(newList[idx], { color: color });
  }
  return objectCombiner(state, { currentList: newList });
};

const setSpeed = (state, action) => {
  if (action.speed > 50 && state.speed <= 50) {
    return objectCombiner(state, {
      currentList: state.currentList.map((item) => ({
        ...item,
        color: 'black',
      })),
      speed: action.speed,
    });
  }
  return objectCombiner(state, { speed: action.speed });
};

const startVisualisation = (state, action) => {
  return objectCombiner(state, {
    currentVisId: state.nextVisId,
    nextVisId: state.nextVisId + 1,
  });
};

const stopVisualisation = (state, action) => {
  if (action.visId !== undefined && action.visId !== state.currentVisId) {
    return state;
  }
  const newList = state.currentList.map((item) => ({
    ...item,
    color: 'black',
  }));
  return objectCombiner(state, {
    currentVisId: null,
    currentList: newList,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ALGORITHM:
      return setAlgorithm(state, action);
    case actionTypes.GENERATE_LIST:
      return generateList(state, action);
    case actionTypes.SWAP_ELEMENTS:
      return swapElements(state, action);
    case actionTypes.HIGHLIGHT_ELEMENTS:
      return highlight(state, action);
    case actionTypes.SET_SPEED:
      return setSpeed(state, action);
    case actionTypes.START_VISUALISATION:
      return startVisualisation(state, action);
    case actionTypes.STOP_VISUALISATION:
      return stopVisualisation(state, action);
    default:
      return state;
  }
};

export default reducer;
