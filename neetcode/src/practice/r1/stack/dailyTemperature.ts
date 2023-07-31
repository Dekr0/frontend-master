function dailyTemperature_r1_worst(temperatures: number[]): number[] {
    const ans = new Uint32Array(temperatures.length);
    for (let i = 0; i < temperatures.length; i++) {
        const current= temperatures[i];
        for (let j = i; i < temperatures.length && current >= temperatures[j]; j++) {
            ans[i] += 1;
        }
    }

    return Array.from(ans);
}

function dailyTemperature_r1(temperatures: number[]): number[] {
    const ans = new Uint32Array(temperatures.length);
    const mono: number[] = [];

    return Array.from(ans);
}
