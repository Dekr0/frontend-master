type TNode<T> = {
    val: T,
    next?: TNode<T>,
    prev?: TNode<T>
};

export default class DoublyLinkedList<T> {
    public length: number;

    private head?: TNode<T>;
    private tail?: TNode<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        this.length++;  // Track of the total length

        const node = { val: item } as TNode<T>;

        // Empty list
        if (!this.head && !this.tail) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        if (this.head) {
            this.head.prev = node;
        }
        this.head = node;

        return;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 && idx >= this.length) throw Error("Invalid Position");

        if (idx === 0) {
            this.prepend(item);
            return;
        }

        if (idx === this.length - 1) {
            this.append(item);
            return;
        }

        this.length++;
        let curr = this.head;
        const node = { val: item } as TNode<T>;
        for (let i = 0; i < idx && curr; i++) {
            curr = curr.next;
        }
        
        if (curr) {
            node.next = curr;
            node.prev = curr.prev;
            if (curr.prev) {
                curr.prev.next = node;
            }
            curr.prev = node;
        }

        return;
    }
    
    append(item: T): void {
        this.length++;

        const node = { val: item } as TNode<T>;

        if (!this.head && !this.tail) {
            this.head = this.tail = node;
        }

        node.prev = this.tail;
        if (this.tail) {
            this.tail.next = node;
        }
        this.tail = node;

        return; 
    }

    remove(item: T): T | undefined {

    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) return undefined;

        let curr = this.head;
        for (let i = 0; i < idx && curr; i++) {
            curr = curr.next;
        }

        return curr?.val;
    }

    removeAt(idx: number): T | undefined {

    }
}
