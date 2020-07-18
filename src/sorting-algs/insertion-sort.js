import * as actionCreators from '../store/actionCreators';

const insertionSort = (arr) => {
  const animations = [];
  animations.push(
    // color all black
    actionCreators.highlightElements(
      [...Array.from(Array(arr.length), (_, idx) => idx)],
      'black'
    )
  );
  const result = [...arr];
  for (let i = 0; i < arr.length; i++) {
    animations.push(actionCreators.highlightElements([i], 'green'));
    let j = i - 1;
    while (j >= 0 && result[j + 1].value < result[j].value) {
      animations.push(actionCreators.highlightElements([j], 'green'));
      let tmp = result[j];
      result[j] = result[j + 1];
      result[j + 1] = tmp;
      animations.push(actionCreators.highlightElements([j], 'black'));
      animations.push(actionCreators.swapElements(j, j + 1));
      j -= 1;
    }
    animations.push(actionCreators.highlightElements([j + 1, j], 'black'));
  }
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

// console.log(insertionSort(test));

export default insertionSort;
