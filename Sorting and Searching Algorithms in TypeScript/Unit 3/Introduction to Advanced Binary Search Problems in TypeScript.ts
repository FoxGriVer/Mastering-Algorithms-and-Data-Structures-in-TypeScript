function findPosition(arr: number[], targetNumber: number): number {
    let peakIndex = findPeak(arr);

    // search to the left of the peak
    let start: number = 0;
    let end: number = peakIndex;
    let resultPosition = binarySearch(arr, targetNumber, start, end, true);

    if (resultPosition !== -1) {
        return resultPosition;
    }

    // search to the right of the peak
    start = peakIndex + 1;
    end = arr.length - 1;
    resultPosition = binarySearch(arr, targetNumber, start, end, false);

    if (resultPosition !== -1) {
        return resultPosition;
    }

    return -1;
}

function findPeak(arr: number[]): number {
    let start = 0;
    let end = arr.length - 1;
    
    while (start < end) {
        const mid = Math.floor((start + end) / 2);
        const midValue = arr[mid];
        const nextValue = arr[mid + 1];

        if (midValue > nextValue) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }

    return start;
}

function binarySearch(arr: number[], targetNumber: number, low: number, high: number, ascending: boolean): number {
    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] === targetNumber) {
            return mid;
        }

        if (ascending) {
            if (arr[mid] < targetNumber) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        } else {
            if (arr[mid] > targetNumber) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
}

const arr = [-3, -2, 4, 6, 10, 8, 7, 1];
const targetNumber = 7;
const position = findPosition(arr, targetNumber);
if (position === -1) {
    console.log("Element not present");
} else {
    console.log("Element present at index " + position);
}