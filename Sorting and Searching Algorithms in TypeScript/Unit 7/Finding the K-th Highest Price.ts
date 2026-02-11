function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        if (arr[j] >= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

function findKthLargest(numbers: number[], k: number): number {
    if (!numbers || k <= 0 || numbers.length < k) {
        return Number.MAX_SAFE_INTEGER;
    }

    return kthLargest(numbers, 0, numbers.length - 1, k);
}

function kthLargest(arr: number[], start: number, end: number, k: number): number {
    while (start <= end) {
        const pivotIndex = partition(arr, start, end);

        const countOnLeftIncludingPivot = pivotIndex - start + 1;

        if (countOnLeftIncludingPivot === k) {
            return arr[pivotIndex];
        }

        if (countOnLeftIncludingPivot > k) {
            end = pivotIndex - 1;
        } else {
            k -= countOnLeftIncludingPivot;
            start = pivotIndex + 1;
        }
    }

    return Number.MAX_SAFE_INTEGER;
}

console.log(findKthLargest([1, 7, 2, 4, 2, 1, 6], 3)); // 4