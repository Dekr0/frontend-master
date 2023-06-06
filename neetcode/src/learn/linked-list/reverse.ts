import LNode from './struct';

const reverse = function (head: LNode | null): LNode | null {
    if (head === null || head.next === null) return head;

    let prev: LNode | null = null;
    let next: LNode | null;

    while (head) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }

    return prev;
}

export default reverse;
