function topKFrequentWord(words: string[], k: number): string[] {
    const counts = new Map<string, number>();
    const freqGroups: string[][] = [];
    const topK: string[] = [];
    for (const word of words) {
        freqGroups.push([]);
        if (!counts.has(word)) {
            counts.set(word, 1);
        } else {
            const count = counts.get(word);
            if (count !== undefined) {
                counts.set(word, count + 1);
            }
        }
    }

    counts.forEach((count, word) => {
        freqGroups[count].push(word);
    });

    for (let i = freqGroups.length - 1; i >= 0; i--) {
        if (freqGroups[i].length !== 0) {
            for (const word of freqGroups[i]) {
                if (k === 0) {
                    return topK;
                }
                topK.push(word);
                k--;
            }
        }
    }
    return topK.sort();
}

console.log(topKFrequentWord(["i","love","leetcode","i","love","coding"], 2));
