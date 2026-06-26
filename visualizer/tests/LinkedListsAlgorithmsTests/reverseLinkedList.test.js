import {reverseLinkedList} from '../../src/Algorithms/LinkedListsAlgorithms/reverseLinkedList.js';
import { LinkedList } from '../../src/Algorithms/LinkedListsAlgorithms/linked-lists-objects/LinkedList.js';
import { describe, test } from 'node:test';
import assert from 'node:assert';

test("Reverse an empty Linked List", () => {
    const ll_list = new LinkedList();
    const reversed_nodes = reverseLinkedList(ll_list.head);
    const arr_nodes = nodesToArray(reversed_nodes);
    assert.deepStrictEqual(arr_nodes, []);
});

test("Reverse a list with 1 element", () => {
    const ll_list = new LinkedList();
    ll_list.push(10);
    const reversed_nodes = reverseLinkedList(ll_list.head);
    const arr_nodes = nodesToArray(reversed_nodes);
    assert.deepStrictEqual(arr_nodes, [10]);
});

test("Reverse a list with 2 element", () => {
    const ll_list = new LinkedList();
    ll_list.push(10);
    ll_list.push(20);
    const reversed_nodes = (reverseLinkedList(ll_list.head));
    const arr_nodes = nodesToArray(reversed_nodes);
    assert.deepStrictEqual(arr_nodes, [20,10]);
});

test("Reverse a list with multiple different elements", () => {
    const ll_list = new LinkedList();
    for (let i = 0; i < 6; i++)
    {
        if (i % 2 == 0)
        {
            ll_list.push(i);
        }
        else 
        {
            ll_list.push(-i);
        }
    }
    ll_list.push(70);
    const reversed_nodes = (reverseLinkedList(ll_list.head));
    const arr_nodes = nodesToArray(reversed_nodes);
    assert.deepStrictEqual(arr_nodes, [70,-5,4,-3,2,-1,0]);
});

function nodesToArray(node) {
    const result = [];
    let curr = node;
    while (curr) {
        result.push(curr.data);
        curr = curr.next;
    }
    return result;
}