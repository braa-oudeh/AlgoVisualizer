import { middleLinkedList } from '../../src/Algorithms/LinkedListsAlgorithms/middleLinkedList.js';
import { LinkedList } from '../../src/Algorithms/LinkedListsAlgorithms/linked-lists-objects/LinkedList.js';
import { describe, test } from 'node:test';
import assert from 'node:assert';

test('finds middle in an empty list', () => 
{
    const ll_list = new LinkedList();
    const middle_element = middleLinkedList(ll_list.head);
    assert.deepStrictEqual(middle_element, 'List is empty')
});

test('finds middle in a list with a single element', () => 
{
    const ll_list = new LinkedList();
    ll_list.push(10);
    const middle_element = middleLinkedList(ll_list.head);
    assert.deepStrictEqual(middle_element, 10);
});

test('finds middle in a list with a two elements', () => 
{
    const ll_list = new LinkedList();
    ll_list.push(10);
    const middle_element = middleLinkedList(ll_list.head);
    assert.deepStrictEqual(middle_element, 10);
});

test('finds middle in a list with 3 elements', () => 
{
    const ll_list = new LinkedList();
    ll_list.push(10);
    ll_list.push(20);
    ll_list.push(30);
    const middle_element = middleLinkedList(ll_list.head);
    assert.deepStrictEqual(middle_element, 20);
});

test('finds middle in a list with 4 elements', () => 
{
    const ll_list = new LinkedList();
    ll_list.push(10);
    ll_list.push(20);
    ll_list.push(30);
    ll_list.push(40);
    const middle_element = middleLinkedList(ll_list.head);
    assert.deepStrictEqual(middle_element, 20);
});

