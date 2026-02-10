function findMin(nums: number[]): number {
    let start: number = 0, end: number = nums.length - 1;

    while (start < end) {
        const mid: number = Math.floor((start + end) / 2);
        
        const midValue: number = nums[mid];
        const endValue: number = nums[end];

        if (midValue > endValue) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }

    // When the while loop ends, start and end will be pointing at the smallest number
    return nums[start];
}

console.log(findMin([4, 5, 1, 2, 3])); // Expected output: 1
console.log(findMin([20, 25, 30, 100, 0])); // Expected output: 0