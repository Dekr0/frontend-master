export type LNode = {
    value: number,
    next: LNode | null,
};

function reverseList(head: LNode | null): LNode | null {
    if (!head || !head.next) return head;

    let prev: LNode | null = null;
    let curr: LNode | null = head;
    let next: LNode | null;
    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return curr;
}

let head: LNode | null = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

let curr: LNode | null = head;
while(curr) {
    console.log(curr.value);
    curr = curr.next;
    
}

head = reverseList(head);

curr = head;
while(curr) {
    console.log(curr.value);
    curr = curr.next;
    
}
