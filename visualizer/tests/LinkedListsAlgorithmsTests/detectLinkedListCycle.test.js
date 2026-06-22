import {detectLinkedList} from '../../src/LinkedListsAlgorithms/detectLinkedListCycle.js';
import { LinkedList } from '../../src/LinkedListsAlgorithms/linked-lists-objects/LinkedList.js';
import { describe, test } from 'node:test';
import assert from 'node:assert';

test('Empty linked List', () => 
{
    const ll_list = new LinkedList();
    const res = detectLinkedList(ll_list.head);
    assert.deepStrictEqual(res, false);
});

test('non linked List cycles', () => 
{
    const ll_list = new LinkedList();
    ll_list.push(10);
    ll_list.push(20);
    const res = detectLinkedList(ll_list.head);
    assert.deepStrictEqual(res, false);
});

test('Detect a cycle', () => 
{
    const ll_list = new LinkedList();
    ll_list.push(10);
    ll_list.push(20);
    ll_list.push(30);

    let curr = ll_list.head;
    while (curr.next) {
        curr = curr.next;
    }
    curr.next = ll_list.head;

    const res = detectLinkedList(ll_list.head);
    assert.deepStrictEqual(res, true);
});

test('Detect a cycle in a linked list with 2 elements', () => 
{
    const ll_list = new LinkedList();
    ll_list.push(10);
    ll_list.push(20);
    let curr = ll_list.head;
    while (curr.next) {
        curr = curr.next;
    }
    curr.next = ll_list.head;

    const res = detectLinkedList(ll_list.head);
    assert.deepStrictEqual(res, true);
});

test('Detect a cycle in a linked list with no cycles', () => 
{
    const ll_list = new LinkedList();
    ll_list.push(10);
    ll_list.push(20);
    const res = detectLinkedList(ll_list.head);
    assert.deepStrictEqual(res, false);
});


test('Detect a cycle in a linked list with a cycle but the values are duplicates', () => 
{
    const ll_list = new LinkedList();
    ll_list.push(10);
    ll_list.push(10);
    ll_list.push(10);

    let curr = ll_list.head;
    while (curr.next) {
        curr = curr.next;
    }
    curr.next = ll_list.head;

    const res = detectLinkedList(ll_list.head);
    assert.deepStrictEqual(res, true);
});

test('Detect a cycle in a linked list with no cycle but the values are duplicates', () => 
{
    const ll_list = new LinkedList();
    ll_list.push(10);
    ll_list.push(10);
    ll_list.push(10);
    const res = detectLinkedList(ll_list.head);
    assert.deepStrictEqual(res, false);
});