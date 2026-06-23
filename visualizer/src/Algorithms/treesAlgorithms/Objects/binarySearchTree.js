export class Node {
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


export class binarySearchTree
{
    constructor()
    {
        this.root = null;
    }

    insert(node)
    {
        this.root = this.#insertHelper(this.root, node);
    }

    remove(data)
    {
        if (this.search(data))
        {
            this.root = this.#removeHelper(this.root, data);
        }
        else 
        {
            console.log("Data doesn't exist");
        }
    }

    search(data)
    {
        return this.#searchHelper(this.root, data);
    }

    toArray()
    {
        return this.#toArrayHelper(this.root);
    }

    display()
    {
        this.#displayHelper(this.root);
    }

    #insertHelper(root, node)
    {
        const data = node.data;
        if (root == null)
        {
            root = node;
            return root;
        }
        else if (data < root.data)
        {
            root.left = this.#insertHelper(root.left, node);
        }
        else 
        {
            root.right = this.#insertHelper(root.right, node);
        }
        return root;
    }

    #searchHelper(root, data)
    {
        if (root == null)
        {
            return false;
        }
        else if (root.data == data)
        {
            return true;
        }

        else if (root.data > data)
        {
            return this.#searchHelper(root.left, data);
        }
        else 
        {
            return this.#searchHelper(root.right, data);
        }
    }


    #removeHelper(root, data)
    {
        if (root == null)
        {
            return root;
        }

        else if (data < root.data)
        {
            root.left = this.#removeHelper(root.left, data);
        }

        else if (data > root.data)
        {
            root.right = this.#removeHelper(root.right, data);
        }

        // root found
        else 
        {
            // leaf Node
            if (root.left == null && root.right == null)
            {
                root = null;
                return root;
            }
            else if (root.right != null) { //find a successor to replace this node to not break the binary search tree
                root.data = this.#successor(root);
                root.right = this.#removeHelper(root.right, root.data);

            }
            else 
            {  
                root.data = this.#predecessor(root);
                root.left = this.#removeHelper(root.left, root.data);

            }
        }
        return root;
    }

    // helper method to replace the node with the successor (least value in the right subtree)
    #successor(node)
    {
        node = node.right;
        while (node.left != null)
        {
            node = node.left;
        }
        return node.data;
    }
    
    // helper method to replace the node with the predecessor (biggest value in left subtree)
    #predecessor(node)
    {
        node = node.left;
        while (node.right != null)
        {
            node = node.right;
        }
        return node.data;
    }
    // helper method to print the nodes in an order traversal
    #displayHelper(node)
    {
        if (node != null)
        {
            // inorder traversal
            this.#displayHelper(node.left);
            console.log(node.data);
            this.#displayHelper(node.right);
        }
    }

    // returns an array with the values appended in inorder traversal.
    #toArrayHelper(root)
    {
        if (root == null)
        {
            return [];
        }
        else
        {
            return [...this.#toArrayHelper(root.left), root.data, ...this.#toArrayHelper(root.right)];
        }
    }
}   