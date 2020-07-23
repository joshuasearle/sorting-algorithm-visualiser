import * as actionCreators from '../store/actionCreators';
import * as sortUtil from './sort-util';

const heapify = (arr, length, rootIdx, visId, animations) => {
  // initially set largest element idx as root idx
  let largestElIdx = rootIdx;

  // find the idxs of the children nodes
  const leftChildIdx = 2 * rootIdx + 1;
  const rightChildIdx = 2 * rootIdx + 2;

  // set largest idx to the largest of either the root node, of the left child
  if (
    leftChildIdx < length &&
    arr[leftChildIdx].value > arr[largestElIdx].value
  ) {
    largestElIdx = leftChildIdx;
  }

  // set the largest idx to the largest of either the largest, or the right child
  if (
    rightChildIdx < length &&
    arr[rightChildIdx].value > arr[largestElIdx].value
  ) {
    largestElIdx = rightChildIdx;
  }

  // if root isn't largest, swap largest into root and heapift the subtree
  // that largest is in
  // this allows the out of place node to propogate down
  if (largestElIdx !== rootIdx) {
    [arr[rootIdx], arr[largestElIdx]] = [arr[largestElIdx], arr[rootIdx]];
    animations.push(
      actionCreators.animateElements(
        visId,
        [
          { idx: rootIdx, color: 'green' },
          { idx: largestElIdx, color: 'green' },
        ],
        [rootIdx, largestElIdx]
      )
    );
    animations.push(
      actionCreators.animateElements(visId, [{ idx: rootIdx, color: 'black' }])
    );
    heapify(arr, length, largestElIdx, visId, animations);
  } else {
    animations.push(
      actionCreators.animateElements(visId, [{ idx: rootIdx, color: 'green' }])
    );
    animations.push(
      actionCreators.animateElements(visId, [{ idx: rootIdx, color: 'black' }])
    );
  }
};

const heapSort = (arr, visId) => {
  // create animations arr
  const animations = [];

  // copy the arr so we don't alter it directly
  const result = [...arr];

  const n = arr.length;

  // construct heap
  for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
    heapify(result, n, i, visId, animations);
  }

  // extract max and put at end of the list
  // then heapify to maintain the heap
  for (let i = n - 1; i >= 0; i--) {
    [result[0], result[i]] = [result[i], result[0]];
    animations.push(
      actionCreators.animateElements(
        visId,
        [{ idx: 0, color: 'green' }],
        [i, 0]
      )
    );
    heapify(result, i, 0, visId, animations);
  }

  return animations.concat(
    sortUtil.gradualAllColorReverse(arr.length, 'black', visId)
  );
};

export default heapSort;
