function generate(n: number): string[] {
    const sol: string[] = [];

    type Status = {
        open: number,
        close: number,
        str: string
    };

    const stack: Status[] = [
        { open: 1, close: 0, str: '('}
    ];

    while (stack.length > 0) {
        const top = stack.pop();
        if (top) {
           if (top.close === n) sol.push(top.str);

           if (top.open < n) stack.push({
               open: top.open + 1,
               close: top.close,
               str: top.str + '('
           });

           if (top.open > top.close) stack.push({
               open: top.open,
               close: top.close + 1,
               str: top.str + ')'
           });
        }
    }

    return sol;
}
