import * as actionCreators from '../store/actionCreators';
import * as sortUtil from './sort-util';

const partition = (arr, visId, animations, lo, hi) => {
  // initially it is not in the arr
  let lastElSmallerThanPivot = lo - 1;
  const pivot = arr[hi]; // pivot is last element

  for (let j = lo; j < hi; j++) {
    if (arr[j].value < pivot.value) {
      lastElSmallerThanPivot += 1;

      // swap into new position
      let tmp = arr[j];
      arr[j] = arr[lastElSmallerThanPivot];
      arr[lastElSmallerThanPivot] = tmp;
      animations.push(
        actionCreators.swapElements(j, lastElSmallerThanPivot, visId)
      );
    }
  }

  // swap pivot with element after last element smaller than pivot
  let tmp = arr[hi];
  arr[hi] = arr[lastElSmallerThanPivot + 1];
  arr[lastElSmallerThanPivot + 1] = tmp;
  animations.push(
    actionCreators.swapElements(hi, lastElSmallerThanPivot + 1, visId)
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
  }
  return animations;
};

const quickSort = (arr, visId) => {
  return quickSortAux([...arr], visId, [], 0, arr.length - 1);
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
