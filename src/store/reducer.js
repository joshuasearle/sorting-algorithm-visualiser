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
  algorithm: 'heap-sort',
  currentList: randomListGenerator(80),
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

const setSpeed = (state, action) => {
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

const animateElements = (state, action) => {
  // check valid animation
  if (action.visId !== state.currentVisId) {
    return state;
  }
  // action: {type: ANIMATE_ELEMENTS, visId: 5, highlights: [{idx: 1, color: 'green'}], swap: [0, 4]}
  // copy list
  let newList = [...state.currentList];

  // change all colors in highlight list
  if (action.highlights) {
    action.highlights.forEach(({ idx, color }) => {
      newList[idx] = { ...newList[idx], color: color };
    });
  }

  // swap elements
  if (action.swap) {
    const [idx1, idx2] = action.swap;
    const tmp = newList[idx1];
    newList[idx1] = newList[idx2];
    newList[idx2] = tmp;
  }

  if (action.shift) {
    // shift[0] = idx of el we are moving
    // shift[1] = idx we are moving el to
    const [currentIdx, destIdx] = action.shift;
    if (destIdx === newList.length - 1) {
      newList = [
        ...newList.slice(0, destIdx),
        newList[currentIdx],
        ...newList.slice(destIdx + 1, currentIdx),
        newList[destIdx],
      ];
    } else if (currentIdx > destIdx) {
      newList = [
        ...newList.slice(0, destIdx),
        newList[currentIdx],
        ...newList.slice(destIdx, currentIdx),
        ...newList.slice(currentIdx + 1),
      ];
    }
  }

  return objectCombiner(state, { currentList: newList });
};

const reverse = (state, action) => {
  const reverseSortedList = [...state.currentList].sort(
    (a, b) => b.value - a.value
  );
  return { ...state, currentList: reverseSortedList };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ALGORITHM:
      return setAlgorithm(state, action);
    case actionTypes.GENERATE_LIST:
      return generateList(state, action);
    case actionTypes.SET_SPEED:
      return setSpeed(state, action);
    case actionTypes.START_VISUALISATION:
      return startVisualisation(state, action);
    case actionTypes.STOP_VISUALISATION:
      return stopVisualisation(state, action);
    case actionTypes.ANIMATE_ELEMENTS:
      return animateElements(state, action);
    case actionTypes.REVERSE_LIST:
      return reverse(state, action);
    default:
      return state;
  }
};

export default reducer;
