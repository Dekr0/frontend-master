export default function two_crystal_balls(breaks: boolean[]): number {
    let first = 0;
    let second = 0;
    const jump = Math.floor(Math.sqrt(breaks.length));

    for ( ; first < breaks.length; first += jump) {
        if (breaks[first]) break;
        second = first;
    }

    for ( ; second < first && second < breaks.length; second++) {
        if (breaks[second]) return second;
    }

    return -1;
}

