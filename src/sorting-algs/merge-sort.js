const merge = (arr, lIdx, mid, rIdx, visId, animations) => {
  // start of left sub arr
  let lStart = lIdx;

  // start of right sub arr
  let rStart = mid + 1;

  // as both halves are sorted, if this holds, no merge is needed
  if (arr[mid].value <= arr[rStart].value) {
    return;
  }

  while (lStart <= mid && rStart <= rIdx) {
    if (arr[lStart].value <= arr[rStart].value) {
      lStart++;
    } else {
      let idx = rStart;
      while (idx >= lStart + 1) {
        [arr[idx], arr[idx - 1]] = [arr[idx - 1], arr[idx]];
        idx--;
      }
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
  const animations = [];
  const result = [...arr];
  mergeSortAux(result, 0, arr.length - 1, visId, animations);
  return result;
};
