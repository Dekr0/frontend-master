export default function bs_list(haystack: number[], needle: number): boolean {
    // Boundary [low, high)
    // Caution, excluding mid because it's compared with needle

    let low = 0, high = haystack.length;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (needle > haystack[mid]) {
            low = mid + 1;
        } else if (needle < haystack[mid]) {
            high = mid; // High is exclusive
        } else {
            return true;
        }
    }

    return false;
}
