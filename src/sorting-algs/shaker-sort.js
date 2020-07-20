import * as actionCreators from '../store/actionCreators';
import * as sortUtil from './sort-util';

const shakerSort = (arr, visId) => {
  let animations = [];
  animations.push(sortUtil.instantAllColor(arr.length, 'black', visId));

  const result = [...arr];

  const n = arr.length;

  // these tell us what elements could be in the wrong place
  let start = 0;
  let end = n - 1;

  // tells us if a swap occured in prev iter
  let swapped = true;
  while (swapped) {
    animations.push(
      actionCreators.highlightElements(
        [
          { idx: start, color: 'green' },
          { idx: start + 1, color: 'green' },
        ],
        visId
      )
    );
    // initially set to false
    // if swap occurs, we will swap back
    swapped = false;

    // do a normal bubble iteration
    for (let i = start; i < end; i++) {
      if (result[i].value > result[i + 1].value) {
        // if in wrong order, swap
        [result[i], result[i + 1]] = [result[i + 1], result[i]];
        animations.push(actionCreators.swapElements(i, i + 1, visId));
        swapped = true;
      }
      let highlighted = [{ idx: i, color: 'black' }];
      if (i + 2 < result.length) {
        highlighted.push({ idx: i + 2, color: 'green' });
      }
      animations.push(actionCreators.highlightElements(highlighted, visId));
    }

    // if no swap occured in the first iter, the list is sorted
    // we break to end the while loop, and therefore the alg
    if (!swapped) {
      break;
    }

    // we now know that the the element in index end is now sorted
    // so we forget about it by decrementing end
    end -= 1;

    animations.push(
      actionCreators.highlightElements(
        [
          { idx: end, color: 'green' },
          { idx: end - 1, color: 'green' },
        ],
        visId
      )
    );

    // do a reverse bubble iter
    for (let i = end - 1; i > start - 1; i--) {
      if (result[i].value > result[i + 1].value) {
        // if in wrong order, swap
        [result[i], result[i + 1]] = [result[i + 1], result[i]];
        animations.push(actionCreators.swapElements(i, i + 1, visId));
        swapped = true;
      }
      let highlighted = [{ idx: i + 1, color: 'black' }];
      if (i + 2 < result.length) {
        highlighted.push({ idx: i - 1, color: 'green' });
      }
      animations.push(actionCreators.highlightElements(highlighted, visId));
    }

    // same as before, but with start now as the bubble iter was reversed
    start += 1;
  }
  animations = [
    ...animations,
    ...sortUtil.gradualAllColor(arr.length, 'green', visId),
    ...sortUtil.gradualAllColorReverse(arr.length, 'black', visId),
  ];
  return animations;
};

// const test = [
//   { value: 4 },
//   { value: 65 },
//   { value: 7 },
//   { value: 8 },
//   { value: 3 },
//   { value: 3 },
//   { value: 4 },
//   { value: 5 },
//   { value: 6 },
//   { value: 76 },
//   { value: 7 },
//   { value: 7 },
//   { value: 56 },
//   { value: 4 },
//   { value: 53 },
// ];

// console.log(shakerSort(test));

export default shakerSort;