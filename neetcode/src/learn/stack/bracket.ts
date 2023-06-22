const valid = function(s: string): boolean {
    const stack: string[] = [];

    for (const c of s) {
        if (c === "(" || c === "[" || c === "{") {
            stack.push(c);
        } else if (c === ")" || c === "]" || c === "}") {
            const top = stack.length > 0 ? stack.pop() : " ";
            if (c === ")" && top !== "(") return false;
            if (c === "]" && top !== "[") return false;
            if (c === "}" && top !== "{") return false;
        }
    }

    return true && stack.length === 0;;
}

console.log(valid("([{}])"))
