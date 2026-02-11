export {};

function areBracketsBalanced(s: string): boolean {
    const stack: string[] = [];

    const openingToClosing: Record<string, string> = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    const closingBrackets: Set<string> = new Set([')', ']', '}']);

    for (const char of s) {

        if (char in openingToClosing) {
            const expectedClosing = openingToClosing[char];
            stack.push(expectedClosing);
            continue;
        }

        if (closingBrackets.has(char)) {
            if (stack.length === 0) {
                return false;
            }

            const lastExpected = stack.pop();
            if (lastExpected !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(areBracketsBalanced("[({})]")); // true
console.log(areBracketsBalanced("[(]")); // false
console.log(areBracketsBalanced("[]{}()")); // true
console.log(areBracketsBalanced("[])")); // false