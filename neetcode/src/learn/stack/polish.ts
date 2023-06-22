const ev = function(tokens: string[]): number {
    if (tokens.length === 0) {
        return 0;
    }

    if (tokens.length === 1) {
        return parseInt(tokens[0]);
    }

    const operands: number[] = [];

    for (const token of tokens) {
        if (token === "+" || token === "-" || token === "*" || token === "/") {
            if (operands.length >= 2) {
                const right: number | undefined = operands.pop();
                const left: number | undefined = operands.pop();

                let val = 0;

                if (left !== undefined && right !== undefined) {
                    switch (token) {
                        case "+": {
                            val = left + right;
                            operands.push(val);
                            break;
                        }
                        case "-": {
                            val = left - right;
                            operands.push(val);
                            break;
                        }
                        case "*": {
                            val = left * right;
                            operands.push(val);
                            break;
                        }
                        case "/": {
                            val = left / right;
                            val = val < 0 ? Math.ceil(val) : Math.floor(val);
                            operands.push(val);
                            break;
                        }
                        default: {
                            operands.push(NaN);
                            break;
                        }
                    }
                } else {
                    operands.push(NaN);
                }

            }
        } else {
            operands.push(parseInt(token));
        }
    }

    if (operands.length === 1) {
        const result = operands.pop();
        return result === undefined ? NaN : result;
    } else {
        return NaN;
    }
}

console.log(ev(["2","1","+","3","*"]), 9);
console.log(ev(["4","13","5","/","+"]), 6);
console.log(ev(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]), 22);

