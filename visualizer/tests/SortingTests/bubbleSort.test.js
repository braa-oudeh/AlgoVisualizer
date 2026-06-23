import { bubbleSort} from '../../src/Algorithms/SortingAlgorithms/bubbleSort.js';
import { describe, test } from 'node:test';
import assert from 'node:assert';


test('sorts an unsorted array', () => {
  assert.deepStrictEqual(bubbleSort([5, 3, 1, 4, 2]), [1, 2, 3, 4, 5]);
});

test('handles an empty array', () => {
  assert.deepStrictEqual(bubbleSort([]), []);
});

test('handles a single-element array', () => {
  assert.deepStrictEqual(bubbleSort([7]), [7]);
});

test('handles an already sorted array', () => {
  assert.deepStrictEqual(bubbleSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
});

test('handles duplicate values', () => {
  assert.deepStrictEqual(bubbleSort([4, 2, 4, 1, 2]), [1, 2, 2, 4, 4]);
});

test('handles negative numbers', () => {
  assert.deepStrictEqual(bubbleSort([-3, 1, -7, 0, 5]), [-7, -3, 0, 1, 5]);
});

test('handles all identical elements', () => {
  assert.deepStrictEqual(bubbleSort([4, 4, 4, 4]), [4, 4, 4, 4]);
});

test('handles fully reverse-sorted array', () => {
  assert.deepStrictEqual(bubbleSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
});

test('handles a larger unsorted array', () => {
  assert.deepStrictEqual(bubbleSort([9,1,8,2,7,3,6,4,5,0]), [0,1,2,3,4,5,6,7,8,9]);
});

test('handles two elements, unsorted', () => {
  assert.deepStrictEqual(bubbleSort([2, 1]), [1, 2]);
});