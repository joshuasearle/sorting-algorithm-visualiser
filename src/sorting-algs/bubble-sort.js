import * as actionCreators from '../store/actionCreators';

const bubbleSort = (arr, visId) => {
  const animations = [];
  const highlights = arr.map((item, idx) => ({
    idx: idx,
    color: 'black',
  }));
  animations.push(actionCreators.highlightElements(highlights, visId));
  const result = [...arr];
  for (let i = 0; i < arr.length - 1; i++) {
    animations.push(
      actionCreators.highlightElements(
        [
          { idx: 0, color: 'green' },
          { idx: 1, color: 'green' },
        ],
        visId
      )
    );
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (result[j].value > result[j + 1].value) {
        animations.push(actionCreators.swapElements(j, j + 1, visId));
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
      let highlighted = [{ idx: j, color: 'black' }];
      if (j + 2 < result.length) {
        highlighted.push({ idx: j + 2, color: 'green' });
      }
      animations.push(actionCreators.highlightElements(highlighted, visId));
    }
  }
  for (let i = 0; i < arr.length; i++) {
    animations.push(
      actionCreators.highlightElements([{ idx: i, color: 'green' }], visId)
    );
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    animations.push(
      actionCreators.highlightElements([{ idx: i, color: 'black' }], visId)
    );
  }
  return animations;
};

// for (let i = 0; i < 1000; i++) {
//   let test = [...Array.from(Array(1000), () => getRandomInt(0, 10))];
//   const bubbleSorted = bubbleSort(test);
//   const jsSorted = test.sort((a, b) => a - b);
//   let equal = true;
//   for (let j = 0; j < test.length; j++) {
//     equal = bubbleSorted[j] === jsSorted[j] && equal;
//   }
//   console.log(equal);
// }

// const test = [1, 2, 4, 5, 6, 6, 7, 7, 8, 8, 6];

// // console.log(bubbleSort(test));

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

export default bubbleSort;
