function degreeOneApply(f, x) {
    return (y) => f(x, y);
}
function degreeTwoApply(f, x) {
    return (y) => {
        return (z) => {
            return f(x, y, z);
        };
    };
}
function apply(f, arg) {
    let applied = [arg];
    if (applied.length === f.length)
        return f(...applied);
    return function _apply(next) {
        applied.push(next);
        if (applied.length === f.length)
            return f(...applied.reverse());
        return _apply;
    };
}
function dateStamp(f) {
    return (...args) => { return { date: new Date(), output: f(...args) }; };
}
function censor() {
    let pairs = [];
    return function (first, second) {
        if (second === undefined) {
            pairs.forEach(e => first = first.replace(e.holder, e.replace));
            return first;
        }
        else {
            pairs.push({
                holder: first,
                replace: second
            });
        }
    };
}
function createSecretHolder(secret) {
    return {
        getSecret: function () { return secret; },
        setSecret: (newSecret) => {
            secret = newSecret;
        }
    };
}
function callTimes(f) {
    let counter = 0;
    return (...args) => {
        counter++;
        return f(...args);
    };
}
function roulette(num) {
    return () => {
        if (num-- > 0) {
            return 'spin';
        }
        else if (num-- === 0) {
            return 'win';
        }
        else {
            return 'pick a number to play again';
        }
    };
}
function average() {
    let sums = [];
    let count = 0;
    let avg = 0;
    return (num) => {
        console.log(sums);
        if (!num) {
            return avg;
        }
        if (sums.length === 0) {
            count++;
            avg = num;
            sums.push(num);
            return avg;
        }
        else {
            const prev = sums.pop();
            if (prev !== undefined) {
                const next = prev + num;
                sums.push(next);
                count++;
                avg = next / count;
                return avg;
            }
            else {
                throw new Error("???");
            }
        }
    };
}
const avg = average();
console.log(avg());
console.log(avg(1));
console.log(avg(2));
console.log(avg(-3));
console.log(avg());
console.log(avg(5));
console.log(avg());
