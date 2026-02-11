class Queue<T> {
    private data: T[] = []; // A queue is constructed as an array

    enqueue(element: T): void { 
        this.data.push(element); // The push() method adds an element at the end
    }

    dequeue(): T | string {
        if (this.isEmpty()) 
            return "Underflow"; // If the queue is empty, it returns "Underflow"
        return this.data.shift() as T; // The shift() method removes an element from the start
    }

    isEmpty(): boolean {
        return !this.data.length; // The length property checks if the queue is empty
    }

    getSize(): number {
        return this.data.length;
    }
}

class MovingAverage {
    private size: number;
    private window: Queue<number>;
    private sum: number;

    constructor(size: number) {
        this.size = size;
        this.window = new Queue<number>();
        this.sum = 0.0;
    }

    next(val: number): number {
       // TODO: add the new value to the queue
       this.window.enqueue(val);
       this.sum += val;
       // TODO: calcualte the new average
       if (this.window.getSize() > this.size) {
        this.sum -= this.window.dequeue() as number;
       }

       return this.sum / this.window.getSize();
    }
}

const movingAvg = new MovingAverage(3);
console.log(movingAvg.next(1));     // returns 1.0
console.log(movingAvg.next(10));    // returns 5.5
console.log(movingAvg.next(3));     // returns 4.66667
console.log(movingAvg.next(5));     // returns 6.0