function pivoting<T>(arr: T[], low: number, high: number, compare: (left: T, right: T) => boolean): number {
    // Remark: 
    // all elements that are smaller than the pivot point are on the left
    // all elements that are greater than the pivot point are on the right
    // instead moving all elements that are greater to the right, focus on those less than the pivot points
    // becasue this will lose the reference of pivot point after swapping one elment that are greater than the pivot point
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

