export {};

class MaxStack {
    private stack: number[];
    private maxStack: number[];

    constructor() {
        this.stack = [];
        this.maxStack = [];
    }

    push(val: number): void {
        this.stack.push(val);

        if (this.maxStack.length === 0 ||
          val >= this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.push(val);
          }
    }

    pop(): number | undefined {
        const val = this.stack.pop();

        if (val !== undefined &&
          val === this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.pop();
          }
        
        return val;
    }

    top(): number | undefined {
        return this.stack[this.stack.length - 1];
    }

    getMax(): number | undefined {
      return this.maxStack[this.maxStack.length - 1];
    }
}

let ms = new MaxStack();
ms.push(3);
console.log(ms.getMax());  // Expected: 3
ms.push(2);
console.log(ms.getMax());  // Expected: 3
ms.push(4);
console.log(ms.getMax());  // Expected: 4