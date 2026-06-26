export function reverseLinkedList(head)
{
    if (head == null)
    {
        return;
    }

    let curr = head; 
    let prev = null; 
    while (curr)
    {
        let nextNode = curr.next;
        curr.next = prev; 
        prev = curr; 
        curr = nextNode;
    }

    return prev;
}