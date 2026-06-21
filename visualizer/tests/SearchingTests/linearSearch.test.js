import { linearSearch } from '../../src/SearchingAlgorithms/linearSearch.js'
import { describe, test } from 'node:test';
import assert from 'node:assert';

test('Search an empty array for a target', () => 
{
    assert.deepStrictEqual(linearSearch([],7), -404)
});

test('Search a sorted array for a target', () => {
    assert.deepStrictEqual(linearSearch([1,2,3,4,5,6,7], 3), 2)
});

test('Search an unsorted array for a target', () => {
    assert.deepStrictEqual(linearSearch([3,5,2,10,1,0,8], 0), 5)
});

test('Search an unsorted array for a target that is located at start', () => {
    assert.deepStrictEqual(linearSearch([3,5,2,10,1,0,8], 3), 0)
});

test('Search an unsorted array for a target that is located at end', () => {
    assert.deepStrictEqual(linearSearch([3,5,2,10,1,0,8], 8), 6)
});

test('Search an array for a target that is not located in', () => {
    assert.deepStrictEqual(linearSearch([3,5,2,10,1,0,8], 92), -404)
});

