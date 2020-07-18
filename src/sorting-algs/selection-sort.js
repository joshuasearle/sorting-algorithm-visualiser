import * as actionCreators from '../store/actionCreators';

const selectionSort = (arr) => {
  const result = [...arr];
  const animations = [];
  for (let i = 0; i < result.length; i++) {
    let minIdx = i;
    // color ith index green
    animations.push(actionCreators.highlightElements([minIdx], 'green'));
    for (let j = i + 1; j < result.length; j++) {
      // color the index we are checking green
      animations.push(actionCreators.highlightElements([j], 'green'));
      if (result[j].value < result[minIdx].value) {
        if (minIdx !== i) {
          // color minIndex black if no longer minIndex, unless minIndex is ith index
          animations.push(actionCreators.highlightElements([minIdx], 'black'));
        }
        minIdx = j;
      } else {
        // color jth black, as we want to forget about it
        animations.push(actionCreators.highlightElements([j], 'black'));
      }
    }
    // swap elements we are swapping
    animations.push(actionCreators.swapElements(i, minIdx))[
      (result[minIdx], result[i])
    ] = [result[i], result[minIdx]];
    // color the swapped elements black, as we are done with them for now
  }
  return animations;
};

// const test = [3, 2, 4, 1];

// console.log(selectionSort(test));

export default selectionSort;
