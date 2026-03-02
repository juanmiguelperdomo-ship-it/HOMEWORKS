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
        this.current = null
        this.length = 0
    }

    append(value){
        const newNode = new Node(value)

        if(!this.head){
            this.head = newNode
            this.current = newNode
        }else{
            this.tail.next = newNode
        }
        
        this.tail = newNode
        this.length++
        console.log("Se ha añadido un estudiante")
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
            return
        }

        if(this.current?.value === value){
            this.current = this.head
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
        console.log("Se ha eliminado un estudiante")
        
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