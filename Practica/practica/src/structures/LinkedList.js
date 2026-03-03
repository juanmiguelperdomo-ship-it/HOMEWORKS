class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
    
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    append(value){
        const newNode = new Node(value)

        if(!this.head){
            this.head = newNode
        }else{
            this.tail.next = newNode
        }
        
        this.tail = newNode
        this.length++
        return
    }

    remove(value, current = this.head){
        if(!this.head) return null

        if(this.head.value === value){
            this.head = this.head.next

            if(!this.head){
                this.tail = null
            }

            this.length --
            return this.head
        }

        current = this.head
        while (current.next && current.next.value !== value){
            current = current.next
        }

        if(current.next){
            current.next = current.next.next
            if(!current.next) this.tail = current
            this.length --
        }
        return this.head
        
    }   

    getNext(node){
        return node?.next ?? null
    }


    getHead(){
        return this.head
    }

}

export default LinkedList