"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SinglyLinkedList {
    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }
    prepend(item) {
        const node = { val: item };
        if (this.length === 0) {
            this.head = this.tail = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }
    insertAt(item, idx) {
        if (idx < 0 || idx > this.length)
            return;
        if (idx === 0) {
            this.prepend(item);
            return;
        }
        if (idx === this.length) {
            this.append(item);
        }
        let curr = this.head;
        for (let i = 0; i < idx - 1 && curr; i++) {
            curr = curr.next;
        }
        const node = { val: item };
        if (curr !== undefined) {
            const next = curr === null || curr === void 0 ? void 0 : curr.next;
            curr.next = node;
            node.next = next;
            this.length++;
        }
    }
    append(item) {
        const node = { val: item };
        if (!this.tail) {
            this.head = this.tail = node;
        }
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }
    remove(item) {
        let curr = this.head;
        let prev = undefined;
        while (curr && curr.val !== item) {
            prev = curr;
            curr = curr.next;
        }
        if (!curr) {
            return undefined;
        }
        this.length--;
        // Deal with head
        if (prev !== undefined) {
            prev.next = curr.next;
        }
        else {
            this.head = curr.next;
        }
        // Deal with tail
        if (curr.next !== undefined) {
            curr.next = undefined;
            return curr.val;
        }
        return curr.val;
    }
    get(idx) {
        let curr = this.head;
        for (let i = 0; i < idx && curr; i++) {
            curr = curr.next;
        }
        return curr === null || curr === void 0 ? void 0 : curr.val;
    }
    removeAt(idx) {
        if (idx < 0 || idx > this.length)
            return undefined;
        let curr = this.head;
        let prev = undefined;
        for (let i = 0; i < idx && curr; i++) {
            prev = curr;
            curr = curr.next;
        }
        if (!curr) {
            return undefined;
        }
        this.length--;
        // Deal with head
        if (prev !== undefined) {
            prev.next = curr.next;
        }
        else {
            this.head = curr.next;
        }
        // Deal with tail
        if (curr.next !== undefined) {
            curr.next = undefined;
            return curr.val;
        }
        return curr.val;
    }
    reverse() {
        let prev = undefined;
        let curr = this.head;
        let next = curr === null || curr === void 0 ? void 0 : curr.next;
        while (curr !== undefined) {
            curr.next = prev;
            prev = curr;
            curr = next;
            next = curr === null || curr === void 0 ? void 0 : curr.next;
        }
        let tmp = this.head;
        this.head = this.tail;
        this.tail = tmp;
    }
}
exports.default = SinglyLinkedList;
