export function detectLinkedList(head)
{
    if (head == null || head.next == null)
    {
        return false;
    }  

    let slow = head; 
    let fast = head; 
    while (slow && fast && fast.next)
    {
        slow = slow.next;
        fast = fast.next.next;

        if (slow == fast)
        {
            return true;
        }
    }
    return false;
    
}