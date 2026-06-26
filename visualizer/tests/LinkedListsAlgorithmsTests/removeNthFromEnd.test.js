import { removeNthFromEnd } from '../../src/Algorithms/LinkedListsAlgorithms/removeNthFromEnd.js';
import { LinkedList } from '../../src/Algorithms/LinkedListsAlgorithms/linked-lists-objects/LinkedList.js';
import { describe, test } from 'node:test';
import assert from 'node:assert';

test('Normal removal middle case', () => 
{
    const ll_list = new LinkedList();
    for (let i = 1; i < 6; i++)
    {
        ll_list.push(i);
    }
    const new_nodes = removeNthFromEnd(ll_list.head,2);
    const nodes_arr = nodesToArray(new_nodes);
    assert.deepStrictEqual(nodes_arr, [1,2,3,5]);
});

test('removal head case', () => 
{
    const ll_list = new LinkedList();
    for (let i = 1; i < 6; i++)
    {
        ll_list.push(i);
    }
    const new_nodes = removeNthFromEnd(ll_list.head,5 );
    const nodes_arr = nodesToArray(new_nodes);
    assert.deepStrictEqual(nodes_arr, [2,3,4,5]);
});

test('removal tail case', () => 
{
    const ll_list = new LinkedList();
    for (let i = 1; i < 6; i++)
    {
        ll_list.push(i);
    }
    const new_nodes = removeNthFromEnd(ll_list.head,1 );
    const nodes_arr = nodesToArray(new_nodes);
    assert.deepStrictEqual(nodes_arr, [1,2,3,4]);
});

test('removal a singular linked list case', () => 
{
    const ll_list = new LinkedList();
    ll_list.push(1);
    const new_nodes = removeNthFromEnd(ll_list.head, 1);
    const nodes_arr = nodesToArray(new_nodes);
    assert.deepStrictEqual(nodes_arr, []);
});

test('two-element list, remove tail', () => {
    const ll_list = new LinkedList();
    ll_list.push(1);
    ll_list.push(2);
    const new_nodes = removeNthFromEnd(ll_list.head, 1);
    assert.deepStrictEqual(nodesToArray(new_nodes), [1]);
});

test('two-element list, remove head', () => {
    const ll_list = new LinkedList();
    ll_list.push(1);
    ll_list.push(2);
    const new_nodes = removeNthFromEnd(ll_list.head, 2);
    assert.deepStrictEqual(nodesToArray(new_nodes), [2]);
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