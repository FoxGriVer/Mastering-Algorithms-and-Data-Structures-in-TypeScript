export {};

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

    addEmail(email: T): void {
        const newNode = new ListNode(email);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    }

    show(): void {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

function removeDuplicates<T>(list: LinkedList<T>): void {
    if (list.head === null || list.head.next === null) return;

    let currentNode = list.head;
    const seen = new Set<T>([currentNode.value]);

    while (currentNode.next !== null) {
        if (seen.has(currentNode.next.value)) {
            currentNode.next = currentNode.next.next;
        }
        else {
            seen.add(currentNode.next.value);
            currentNode = currentNode.next;
        }
    }
}

// Testing with some email addresses in list
let emailList = new LinkedList<string>();
emailList.addEmail("alice@example.com");
emailList.addEmail("bob@example.com");
emailList.addEmail("bob@example.com");
removeDuplicates(emailList);
emailList.show();