export function middleLinkedList(head)
{
    if (head == null)
    {
        return 'List is empty';
    }

    else if (head.next == null)
    {
        return head.data;
    }
    let slow = head; 
    let fast = head.next;

    while (slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.data;

}