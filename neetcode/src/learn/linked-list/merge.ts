import LNode from "./struct"

function merge(list1: LNode | null, list2: LNode | null): LNode | null {
    // Algorithm
    //  Construct a new node as the head of the merge sorted linked-list
    //      - Note this new node is empty node that does not contain anything 
    //      - why not choose the least head between list 1 and list 2 ?
    //          => consider edge cases: list 1 is empty, list 2 is empty, or 
    //          both list 1 and list 2 is empty
    //  Why not construct the merge sorted linked-list by walking both list 
    //  alternatively and modify the link based on conditional check ?
    //      => Doable ? but error prone
    let starter = { val: 0, next: null } as LNode; 
    let curr = starter;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }

    curr.next = list1 === null ? list2 : list1;

    return starter.next;
}
