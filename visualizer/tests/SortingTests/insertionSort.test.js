import { insertionSort} from '../../src/SortingAlgorithms/insertionSort.js';
import { describe, test } from 'node:test';
import assert from 'node:assert';


test('sorts an unsorted array', () => {
  assert.deepStrictEqual(insertionSort([5, 3, 1, 4, 2]), [1, 2, 3, 4, 5]);
});

test('handles an empty array', () => {
  assert.deepStrictEqual(insertionSort([]), []);
});

test('handles a single-element array', () => {
  assert.deepStrictEqual(insertionSort([7]), [7]);
});

test('handles an already sorted array', () => {
  assert.deepStrictEqual(insertionSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
});

test('handles duplicate values', () => {
  assert.deepStrictEqual(insertionSort([4, 2, 4, 1, 2]), [1, 2, 2, 4, 4]);
});

test('handles negative numbers', () => {
  assert.deepStrictEqual(insertionSort([-3, 1, -7, 0, 5]), [-7, -3, 0, 1, 5]);
});

test('handles all identical elements', () => {
  assert.deepStrictEqual(insertionSort([4, 4, 4, 4]), [4, 4, 4, 4]);
});

test('handles fully reverse-sorted array', () => {
  assert.deepStrictEqual(insertionSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
});

test('handles a larger unsorted array', () => {
  assert.deepStrictEqual(insertionSort([9,1,8,2,7,3,6,4,5,0]), [0,1,2,3,4,5,6,7,8,9]);
});

test('handles two elements, unsorted', () => {
  assert.deepStrictEqual(insertionSort([2, 1]), [1, 2]);
});