import { LinkedList} from '../../src/LinkedListsAlgorithms/linked-lists-objects/LinkedList.js'
import { describe, test } from 'node:test';
import assert from 'node:assert';

test('check whether linked List push elements works', () => {
    const ll_list = new LinkedList();
    ll_list.push(10);
    const new_arr = ll_list.toArray();
    assert.deepStrictEqual(new_arr, [10]);
});

test('check whether linked List multiple push elements works', () => {
    const ll_list = new LinkedList();
    for (let i = 0; i < 4; i++)
    {
        ll_list.push(i * 10);
    }
    ll_list.display();
    const new_arr = ll_list.toArray();
    assert.deepStrictEqual(new_arr, [0,10,20,30]);
});

test('check whether linked List is empty at start', () => {
    const ll_list = new LinkedList();
    const new_arr = ll_list.toArray();
    assert.deepStrictEqual(new_arr, []);
});