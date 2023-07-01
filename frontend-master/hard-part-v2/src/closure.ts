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


function undoFactory(limit: number) {
    let actions: string[] = [];

    return function(action: string) {
        switch (action) {
            case 'undo': {
                if (actions.length > 0) {
                    return `${actions.pop()} undone`;
                } else {
                    return 'nothing to undo';
                }
            }
            default: {
                if (actions.length < limit) {
                    actions.push(action)
                }
                return `${action} done`;
            }
        }
    }
}

function blackjack(array: number[]) {
    let next = 0;
    return function(first: number, second: number) {
        let busted = false;
        let sum = 0;
        return function() {
            if (busted) return 'you are done';
            
            if (next > array.length) return 'no more hands';
                
            sum = sum ? array[next++] + sum : first + second;
            
            if (sum < 21) {
                return sum;
            } else {
                busted = true;
                return 'bust';
            }
        }
    }
}

const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

/*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

/*** BELOW LINES ARE FOR THE BONUS ***/

/*** PLAYER 2 ***/
const i_TOO_like_to_live_dangerously = deal(2, 2);
console.log(i_TOO_like_to_live_dangerously()); // => should log 4
console.log(i_TOO_like_to_live_dangerously()); // => should log 15
console.log(i_TOO_like_to_live_dangerously()); // => should log 19
console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

/*** PLAYER 3 ***/
const i_ALSO_like_to_live_dangerously = deal(3, 7);
console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!

