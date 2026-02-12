export {};

class ListNode<T> {
    data: T;
    next: ListNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList<T> {
    head: ListNode<T> | null;

    constructor() {
        this.head = null;
    }

    append(data: T): void {
        const newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current: ListNode<T> = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    delete(data: T): void {
        if (!this.head) return;

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current: ListNode<T> = this.head;
        
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            
            current = current.next;
        }
    }

    show(): void {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const list = new LinkedList<string>();
list.append('Apple');
list.append('Banana');
list.delete('Banana');
list.append('Cherry');
list.show();