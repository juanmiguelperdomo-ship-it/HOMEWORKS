class Queue{
    constructor(){
        this.items = []
    }

    enqueue(items){
        this.items.push(items)
    }

    dequeue(){
        return this.items.length > 0 ? this.items.shift() : null
    }

    peek(){
        return this.items.length > 0 ? this.items[0] : null
    }

    size(){
        return this.items.length 
    }
    
    isEmpty(){
        return this.items.length === 0
    }

    print(){
        this.items.forEach(items =>{
            console.log( items )
        })
    }
}

export default Queue