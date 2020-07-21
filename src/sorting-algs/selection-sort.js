import * as actionCreators from '../store/actionCreators';
import * as sortUtil from './sort-util';

const selectionSort = (arr, visId) => {
  const result = [...arr];
  let animations = [];
  animations.push(sortUtil.instantAllColor(arr.length, 'black', visId));
  for (let i = 0; i < result.length; i++) {
    let minIdx = i;
    // color ith index green
    animations.push(
      sortUtil.getSingleHighlightAction({ idx: minIdx, color: 'green' }, visId)
    );
    for (let j = i + 1; j < result.length; j++) {
      // color the index we are checking green
      animations.push(
        sortUtil.getSingleHighlightAction({ idx: j, color: 'green' }, visId)
      );
      if (result[j].value < result[minIdx].value) {
        if (minIdx !== i) {
          // color minIndex black if no longer minIndex, unless minIndex is ith index
          animations.push(
            sortUtil.getSingleHighlightAction(
              { idx: minIdx, color: 'black' },
              visId
            )
          );
        }
        minIdx = j;
      } else {
        // color jth black, as we want to forget about it
        animations.push(
          sortUtil.getSingleHighlightAction({ idx: j, color: 'black' }, visId)
        );
      }
    }
    // swap elements we are swapping
    animations.push(actionCreators.animateElements(visId, null, [i, minIdx]));
    [result[minIdx], result[i]] = [result[i], result[minIdx]];
    // color the swapped elements black, as we are done with them for now
    if (minIdx !== i) {
      animations.push(
        sortUtil.getSingleHighlightAction(
          { idx: minIdx, color: 'black' },
          visId
        )
      );
    }
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
