export {};

function partition(arr: number[], left: number, right: number): number {
    const pivot = arr[right];        // Pivot element (last element)
    let smallerIndex = left - 1;     // Boundary of elements ≤ pivot

    for (let currentIndex = left; currentIndex < right; currentIndex++) {

        // If the current element is less than or equal to the pivot
        const currentValue = arr[currentIndex];
        if (currentValue <= pivot) {
            smallerIndex++;

            // Explicit swap of elements
            const temp = arr[smallerIndex];
            arr[smallerIndex] = currentValue;
            arr[currentIndex] = temp;
        }
    }

    // Place the pivot immediately after all elements ≤ pivot
    const temp = arr[smallerIndex + 1];
    arr[smallerIndex + 1] = arr[right];
    arr[right] = temp;

    return smallerIndex + 1; // Final position of the pivot
}

function quickSort(vehicles: number[], left: number, right: number): void {
    if (left < right) {
        let pivotIndex = partition(vehicles, left, right);
        quickSort(vehicles, left, pivotIndex - 1);
        quickSort(vehicles, pivotIndex + 1, right);
    }
}

let vehicles: number[] = [2, 9, 5, 1, 6, 3];
quickSort(vehicles, 0, vehicles.length - 1);
console.log(vehicles);