
const a: number[] = [];

// Receive an function that return nothing
// Record the runtime of the input function
function time(fn: () => void): number {
    const now = Date.now();
    fn();
    return Date.now() - now;
}

// dequeue
function unshift(number: number) {
    for (let i = 0; i < number; ++i) {
        a.unshift(Math.random());
    }
}

// enqueue
function shift(number: number) {
    for (let i = 0; i < number; ++i) {
        a.shift();
    }
}

// push
function push(number: number) {
    for (let i = 0; i < number; ++i) {
        a.push(Math.random());
    }
}

// pop
function pop(number: number) {
    for (let i = 0; i < number; ++i) {
        a.pop();
    }
}

// return a function that get the idx position of the element in a on execute
function get(idx: number) {
    return function() {
        return a[idx];
    };
}

// return a function that push "count" amount of items into a on execute
function push_arr(count: number) {
    return function() {
        push(count);
    };
}

// return a function that pop "count" amount of items from a on execute
function pop_arr(count: number) {
    return function() {
        pop(count);
    };
}

// return a function that unshift "count" amount of items from a on execute
function unshift_arr(count: number) {
    return function() {
        unshift(count);
    };
}

// return a function that shift "count" amoung of items into a on execute
function shift_arr(count: number) {
    return function() {
        shift(count);
    };
}

const tests = [10, 100, 1000, 10000, 100000, 1_000_000, 10_000_000];
console.log("Testing get");
tests.forEach(t => {
    a.length = 0;
    push(t); // push t amount of items into the a
    console.log(t, time(get(t - 1)));
});

console.log("push");
tests.forEach(t => {
    a.length = 0;
    push(t);

    console.log(t, time(push_arr(1000)));
});

console.log("pop");
tests.forEach(t => {
    a.length = 0;
    push(t);

    console.log(t, time(pop_arr(1000)));
});

console.log("unshift");
tests.forEach(t => {
    a.length = 0;
    push(t);

    console.log(t, time(unshift_arr(1000)));
});

console.log("shift");
tests.forEach(t => {
    a.length = 0;
    push(t);

    console.log(t, time(shift_arr(1000)));
});
