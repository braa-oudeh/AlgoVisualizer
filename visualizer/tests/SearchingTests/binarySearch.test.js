import { binarySearch } from '../../src/SearchingAlgorithms/binarySearch.js'
import { describe, test } from 'node:test';
import assert from 'node:assert';

test('Search a sorted array for a target', () => {
  assert.deepStrictEqual(binarySearch([1, 2, 3, 4, 5], 5), 4);
});

test('handles an empty array', () => {
  assert.deepStrictEqual(binarySearch([],5), -404);
});

test('handles a single-element array', () => {
  assert.deepStrictEqual(binarySearch([7],7), 0);
});

test('handles middle target in sorted array', () => {
  assert.deepStrictEqual(binarySearch([1, 2, 3, 4, 5], 3), 2);
});

test('handles first element target in sorted array', () => {
  assert.deepStrictEqual(binarySearch([1, 2, 3, 4, 5], 1), 0);
});