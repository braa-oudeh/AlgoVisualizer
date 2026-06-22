export function removeNthFromEnd(head, n)
{
    // Assumes 1 <= n <= length of list. Behavior is undefined otherwise.
    if (head == null)
    {
        return;
    }

    // initialize pointers
    let fast = head;
    let slow = head; 

    // To make the gap (L - n) where L is the length of the linked list and n is the place to remove
    for (let i = 0; i < n; i++)
    {
        fast = fast.next;
    }
    
    if (fast == null)
    {
        return head.next;
    }
    
    // Advance both pointers
    while (fast && fast.next)
    {
        fast = fast.next;
        slow = slow.next;
    }

    // remove the Nth node from the end
    slow.next = slow.next.next;

    // return modified node
    return head;
}