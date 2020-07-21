import * as actionCreators from '../store/actionCreators';
import * as sortUtil from './sort-util';

const insertionSort = (arr, visId) => {
  let animations = [];
  animations.push(sortUtil.instantAllColor(arr.length, 'black', visId));
  const result = [...arr];
  for (let i = 0; i < arr.length; i++) {
    let j = i - 1;
    animations.push(
      actionCreators.animateElements(
        visId,
        [
          { idx: i, color: 'green' },
          { idx: i - 1, color: 'green' },
        ],
        null
      )
    );

    while (j >= 0 && result[j + 1].value < result[j].value) {
      let tmp = result[j];
      result[j] = result[j + 1];
      result[j + 1] = tmp;
      let highlights = [];
      highlights.push({ idx: j, color: 'black' });
      highlights.push({ idx: j - 1, color: 'green' });
      animations.push(
        actionCreators.animateElements(visId, highlights, [j, j + 1])
      );
      j -= 1;
    }
    if (j === i - 1) {
      animations.push(
        actionCreators.animateElements(
          visId,
          [
            { idx: i, color: 'black' },
            { idx: i - 1, color: 'black' },
          ],
          null
        )
      );
    } else {
      animations.push(
        sortUtil.getSingleHighlightAction({ idx: j + 1, color: 'black' }, visId)
      );
      animations.push(
        actionCreators.animateElements(
          visId,
          [
            { idx: j + 1, color: 'black' },
            { idx: j, color: 'black' },
          ],
          null
        )
      );
    }
  }
  animations = [
    ...animations,
    ...sortUtil.gradualAllColor(arr.length, 'green', visId),
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

// console.log(insertionSort(test));

export default insertionSort;
