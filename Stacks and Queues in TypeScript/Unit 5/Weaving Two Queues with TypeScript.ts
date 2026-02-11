export {};

class Queue<T> {
  private elements: T[] = [];

  enqueue(element: T): void {
    this.elements.push(element);
  }

  dequeue(): T | undefined {
    return this.elements.shift();
  }

  peekLast(): T | undefined {
    return this.elements[this.elements.length - 1];
  }

  dequeueLast(): T | undefined {
    return this.elements.pop();
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }
}

function alternatingEnqueue<T>(queue1: Queue<T>, queue2: Queue<T>): Queue<T> {
  let resultQueue: Queue<T> = new Queue<T>();

  while (!queue1.isEmpty() || !queue2.isEmpty()) {
    if (!queue1.isEmpty()) {
      resultQueue.enqueue(queue1.dequeue()!);
    }

    if (!queue2.isEmpty()) {
      resultQueue.enqueue(queue2.dequeueLast()!);
    }
  }
  
  return resultQueue;
}

const queue1 = new Queue<number>();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
const queue2 = new Queue<number>();
queue2.enqueue(4);
queue2.enqueue(5);
queue2.enqueue(6);

const resultQueue = alternatingEnqueue(queue1, queue2);
console.log(resultQueue); // Expected output: [1, 6, 2, 5, 3, 4]