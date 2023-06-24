function pivoting(arr: number[], low: number, high: number): number {
    // Remark: 
    // all elements that are smaller than the pivot point are on the left
    // all elements that are greater than the pivot point are on the right
    // instead moving all elements that are greater to the right, focus on those less than the pivot points
    // becasue this will lose the reference of pivot point after swapping one elment that are greater than the pivot point
    //

    let pivot = 0;  // next index the place an element that less than the pivot

    for (let i = 0; i < high; i++) {
        if (arr[i] < arr[high]) {
            const tmp = arr[pivot];
            arr[pivot++] = arr[i];
            arr[i] = tmp;
        }
    }

    const tmp = arr[pivot];
    arr[pivot] = arr[high];
    arr[high] = tmp;
    
    return pivot;
}

function qsort(arr: number[], low: number, high: number): void {
    if (low >= high) return;

    const pivot = pivoting(arr, low, high);

    qsort(arr, low, pivot - 1);
    qsort(arr, pivot + 1, high);
}

export default function quick_sort(arr: number[]): void {
    qsort(arr, 0, arr.length - 1);
}
