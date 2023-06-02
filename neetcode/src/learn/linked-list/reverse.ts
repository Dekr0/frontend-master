class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}


function reverse(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) return head;

    let prev: ListNode | null = null;
    let next: ListNode | null;

    while (head) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }

    return prev;
}
