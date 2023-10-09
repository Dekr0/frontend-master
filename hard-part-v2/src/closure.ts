function degreeOneApply(f: (x: any, y: any) => any, x: any) {
    return (y: any) => f(x, y);
}

function degreeTwoApply(f: (x: any, y: any, z: any) => any, x: any) {
    return (y: any) => {
        return (z: any) => {
            return f(x, y, z);
        }
    }
}

function apply(f: Function, arg: any): Function | any {
    let applied: any[] = [arg];
    
    if (applied.length === f.length) return f(...applied);

    return function _apply(next: any): Function | any {
        applied.push(next);

        if (applied.length === f.length) return f(...applied.reverse());

        return _apply;
    }
}

function dateStamp(f: Function) {
    return (...args: any[]) => { return { date: new Date(), output: f(...args) } };
}

function censor() {
    let pairs: {holder: string, replace: string}[] = [];

    return function(first: string, second?: string): string | void {
        if (second === undefined) {
            pairs.forEach(e => first = first.replace(e.holder, e.replace))

            return first;
        } else {
            pairs.push({
                holder: first,
                replace: second
            });
        }
    }
}

function createSecretHolder<T>(secret: T) {
    return {
        getSecret: function(): T { return secret },
        setSecret: (newSecret: T) => {
            secret = newSecret;
        }
    }
}

function callTimes(f: Function) {
    let counter = 0;

    return (...args: any[]) => {
        counter++;

        return f(...args);
    }
}

function roulette(num: number) {
    return () => {
        if (num-- > 0) {
            return 'spin';
        } else if (num-- === 0) {
            return 'win';
        } else {
            return 'pick a number to play again';
        }
    }
}

function average() {
    let sums: number[] = [];
    let count = 0;
    let avg: number = 0;

    return (num?: number) => {
        console.log(sums);
        if (!num) {
            return avg;
        }

        if (sums.length === 0) {
            count++;
            avg = num;
            sums.push(num);

            return avg;
        } else {
            const prev = sums.pop();
            if (prev !== undefined) {
                const next = prev + num;
                sums.push(next);
                count++;
                avg = next / count; 

                return avg;
            } else {
                throw new Error("???");
            }
        }
    }
}

const avg = average();

console.log(avg());
console.log(avg(1));
console.log(avg(2));
console.log(avg(-3));
console.log(avg());
console.log(avg(5));
console.log(avg());
