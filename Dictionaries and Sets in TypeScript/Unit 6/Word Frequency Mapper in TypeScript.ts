function createWordIndex(sentence: string): Map<string, number> {
    let index = new Map<string, number>();

    let words = sentence.split(' ');

    for (let word of words) {
        if (word.trim() === '') {
            continue;
        }

        word = word.toLowerCase();

        if (index.has(word)) {
            index.set(word, index.get(word)! + 1);
        }
        else {
            index.set(word, 1);
        }
    }
    
    return index;
}

let sentence1 = "Hello Hello world world world";
let index1 = createWordIndex(sentence1);
console.log(index1); //Should print: Map { 'hello' => 2, 'world' => 3 }

let sentence2 = "";
let index2 = createWordIndex(sentence2);
console.log(index2); //Should print: Map {}

let sentence3 = "Quick Quick brown fox jumps over the lazy dog";
let index3 = createWordIndex(sentence3);
console.log(index3); //Should print: Map { 'quick' => 2, 'brown' => 1, 'fox' => 1, 'jumps' => 1, 'over' => 1, 'the' => 1, 'lazy' => 1, 'dog' => 1 }