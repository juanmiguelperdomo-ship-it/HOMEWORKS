class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class CDLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.current = null
        this.length = 0
    }

    append(value) {
        const newNode = new Node(value)

        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
            this.current = newNode
            this.head.next = this.head
            this.head.prev = this.head
            this.length = 1
            return
        }

        newNode.prev = this.tail
        newNode.next = this.head
        this.tail.next = newNode
        this.head.prev = newNode
        this.tail = newNode
        this.length++
    }

    getNext(node) {
        return node?.next ?? null
    }

    getPrev(node) {
        return node?.prev ?? null
    }

    getHead() {
        return this.head
    }

    getCurrent() {
        return this.current
    }

    next() {
        if (this.current?.next) {
            this.current = this.current.next
        }
    }

    prev() {
        if (this.current?.prev) {
            this.current = this.current.previous
        }
    }
}

export default CDLinkedList