class LNode {
    val: number;
    next: LNode | null;

    constructor(val?: number, next?: LNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}


function merge(list1: LNode | null, list2: LNode | null): LNode | null {

}
