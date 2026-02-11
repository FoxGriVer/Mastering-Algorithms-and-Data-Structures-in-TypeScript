export {};

function merge(left: number[], right: number[]): number[] {
    let resultArray: number[] = [];
    let leftIndex = 0, rightIndex = 0;

    // Sorting and merging process
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenating the remaining elements
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

function simpleMergeSort(cards: number[]): number[] {
    if (cards.length <= 1) return cards;
    const middle = Math.floor(cards.length / 2);
    const leftHalf = cards.slice(0, middle);
    const rightHalf = cards.slice(middle);

    return merge(simpleMergeSort(leftHalf), simpleMergeSort(rightHalf));
}

const mixedDeck = [3, 2, 7, 5, 4, 9, 6, 1, 8];
console.log(simpleMergeSort(mixedDeck));