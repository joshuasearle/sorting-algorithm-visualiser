import * as actionCreators from '../store/actionCreators';

const selectionSort = (arr) => {
  const result = [...arr];
  const animations = [];
  animations.push(
    // color all black
    actionCreators.highlightElements(
      [...Array.from(Array(arr.length), (_, idx) => idx)],
      'black'
    )
  );
  for (let i = 0; i < result.length; i++) {
    let minIdx = i;
    // color ith index green
    animations.push(
      actionCreators.highlightElements([{ idx: minIdx, color: 'green' }])
    );
    for (let j = i + 1; j < result.length; j++) {
      // color the index we are checking green
      animations.push(
        actionCreators.highlightElements([{ idx: j, color: 'green' }])
      );
      if (result[j].value < result[minIdx].value) {
        if (minIdx !== i) {
          // color minIndex black if no longer minIndex, unless minIndex is ith index
          animations.push(
            actionCreators.highlightElements([{ idx: minIdx, color: 'black' }])
          );
        }
        minIdx = j;
      } else {
        // color jth black, as we want to forget about it
        animations.push(
          actionCreators.highlightElements([{ idx: j, color: 'black' }])
        );
      }
    }
    // swap elements we are swapping
    animations.push(actionCreators.swapElements(i, minIdx));
    [result[minIdx], result[i]] = [result[i], result[minIdx]];
    // color the swapped elements black, as we are done with them for now
  }
  for (let i = arr.length; i >= 0; i--) {
    animations.push(actionCreators.highlightElements([i], 'black'));
  }
  return animations;
  // return result;
};

// const test = [{ value: 3 }, { value: 2 }, { value: 1 }, { value: 4 }];
// console.log(selectionSort(test));

export default selectionSort;
