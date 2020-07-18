import * as actionCreators from '../store/actionCreators';

const selectionSort = (arr, visId) => {
  const result = [...arr];
  const animations = [];
  const highlights = result.map((item, idx) => ({
    idx: idx,
    color: 'black',
  }));
  animations.push(actionCreators.highlightElements(highlights, visId));
  for (let i = 0; i < result.length; i++) {
    let minIdx = i;
    // color ith index green
    animations.push(
      actionCreators.highlightElements([{ idx: minIdx, color: 'green' }], visId)
    );
    for (let j = i + 1; j < result.length; j++) {
      // color the index we are checking green
      animations.push(
        actionCreators.highlightElements([{ idx: j, color: 'green' }], visId)
      );
      if (result[j].value < result[minIdx].value) {
        if (minIdx !== i) {
          // color minIndex black if no longer minIndex, unless minIndex is ith index
          animations.push(
            actionCreators.highlightElements(
              [{ idx: minIdx, color: 'black' }],
              visId
            )
          );
        }
        minIdx = j;
      } else {
        // color jth black, as we want to forget about it
        animations.push(
          actionCreators.highlightElements([{ idx: j, color: 'black' }], visId)
        );
      }
    }
    // swap elements we are swapping
    animations.push(actionCreators.swapElements(i, minIdx, visId));
    [result[minIdx], result[i]] = [result[i], result[minIdx]];
    // color the swapped elements black, as we are done with them for now
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    animations.push(
      actionCreators.highlightElements([{ idx: i, color: 'black' }], visId)
    );
  }
  return animations;
  // return result;
};

// const test = [{ value: 3 }, { value: 2 }, { value: 1 }, { value: 4 }];
// console.log(selectionSort(test));

export default selectionSort;
