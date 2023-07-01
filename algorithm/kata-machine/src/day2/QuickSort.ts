function pivoting<T>(arr: T[], low: number, high: number, compare: (left: T, right: T) => boolean): number {
    let pivot = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (compare(arr[i], arr[high])) {
            const tmp = arr[pivot]; 
            arr[pivot++] = arr[i];
            arr[i] = tmp;
        }
    }

    const tmp = arr[high];
    arr[high] = arr[pivot];
    arr[pivot] = tmp;

    return pivot;
}

function qsort<T>(arr: T[], low: number, high: number, compare: (left: T, right: T) => boolean): void {
    if (low >= high) return;

    const pivot = pivoting(arr, low, high, compare);
    
    qsort(arr, low, pivot - 1, compare);
    qsort(arr, pivot + 1, high, compare);
}

export default function quick_sort(arr: number[]): void {
    qsort(arr, 0, arr.length - 1, (left: number, right: number) => left > right);
}
