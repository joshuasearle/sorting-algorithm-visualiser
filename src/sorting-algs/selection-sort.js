import * as actionCreators from '../store/actionCreators';
import * as sortUtil from './sort-util';

const selectionSort = (arr, visId) => {
  const result = [...arr];
  let animations = [];
  animations.push(sortUtil.instantAllColor(arr.length, 'black', visId));
  for (let i = 0; i < result.length; i++) {
    let minIdx = i;
    animations.push(
      sortUtil.getSingleHighlightAction({ idx: i, color: 'green' }, visId)
    );
    for (let j = i + 1; j < result.length; j++) {
      let highlights = [];
      if (j - 1 !== minIdx) {
        highlights.push({ idx: j - 1, color: 'black' });
      }
      highlights.push({ idx: j, color: 'green' });
      if (result[j].value < result[minIdx].value) {
        if (minIdx !== i) {
          highlights.push({ idx: minIdx, color: 'black' });
        }
        minIdx = j;
        highlights.push({ idx: minIdx, color: 'green' });
      }
      animations.push(actionCreators.animateElements(visId, highlights, null));
    }
    // swap elements we are swapping
    let highlights = [];
    if (i !== arr.length - 1 && minIdx !== arr.length) {
      highlights.push({ idx: arr.length - 1, color: 'black' });
    }
    if (minIdx !== i) {
      highlights.push({ idx: minIdx, color: 'green' });
      highlights.push({ idx: i, color: 'black' });
    }
    animations.push(
      actionCreators.animateElements(visId, highlights, [i, minIdx])
    );
    [result[minIdx], result[i]] = [result[i], result[minIdx]];
    // color the swapped elements black, as we are done with them for now
  }
  animations = [
    ...animations,
    ...sortUtil.gradualAllColorReverse(arr.length, 'black', visId),
  ];
  return animations;
  // return result;
};

// const test = [{ value: 3 }, { value: 2 }, { value: 1 }, { value: 4 }];
// console.log(selectionSort(test));

export default selectionSort;
