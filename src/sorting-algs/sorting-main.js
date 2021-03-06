import selectionSort from './selection-sort';
import insertionSort from './insertion-sort';
import bubbleSort from './bubble-sort';
import shakerSort from './shaker-sort';
import quickSort from './quick-sort';
import mergeSort from './merge-sort';
import heapSort from './heap-sort';

const sortingAlgs = {
  'selection-sort': selectionSort,
  'insertion-sort': insertionSort,
  'bubble-sort': bubbleSort,
  'shaker-sort': shakerSort,
  'quick-sort': quickSort,
  'merge-sort': mergeSort,
  'heap-sort': heapSort,
};

export default sortingAlgs;
