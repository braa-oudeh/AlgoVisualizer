import { LinkedList} from '../../src/Algorithms/LinkedListsAlgorithms/linked-lists-objects/LinkedList.js'
import { describe, test } from 'node:test';
import assert from 'node:assert';

test('check if linked List push elements works', () => {
    const ll_list = new LinkedList();
    ll_list.push(10);
    const new_arr = ll_list.toArray();
    assert.deepStrictEqual(new_arr, [10]);
});

test('check if linked List multiple push elements works', () => {
    const ll_list = new LinkedList();
    for (let i = 0; i < 4; i++)
    {
        ll_list.push(i * 10);
    }
    ll_list.display();
    const new_arr = ll_list.toArray();
    assert.deepStrictEqual(new_arr, [0,10,20,30]);
});

test('check if linked List is empty at start', () => {
    const ll_list = new LinkedList();
    const new_arr = ll_list.toArray();
    assert.deepStrictEqual(new_arr, []);
});

test('check if linked list delete doesnt break on empty LLs', () => 
{
    const ll_list = new LinkedList();
    ll_list.delete(10);
    const new_arr = ll_list.toArray();
    assert.deepStrictEqual(new_arr, []);
});

test('check if linked list deletion works on a single operation', () => 
{
    const ll_list = new LinkedList();
    ll_list.push(10);
    ll_list.delete(10);
    const new_arr = ll_list.toArray();
    assert.deepStrictEqual(new_arr, []);
});

test('check if linked list delete works for an element in the middle', () => {
    const ll_list = new LinkedList();
    for (let i = 0; i < 4; i++)
    {
        ll_list.push(i);
    }
    ll_list.delete(2);
    const new_arr = ll_list.toArray();
    assert.deepStrictEqual(new_arr,[0,1,3]);
});

test('check if linked list delete works for an element at end', () => {
    const ll_list = new LinkedList();
    for (let i = 0; i < 4; i++)
    {
        ll_list.push(i);
    }
    ll_list.delete(3);
    const new_arr = ll_list.toArray();
    assert.deepStrictEqual(new_arr,[0,1,2]);
});

test('check if linked list delete works for deleting all elements', () => {
    const ll_list = new LinkedList();
    for (let i = 0; i < 4; i++)
    {
        ll_list.push(i);
    }

    ll_list.delete(0);
    ll_list.delete(1);
    ll_list.delete(2);
    ll_list.delete(3);

    const new_arr = ll_list.toArray();
    assert.deepStrictEqual(new_arr,[]);
});