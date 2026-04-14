class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null    
    }
}

class DlinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    append(value) {
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            return
        }

        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode

        this.length++
    }

    getNext(node){
        return node?.next ?? null
    }

    getPrev(node){
        return node?.prev ?? null
    }

    getHead(){
        return this.head
    }
}



export default DlinkedList
