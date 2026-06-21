import { bubbleSort} from '../../src/SortingAlgorithms/bubbleSort.js';
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