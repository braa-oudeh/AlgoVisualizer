import {bfsTree} from "../../src/Algorithms/treesAlgorithms/bfsTree.js";
import { binarySearchTree, Node } from "../../src/Algorithms/treesAlgorithms/Objects/binarySearchTree.js";
import { describe, test } from 'node:test';
import assert from 'node:assert';

test('bfs on a standard tree', () => 
{ 
    const tree = new binarySearchTree();
    const node = new Node(1);
    tree.insert(node); 
    tree.insert(new Node(2)); 
    tree.insert(new Node(3)); 
    const bfsArr = bfsTree(tree.root);
    assert.deepStrictEqual(bfsArr, [1,2,3]);
});


test('bfs on an empty tree tree', () => 
{ 
    const tree = new binarySearchTree();
    const bfsArr = bfsTree(tree.root);
    assert.deepStrictEqual(bfsArr, []);
});


test('bfs on a single element tree', () => 
{ 
    const tree = new binarySearchTree();
    tree.insert(new Node(1));
    const bfsArr = bfsTree(tree.root);
    assert.deepStrictEqual(bfsArr, [1]);
});

test('bfs on a big tree', () => 
{ 
    const tree = new binarySearchTree();

    for (let i = 0; i < 11; i++)
    {
        tree.insert(new Node(i));
    
    }
    const bfsArr = bfsTree(tree.root); 
    assert.deepStrictEqual(bfsArr, [0,1,2,3,4,5,6,7,8,9,10]);
});