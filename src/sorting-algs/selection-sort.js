const selectionSort = (arr) => {
  const result = [...arr];
  const animations = [];
  for (let i = 0; i < result.length; i++) {
    let minIdx = i;
    animations.push({ type: 'color', color: 'green', idxs: i });
    for (let j = i + 1; j < result.length; j++) {
      animations.push({ type: 'color', color: 'red', idx: j });
      if (result[j] < result[minIdx]) {
        if (minIdx !== i) {
          animations.push({ type: 'color', color: 'black', idx: minIdx });
        }
        minIdx = j;
      } else {
        animations.push({ type: 'color', color: 'black', idx: j });
      }
    }
    [result[minIdx], result[i]] = [result[i], result[minIdx]];
    animations.push({ type: 'swap', idx1: minIdx, idx2: i });
    animations.push({ type: 'color', color: 'black', idx: minIdx });
    animations.push({ type: 'color', color: 'green', idx: i });
  }
  return animations;
};

// const test = [3, 2, 4, 1];

// console.log(selectionSort(test));

export default selectionSort;
