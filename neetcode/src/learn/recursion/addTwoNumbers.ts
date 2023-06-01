/**
    * Definition for singly-linked list.
    * class ListNode {
    *     val: number
    *     next: ListNode | null
    *     constructor(val?: number, next?: ListNode | null) {
        *         this.val = (val===undefined ? 0 : val)
        *         this.next = (next===undefined ? null : next)
        *     }
        * }
        */

type ListNode = {
    val: number,
    next: ListNode | null
};


function addTwoNumbersR(l1: ListNode | null, l2: ListNode | null): ListNode {
    if (l1 && l2) {
        if (l1.next === null && l2.next === null && l1 !== null && l2 !== null) {
            return {val: l1.val + l2.val} as ListNode;
        }

        if (l1.next === null) {
            const next = addTwoNumbersR(l1, l2.next);
            
            return {val: l2.val, next: addTwoNumbersR(l1, l2.next)} as ListNode;
        }

        if (l2.next === null) {
            return {val: l1.val, next: addTwoNumbersR(l1.next, l2)} as ListNode;
        }

        return {val: l1.val + l2.val, next: addTwoNumbersR(l1.next, l2.next)} as ListNode;
    }
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
};
