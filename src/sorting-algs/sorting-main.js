import selectionSort from './selection-sort';
import insertionSort from './insertion-sort';
import bubbleSort from './bubble-sort';
import shakerSort from './shaker-sort';
import quickSort from './quick-sort';

const sortingAlgs = {
  'selection-sort': selectionSort,
  'insertion-sort': insertionSort,
  'bubble-sort': bubbleSort,
  'shaker-sort': shakerSort,
  'quick-sort': quickSort,
};

export default sortingAlgs;
