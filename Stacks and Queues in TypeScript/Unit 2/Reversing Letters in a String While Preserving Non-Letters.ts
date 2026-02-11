export {};

function reverseOnlyLetters(str: string): string {
    let stack: string[] = [];
  
    for (let char of str) {
        if (/^[a-zA-Z]/.test(char)) {
            stack.push(char);
        }
    }
  
    let result: string = '';
    
    for (let char of str) {
      if (/^[a-zA-Z]/.test(char)) {
        result += stack.pop();
      } else {
        result += char;
      }
    }
  
    return result;
}

// Testing
let str1: string = "a-bC-dEf-ghIj";
console.log(reverseOnlyLetters(str1)); // Expected: "j-Ih-gfE-dCba"

let str2: string = "TesT1-2";
console.log(reverseOnlyLetters(str2)); // Expected: "TseT1-2"

let str3: string = "abcd";
console.log(reverseOnlyLetters(str3)); // Expected: "dcba"