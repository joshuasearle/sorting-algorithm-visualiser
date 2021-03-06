import * as actionCreators from '../store/actionCreators';
import * as sortUtil from './sort-util';

const bubbleSort = (arr, visId) => {
  let animations = [];
  animations.push(sortUtil.instantAllColor(arr.length, 'black', visId));
  const result = [...arr];
  for (let i = 0; i < arr.length - 1; i++) {
    animations.push(
      actionCreators.animateElements(visId, [
        { idx: 0, color: 'green' },
        { idx: 1, color: 'green' },
      ])
    );
    for (let j = 0; j < arr.length - 1 - i; j++) {
      let highlighted = [];
      let swapped = null;
      if (j !== arr.length - 2) {
        highlighted.push({ idx: j + 2, color: 'green' });
      }
      if (result[j].value > result[j + 1].value) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
        highlighted.push({ idx: j + 1, color: 'black' });
        swapped = [j, j + 1];
      } else {
        highlighted.push({ idx: j, color: 'black' });
      }
      animations.push(
        actionCreators.animateElements(visId, highlighted, swapped)
      );
    }
  }
  animations.push(
    actionCreators.animateElements(
      visId,
      [{ idx: 0, color: 'green' }],
      null,
      null
    )
  );
  animations = [
    ...animations,
    ...sortUtil.gradualAllColorReverse(arr.length, 'black', visId),
  ];
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
