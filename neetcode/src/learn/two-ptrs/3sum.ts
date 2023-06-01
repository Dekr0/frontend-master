function TSum(arr: number[]): number[][] {
    const triplets: number[][] = [];

    arr = arr.sort()
    let i = 0, low, high;
    for (i = 0; i < arr.length; i++) {
        const twoSum = 0 - arr[i];
        if (i > 0 && arr[i] === arr[i - 1]) continue;
        for (low = i + 1, high = arr.length - 1; low < high; ) {
            if (arr[low] + arr[high] == twoSum) {
                triplets.push([arr[i], arr[low], arr[high]]);
                low++;
                high--;
            } else if (arr[low] + arr[high] > twoSum) {
                high--;
            } else {
                low++;
            }
        }
    }

    return triplets;
}

TSum([-1, 0, 1, 2, -1, -4]);
TSum([0, 1, 1]);
TSum([0, 0, 0]);
