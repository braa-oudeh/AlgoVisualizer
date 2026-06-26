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

        // check if linked list is empty, if yes then the data is our first element

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

    delete(data)
    {
        // if list is empty, simply exit
        if (this.head == null)
        {
            return;
        }

        // if deleted element is in the first of the list, simply move the head to the next pointer 
        else if (this.head.data == data)
        {
            this.head = this.head.next; 
            return;
        }

        let curr = this.head; 
        let prev = null;
        
        while (curr && curr.data != data)
        {
            prev = curr; 
            curr = curr.next;
        }

        if (curr)
        {
            prev.next = curr.next;
            curr.next = null;
        }
    }

    toArray()
    {
        // function to copy all the nodes to an array for easier testing

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
        // helper method to print the nodes for easier debugging
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