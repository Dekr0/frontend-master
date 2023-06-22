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
    return (...args: any[]) => { date: new Date(); output: f(...args) };
}

const stampedMultBy2 = dateStamp((n: number) => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }
