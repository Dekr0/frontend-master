function dailyTemperatures(temperatures: number[]) {
    const answer = new Uint32Array(temperatures.length);
    let j = 0;
    // Walking backward is the right direction to do this question
    for (let i = temperatures.length - 2; i >= 0; i--) {
        // This part can be optimized by monotonic stack (a stack that has specific order)
        // The issue of using iteration is that there's no warmer temperature until 
        // the end of the last few days, or there's no warmer temperature at all
        //  e.g. only the first two days are the warmest day, the rest of the days are 
        //  getting colder and colder
        // How to construct and maintain the monotonic stack in the current context
        // Initally, push the first item (last one in the input arary) into the stack
        // Then, if the top of the stack is smaller than the current item, pop it out, and push the current one
        // else, keep pushing in
        for (j = i; j < temperatures.length; j++) {
            if (temperatures[i] < temperatures[j]) {
                answer[i] = j - i;
                break;
            }
        }
    }
    return Array.from(answer);
}

const opt = function(temperatures: number[]): number[] {
    const answer = new Uint32Array(temperatures.length);
    const monotonic: number[] = [];
    for (let i = temperatures.length - 1; i >= 0; i--) {
        while (monotonic.length > 0 && temperatures[i] >= temperatures[monotonic[monotonic.length - 1]]) {
            monotonic.pop();
        }
        console.log(monotonic);
        if (monotonic.length === 0) {
            monotonic.push(i);
        } else {
            console.log(monotonic[monotonic.length - 1]);
            answer[i] = monotonic[monotonic.length - 1] - i;
        }
    }

    return Array.from(answer);
}

console.log(opt([73, 74, 75, 71, 69, 72, 76, 73]));

