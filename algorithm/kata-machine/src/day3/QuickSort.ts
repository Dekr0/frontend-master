function pivoting<T>(arr: T[], low: number, high: number, compare: (a: T, b: T) => boolean): number {
    const pivot = arr[high];
    let pos = 0;
    let i = 0;
    for ( ; i < arr.length; i++) {
        if (compare(pivot, arr[i])) {
            const tmp = arr[pos++];
            arr[pos] = arr[i];
            arr[i] = tmp;
        }
    } 

    arr[high] = arr[pos];
    arr[pos] = pivot;

    return pos;
}

function gqsort<T>(arr: T[], low: number, high: number, compare: (a: T, b: T) => boolean) {
    const pivot = pivoting(arr, low, high, compare);
    gqsort(arr, low, pivot - 1, compare);
    gqsort(arr, pivot + 1, high, compare);
}

export default function quick_sort(arr: number[]): void {
    gqsort(arr, 0, arr.length - 1, (a: number, b: number) => a > b);
}

