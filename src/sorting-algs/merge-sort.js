const mergeSort = (arr, visId) => {
  if (arr.length > 1) {
    const mid = arr.length / 2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    left = mergeSort(left);
    right = mergeSort(right);

    let i = 0;
    let j = 0;
    let k = 0;

    const result = Array(arr.length).fill(null);

    while (i < left.length && j < right.length) {
      if (left[i].value < right[j].value) {
        result[k] = left[i];
        i++;
      } else {
        result[k] = right[j];
        j++;
      }
      k++;
    }

    while (i < left.length) {
      result[k] = left[i];
      i++;
      k++;
    }

    while (j < right.length) {
      result[k] = right[j];
      j++;
      k++;
    }
    return result;
  }
  return arr;
};

// const test = [4, 5, 6, 7, 3, 3, 4, 56, 67, 4, 2];

// for (let i = 0; i < 1000; i++) {
//   let test = [...Array.from(Array(1000), () => Math.random())];
//   let jsSorted = [...test].sort((a, b) => a - b);
//   let mergeSorted = mergeSort([...test]);
//   console.log(arraysEqual(jsSorted, mergeSorted));
// }

// function arraysEqual(a, b) {
//   if (a === b) return true;
//   if (a == null || b == null) return false;
//   if (a.length !== b.length) return false;

//   // If you don't care about the order of the elements inside
//   // the array, you should sort both arrays here.
//   // Please note that calling sort on an array will modify that array.
//   // you might want to clone your array first.

//   for (var i = 0; i < a.length; ++i) {
//     if (a[i] !== b[i]) return false;
//   }
//   return true;
// }

// console.log(mergeSort(test));
