import { mergeSort } from '../src/SortingAlgorithms/mergeSort.js';
import { describe, test } from 'node:test';
import assert from 'node:assert';


test('sorts an unsorted array', () => {
  assert.deepStrictEqual(mergeSort([5, 3, 1, 4, 2]), [1, 2, 3, 4, 5]);
});

test('handles an empty array', () => {
  assert.deepStrictEqual(mergeSort([]), []);
});

test('handles a single-element array', () => {
  assert.deepStrictEqual(mergeSort([7]), [7]);
});

test('handles an already sorted array', () => {
  assert.deepStrictEqual(mergeSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
});

test('handles duplicate values', () => {
  assert.deepStrictEqual(mergeSort([4, 2, 4, 1, 2]), [1, 2, 2, 4, 4]);
});