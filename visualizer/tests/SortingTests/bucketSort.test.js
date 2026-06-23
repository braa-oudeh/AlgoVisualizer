import { bucketSort} from '../../src/Algorithms/SortingAlgorithms/bucketSort.js';
import { insertionSort } from '../../src/Algorithms/SortingAlgorithms/insertionSort.js';
import { describe, test } from 'node:test';
import assert from 'node:assert';


test('sorts an unsorted array', () => {
  assert.deepStrictEqual(bucketSort([5, 3, 1, 4, 2]), [1, 2, 3, 4, 5]);
});

test('handles an empty array', () => {
  assert.deepStrictEqual(bucketSort([]), []);
});

test('handles a single-element array', () => {
  assert.deepStrictEqual(bucketSort([7]), [7]);
});

test('handles an already sorted array', () => {
  assert.deepStrictEqual(bucketSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
});

test('handles duplicate values', () => {
  assert.deepStrictEqual(bucketSort([4, 2, 4, 1, 2]), [1, 2, 2, 4, 4]);
});


test('handles all identical elements', () => {
  assert.deepStrictEqual(bucketSort([4, 4, 4, 4]), [4, 4, 4, 4]);
});

test('handles fully reverse-sorted array', () => {
  assert.deepStrictEqual(bucketSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
});

test('handles a larger unsorted array', () => {
  assert.deepStrictEqual(bucketSort([9,1,8,2,7,3,6,4,5,0]), [0,1,2,3,4,5,6,7,8,9]);
});

test('handles two elements, unsorted', () => {
  assert.deepStrictEqual(bucketSort([2, 1]), [1, 2]);
});