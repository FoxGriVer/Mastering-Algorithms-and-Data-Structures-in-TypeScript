export {};

class NumberStack {
  private numbers: number[];

  constructor() {
    this.numbers = [];
  }

  push(number: number): void {
    this.numbers.push(number);
  }

  pop(): number | string {
    if (this.numbers.length === 0) {
      return "Underflow";
    } else {
      return this.numbers.pop() as number;
    }
  }

  peek(): number | string {
    if (this.numbers.length === 0) {
      return "Underflow";
    } else {
      return this.numbers[this.numbers.length - 1];
    }
  }
}

// Example usage:
let numStack = new NumberStack();
numStack.push(10);
numStack.push(20);
console.log(numStack.pop()); // 20
console.log(numStack.peek()); // Should return 10, but there's a bug!