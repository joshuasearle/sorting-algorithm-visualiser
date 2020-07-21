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
      actionCreators.animateElements(
        visId,
        [
          { idx: start, color: 'green' },
          { idx: start + 1, color: 'green' },
        ],
        null
      )
    );
    // initially set to false
    // if swap occurs, we will swap back
    swapped = false;

    // do a normal bubble iteration
    for (let i = start; i < end; i++) {
      let highlighted = [];
      let swap = null;
      if (i !== end - 1) {
        highlighted.push({ idx: i + 2, color: 'green' });
      }
      if (result[i].value > result[i + 1].value) {
        // if in wrong order, swap
        [result[i], result[i + 1]] = [result[i + 1], result[i]];
        swap = [i, i + 1];
        highlighted.push({ idx: i + 1, color: 'black' });
        swapped = true;
      } else {
        highlighted.push({ idx: i, color: 'black' });
      }
      animations.push(actionCreators.animateElements(visId, highlighted, swap));
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
      actionCreators.animateElements(
        visId,
        [
          { idx: end, color: 'green' },
          { idx: end - 1, color: 'green' },
        ],
        null
      )
    );

    // do a reverse bubble iter
    for (let i = end - 1; i > start - 1; i--) {
      let highlighted = [];
      let swap = null;
      if (i !== start + 1) {
        highlighted.push({ idx: i - 1, color: 'green' });
      }
      if (result[i].value > result[i + 1].value) {
        // if in wrong order, swap
        [result[i], result[i + 1]] = [result[i + 1], result[i]];
        swap = [i, i + 1];
        swapped = true;
        highlighted.push({ idx: i, color: 'black' });
      } else {
        highlighted.push({ idx: i + 1, color: 'black' });
      }
      animations.push(actionCreators.animateElements(visId, highlighted, swap));
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
