import { binarySearchTree, Node } from "../../src/Algorithms/treesAlgorithms/Objects/binarySearchTree.js";
import { describe, test } from 'node:test';
import assert from 'node:assert';


test('Binary Search Tree is empty at Start', () =>
{
    const tree = new binarySearchTree(); 
    const arr = tree.toArray();
    assert.deepStrictEqual(arr, []);
});

test('Binary Search Tree add root test', () =>
{
    const tree = new binarySearchTree();
    tree.insert(new Node(1)); 
    const arr = tree.toArray();
    assert.deepStrictEqual(arr, [1]);
});


test('Binary Search Tree add left value test', () =>
{
    const tree = new binarySearchTree();
    tree.insert(new Node(1)); 
    tree.insert(new Node(0));
    const arr = tree.toArray();
    assert.deepStrictEqual(arr, [0,1]);
});

test('Binary Search Tree add left and right value test', () =>
{
    const tree = new binarySearchTree();
    tree.insert(new Node(1)); 
    tree.insert(new Node(0));
    tree.insert(new Node(3));
    const arr = tree.toArray();
    assert.deepStrictEqual(arr, [0,1,3]);
});


test('Binary Search Tree add multiple values', () =>
{
    const tree = new binarySearchTree();
    tree.insert(new Node(1)); 
    tree.insert(new Node(0));
    tree.insert(new Node(3));
    tree.insert(new Node(4));
    tree.insert(new Node(5));
    tree.insert(new Node(-1));
    tree.insert(new Node(0.5));
    const arr = tree.toArray();
    assert.deepStrictEqual(arr, [-1,0,0.5,1,3,4,5]);
});


test('Binary Search Tree delete value that doesnt exist', () =>
{
    const tree = new binarySearchTree();
    tree.insert(new Node(1)); 
    tree.remove(3);
    tree.display();
    const arr = tree.toArray();
    assert.deepStrictEqual(arr, [1]);
});


test('Binary Search Tree delete a value in a 1 element tree', () =>
{
    const tree = new binarySearchTree();
    tree.insert(new Node(1)); 
    tree.remove(1);
    const arr = tree.toArray();
    assert.deepStrictEqual(arr, []);
});


test('Binary Search Tree add and delete multiple values', () =>
{
    const tree = new binarySearchTree();
    tree.insert(new Node(1)); 
    tree.insert(new Node(0));
    tree.insert(new Node(3));
    tree.insert(new Node(4));
    tree.insert(new Node(5));
    tree.insert(new Node(-1));
    tree.insert(new Node(0.5));
    tree.remove(1);
    tree.remove(0);
    tree.remove(3);
    tree.remove(4);
    tree.remove(5);
    tree.remove(-1);
    tree.remove(0.5);
    const arr = tree.toArray();
    assert.deepStrictEqual(arr, []);
});

test('Binary Search Tree delete values root value', () =>
{
    const tree = new binarySearchTree();
    tree.insert(new Node(1)); 
    tree.insert(new Node(0));
    tree.insert(new Node(3));
    tree.remove((1));
    const arr = tree.toArray();
    assert.deepStrictEqual(arr, [0,3]);
});

test('Binary Search Tree delete values left child', () =>
{
    const tree = new binarySearchTree();
    tree.insert(new Node(1)); 
    tree.insert(new Node(0));
    tree.insert(new Node(3));
    tree.remove(0);
    const arr = tree.toArray();
    assert.deepStrictEqual(arr, [1,3]);
});

test('Binary Search Tree delete values right child', () =>
{
    const tree = new binarySearchTree();
    tree.insert(new Node(1)); 
    tree.insert(new Node(0));
    tree.insert(new Node(3));
    tree.remove(3);
    const arr = tree.toArray();
    assert.deepStrictEqual(arr, [0,1]);
});


test('Binary Search Tree delete values both childs', () =>
{
    const tree = new binarySearchTree();
    tree.insert(new Node(1)); 
    tree.insert(new Node(0));
    tree.insert(new Node(3));
    tree.remove(3);
    tree.remove(0);
    const arr = tree.toArray();
    assert.deepStrictEqual(arr, [1]);
});

test('Binary Search Tree search method in an empty tree', () =>
{
    const tree = new binarySearchTree();
    const res = tree.search(1);
    assert.deepStrictEqual(res, false);
});

test('Binary Search Tree search method for a value that does exist', () =>
{
    const tree = new binarySearchTree();
    tree.insert(new Node(1));
    const res = tree.search(1);
    assert.deepStrictEqual(res, true);
});

test('Binary Search Tree search method for a value that doesnt exist ', () =>
{
    const tree = new binarySearchTree();
    tree.insert(new Node(1));
    const res = tree.search(5);
    assert.deepStrictEqual(res, false);
});


test('Binary Search Tree search method for a value that does exist in a big tree #1', () =>
{
    const tree = new binarySearchTree();
    tree.insert(new Node(1)); 
    tree.insert(new Node(0));
    tree.insert(new Node(3));
    tree.insert(new Node(4));
    tree.insert(new Node(5));
    tree.insert(new Node(-1));
    tree.insert(new Node(0.5));
    const res = tree.search(5);
    assert.deepStrictEqual(res, true);
});

test('Binary Search Tree search method for a value that does exist in a big tree #2', () =>
{
    const tree = new binarySearchTree();
    tree.insert(new Node(1)); 
    tree.insert(new Node(0));
    tree.insert(new Node(3));
    tree.insert(new Node(4));
    tree.insert(new Node(5));
    tree.insert(new Node(-1));
    tree.insert(new Node(0.5));
    const res = tree.search(-1);
    assert.deepStrictEqual(res, true);
});

test('Binary Search Tree search method for value that doesnt exist in a big tree', () =>
{
    const tree = new binarySearchTree();
    tree.insert(new Node(1)); 
    tree.insert(new Node(0));
    tree.insert(new Node(3));
    tree.insert(new Node(4));
    tree.insert(new Node(5));
    tree.insert(new Node(-1));
    tree.insert(new Node(0.5));
    const res = tree.search(-20);
    assert.deepStrictEqual(res, false);
});