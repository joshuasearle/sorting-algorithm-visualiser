import * as actionCreators from '../store/actionCreators';

const insertionSort = (arr, visId) => {
  const animations = [];
  const highlights = arr.map((item, idx) => ({
    idx: idx,
    color: 'black',
  }));
  animations.push(actionCreators.highlightElements(highlights, visId));
  const result = [...arr];
  for (let i = 0; i < arr.length; i++) {
    animations.push(
      actionCreators.highlightElements([{ idx: i, color: 'green' }], visId)
    );
    let j = i - 1;
    animations.push(
      actionCreators.highlightElements([{ idx: j, color: 'green' }], visId)
    );
    while (j >= 0 && result[j + 1].value < result[j].value) {
      let tmp = result[j];
      result[j] = result[j + 1];
      result[j + 1] = tmp;
      animations.push(actionCreators.swapElements(j, j + 1, visId));
      animations.push(
        actionCreators.highlightElements(
          [
            { idx: j + 1, color: 'black' },
            { idx: j - 1, color: 'green' },
          ],
          visId
        )
      );

      j -= 1;
    }
    animations.push(
      actionCreators.highlightElements(
        [
          { idx: j, color: 'black' },
          { idx: j + 1, color: 'black' },
        ],
        visId
      )
    );
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
