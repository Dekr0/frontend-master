class TimeMap {
    private map: Map<string, {v: string; t: number}[]>;
    // Notice that each timestamp being set will be greater than the previous timestamp being set
    // Thus, t is in increasing order
    // If somebody doesn't notice this property, IRL setting time require some sort of Time API.
    // With the fact of which time flow unidirectionally => it is impossible to set a time that's less than the current
    // time

    constructor() {
        this.map = new Map();
    }

    set(key: string, value: string, timestamp: number): void {
        if (this.map.has(key)) {
            this.map.get(key)?.push({v: value, t: timestamp});
        } else {
            this.map.set(key, [{v: value, t: timestamp}]);
        }
    }

    get(key: string, timestamp: number): string {
        if (this.map.has(key)) {
            const pairs = this.map.get(key);
            if (pairs) {
                let low = 0, high = pairs.length;
                let max = -1;
                do {
                    const mid = Math.floor((low + high) / 2);
                    const t = pairs[mid].t;

                    if (t === timestamp) return pairs[mid].v;

                    if (t < timestamp) {
                        low = mid + 1;
                        max = Math.max(max, t);
                    } else {
                        high = mid;
                    }
                } while (low < high)
                
                return pairs[max].v;
            }
        }

        return '';
    }
}
