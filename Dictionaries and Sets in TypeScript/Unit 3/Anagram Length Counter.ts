function sortCharacters(input: string): string {
    return input.split('').sort().join('');
}

function findAnagrams(array1: string[], array2: string[]): number {
    let totalLength = 0;

    const normalizedSet = new Set<string>();
    for (const word of array1) {
        normalizedSet.add(sortCharacters(word));
    }

    for (const word of array2) {
        if (normalizedSet.has(sortCharacters(word))) {
            totalLength += word.length;
        }
    }

    return totalLength;
}

let array1: string[] = ["cat", "dog", "tac", "god", "act"];
let array2: string[] = ["tca", "ogd", "atc", "taco"];
let result: number = findAnagrams(array1, array2);
console.log(result);