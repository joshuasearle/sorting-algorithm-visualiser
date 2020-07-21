import * as actionCreators from '../store/actionCreators';
import * as sortUtil from './sort-util';

const partition = (arr, visId, animations, lo, hi) => {
  // initially it is not in the arr
  let lastElSmallerThanPivot = lo - 1;
  const pivot = arr[hi]; // pivot is last element
  animations.push(
    sortUtil.getSingleHighlightAction({ idx: hi, color: 'green' }, visId)
  );
  for (let j = lo; j < hi; j++) {
    animations.push(
      sortUtil.getSingleHighlightAction({ idx: j, color: 'green' }, visId)
    );
    if (arr[j].value < pivot.value) {
      lastElSmallerThanPivot += 1;

      // swap into new position
      let tmp = arr[j];
      arr[j] = arr[lastElSmallerThanPivot];
      arr[lastElSmallerThanPivot] = tmp;
      animations.push(
        sortUtil.getSingleHighlightAction({ idx: j, color: 'black' }, visId)
      );
      animations.push(
        actionCreators.animateElements(visId, null, [j, lastElSmallerThanPivot])
      );
    } else {
      animations.push(
        sortUtil.getSingleHighlightAction({ idx: j, color: 'black' }, visId)
      );
    }
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

const quickSortAux = (arr, visId, animations, lo, hi) => {
  if (lo < hi) {
    // partition
    const pivIdx = partition(arr, visId, animations, lo, hi);

    // sort each side of the partition
    quickSortAux(arr, visId, animations, lo, pivIdx - 1);
    quickSortAux(arr, visId, animations, pivIdx + 1, hi);
  } else {
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
