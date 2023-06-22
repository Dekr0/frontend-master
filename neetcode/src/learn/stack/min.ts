class MinStack {
    private stack: number[];
    private hist: number[];

    constructor() {
        this.stack = [];
        this.hist = [];
    }

    push(val: number): void {
        this.stack.push(val);

        if (this.hist.length === 0) {
            this.hist.push(val);
        } else {
            this.hist.push(Math.min(val, this.hist[this.hist.length - 1]));
        }
    }

    pop(): void {
        if (this.stack.length > 0) this.stack.pop();

        if (this.hist.length > 0) this.stack.pop();
    }

    top(): number {
        return this.stack.length > 0 ? this.stack[this.stack.length - 1] : 0;
    }

    getMin(): number {
        return this.hist[this.hist.length - 1];
    }
}
