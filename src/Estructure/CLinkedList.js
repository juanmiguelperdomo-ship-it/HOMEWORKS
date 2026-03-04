class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class ClinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    append(value) {
        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            newNode.next = newNode 
        } else {
            this.tail.next = newNode
            newNode.next = this.head
            this.tail = newNode
        }

        this.length++
    }

    getNext(node) {
        return node?.next ?? null
    }

    getHead() {
        return this.head
    }
}

export default ClinkedList