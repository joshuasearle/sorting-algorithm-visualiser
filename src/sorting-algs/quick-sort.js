import * as actionCreators from '../store/actionCreators';
import * as sortUtil from './sort-util';

const partition = (arr, visId, animations, lo, hi) => {
  // initially it is not in the arr
  animations.push(
    sortUtil.getSingleHighlightAction({ idx: hi, color: 'green' }, visId)
  );
  let lastElSmallerThanPivot = lo - 1;
  const pivot = arr[hi]; // pivot is last element
  for (let j = lo; j < hi; j++) {
    let swap = null;
    let highlights = [];
    highlights.push({ idx: j, color: 'black' });
    if (arr[j].value < pivot.value) {
      lastElSmallerThanPivot += 1;
      // swap into new position
      let tmp = arr[j];
      arr[j] = arr[lastElSmallerThanPivot];
      arr[lastElSmallerThanPivot] = tmp;
      swap = [j, lastElSmallerThanPivot];
    }
    highlights.push({ idx: j + 1, color: 'green' });
    animations.push(actionCreators.animateElements(visId, highlights, swap));
  }

  // swap pivot with element after last element smaller than pivot
  let tmp = arr[hi];
  arr[hi] = arr[lastElSmallerThanPivot + 1];
  arr[lastElSmallerThanPivot + 1] = tmp;
  animations.push(
    actionCreators.animateElements(visId, null, [
      hi,
      lastElSmallerThanPivot + 1,
    ])
  );

  // return idx of pivot
  return lastElSmallerThanPivot + 1;
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const partitionArr = (arr, visId, animations, lo, hi) => {
  const randomPivot = getRandomInt(lo, hi);
  const tmp = arr[hi];
  arr[hi] = arr[randomPivot];
  arr[randomPivot] = tmp;
  animations.push(
    actionCreators.animateElements(visId, null, [hi, randomPivot])
  );
  return partition(arr, visId, animations, lo, hi);
};

const quickSortAux = (arr, visId, animations, lo, hi) => {
  if (lo < hi) {
    // partition
    const pivIdx = partitionArr(arr, visId, animations, lo, hi);

    // sort each side of the partition
    quickSortAux(arr, visId, animations, lo, pivIdx - 1);
    quickSortAux(arr, visId, animations, pivIdx + 1, hi);
  } else if (lo !== arr.length) {
    animations.push(
      sortUtil.getSingleHighlightAction({ idx: lo, color: 'green' }, visId)
    );
  }
};

const quickSort = (arr, visId) => {
  let animations = [];
  animations.push(sortUtil.instantAllColor(arr.length, 'black', visId));
  quickSortAux([...arr], visId, animations, 0, arr.length - 1);
  animations = [
    ...animations,
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

// console.log(quickSort(test));

export default quickSort;
