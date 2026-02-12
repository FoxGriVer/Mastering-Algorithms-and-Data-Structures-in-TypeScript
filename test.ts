class ListNode<T> {
    value: T;
    next: ListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList<T> {
    head: ListNode<T> | null;

    constructor() {
        this.head = null;
    }

    append(value: T): void {
        const newNode = new ListNode(value);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
    }
}

function sumOfEverySecondUnique(list: LinkedList<number>): number {
    if (list.head === null || list.head.next === null) return 0;

    let sum = 0;
    let index = 0;
    let currentNode: ListNode<number> | null = list.head;
    // TODO: Initialize a set to keep track of visited values
    const seen = new Set<number>();

    while (currentNode !== null) {
        // TODO: Calculate the sum of values
        if (!seen.has(currentNode.value)) {
            seen.add(currentNode.value);

            if (index % 2 === 1) {
                sum += currentNode.value;
            }
        }
        
        currentNode = currentNode.next;
        index++;
    }

    return sum;
}

let list = new LinkedList<number>();
list.append(1);
list.append(3); // to be counted
list.append(7);
list.append(2); // to be counted
list.append(4);
list.append(2); // not to be counted, because not unique
console.log(sumOfEverySecondUnique(list));  // Expected: 5