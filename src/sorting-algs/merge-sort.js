import * as actionCreators from '../store/actionCreators';
import * as sortUtil from './sort-util';

const merge = (arr, lIdx, mid, rIdx, visId, animations) => {
  let initMid = mid;

  // start of left sub arr
  let lStart = lIdx;

  // start of right sub arr
  let rStart = mid + 1;

  // as both halves are sorted, if this holds, no merge is needed
  if (arr[mid].value <= arr[rStart].value) {
    return;
  }

  while (lStart <= mid && rStart <= rIdx) {
    animations.push(
      actionCreators.animateElements(visId, [
        { idx: lStart, color: 'green' },
        { idx: rStart, color: 'green' },
      ])
    );
    let highlights = [
      { idx: lStart, color: 'black' },
      { idx: rStart, color: 'black' },
    ];

    if (lIdx === 0 && initMid === Math.floor((arr.length - 1) / 2)) {
      console.log('lsjdflsk');
      highlights = null;
    }

    if (arr[lStart].value <= arr[rStart].value) {
      animations.push(actionCreators.animateElements(visId, highlights));
      lStart++;
    } else {
      let idx = rStart;
      while (idx >= lStart + 1) {
        // animations.push(
        //   actionCreators.animateElements(visId, null, [idx, idx - 1])
        // );
        [arr[idx], arr[idx - 1]] = [arr[idx - 1], arr[idx]];
        idx--;
      }

      animations.push(
        actionCreators.animateElements(visId, highlights, null, [
          rStart,
          lStart,
        ])
      );

      lStart++;
      mid++;
      rStart++;
    }
  }
};

const mergeSortAux = (arr, lIdx, rIdx, visId, animations) => {
  if (lIdx < rIdx) {
    const mid = Math.floor(lIdx + (rIdx - lIdx) / 2);
    mergeSortAux(arr, lIdx, mid, visId, animations);
    mergeSortAux(arr, mid + 1, rIdx, visId, animations);
    merge(arr, lIdx, mid, rIdx, visId, animations);
  }
  return arr;
};

const mergeSort = (arr, visId) => {
  let animations = [];
  animations.push(sortUtil.instantAllColor(arr.length, 'black'));
  const result = [...arr];
  mergeSortAux(result, 0, arr.length - 1, visId, animations);
  animations.push(
    actionCreators.animateElements(visId, [
      {
        idx: arr.length - 1,
        color: 'green',
      },
    ])
  );
  animations = [
    ...animations,
    ...sortUtil.gradualAllColorReverse(arr.length, 'black', visId),
  ];
  return animations;
};

export default mergeSort;
