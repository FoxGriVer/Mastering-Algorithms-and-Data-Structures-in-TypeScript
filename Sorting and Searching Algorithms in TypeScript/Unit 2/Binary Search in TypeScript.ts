function recursiveBookSearch(library: number[], start: number, end: number, bookID: number): number {
    if (start > end) 
        return -1;

    const mid: number = Math.floor((start + end) / 2);
    const midBookId: number = library[mid];

    if (midBookId === bookID) 
        return mid;

    if (midBookId > bookID) 
        return recursiveBookSearch(library, start, mid - 1, bookID);

    return recursiveBookSearch(library, mid + 1, end, bookID);
}

const library: number[] = [123, 234, 345, 456, 567, 678, 789];
const bookID: number = 234;
const bookFound: number = recursiveBookSearch(library, 0, library.length - 1, bookID);
console.log(`Book found: ${bookFound}`);