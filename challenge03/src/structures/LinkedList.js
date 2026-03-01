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
        this.current = null
    }

    append(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode
            this.current = newNode
        }else{
            this.tail.next = newNode
        }

        this.tail = newNode
        this.length ++
    }



    next(){
        if(this.current?.next){
            this.current = this.current.next
        }
        return this.current?.value
    }

    getCurrent(){
        return this.current?.value
    }
}

export default LinkedList