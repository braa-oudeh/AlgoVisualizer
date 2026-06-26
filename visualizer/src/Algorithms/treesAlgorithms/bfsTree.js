export function bfsTree(root)
{
    const visited = [];

    if (root == null)
    {
        return visited;
    }
    const queue = [root]; 

    while (queue.length != 0)
    {
        let node = queue.shift();
        visited.push(node.data);
        if (node.left)
        {
            queue.push(node.left);
        }

        if (node.right)
        {
            queue.push(node.right);
        }
    }

    return visited;
}  