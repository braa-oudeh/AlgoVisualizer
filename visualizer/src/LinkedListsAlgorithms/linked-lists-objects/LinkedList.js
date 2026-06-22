class Node {
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

export class LinkedList
{
    constructor()
    {
        this.head = null;
    }

    push(data)
    {
        const node = new Node(data);
        if (this.head == null)
        {
            this.head = node;
            return;
        }
        let curr = this.head;
        while (curr.next)
        {
            curr = curr.next;
        }
        curr.next = node;
    } 

    toArray()
    {
        const arr = [];
        let curr = this.head;
        while (curr)
        {
            arr.push(curr.data);
            curr = curr.next;
        }
        return arr;
    }
    display()
    {
        let result = "";
        let curr = this.head;
        while (curr)
        {
            result += (curr.data + " -> ");
            curr = curr.next;
        }
        console.log(result + "None");
    }
}