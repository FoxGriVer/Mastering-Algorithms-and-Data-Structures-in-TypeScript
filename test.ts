const phrase = "TypeScript-is-a-powerful-language-for-static-type-checking-and-enhances-productivity-and-readability-of-code.";
const wordCount = new Map<string, number>();
const words = phrase.split("-");

for (const word of words) {
    if (wordCount.has(word)) {
        wordCount.set(word, wordCount.get(word)! + 1);
    } else {
        wordCount.set(word, 1);
    }
}

console.log(wordCount);