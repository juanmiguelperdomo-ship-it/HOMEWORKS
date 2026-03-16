class Stack{
    constructor(){
        this.items = []
    }

    push(value){
        this.items.push(value)
    }

    pop(){
        return this.items.length > 0 ? this.items.pop() : null
    }

    peek(){
        return this.items.length > 0 ? this.items[this.items.length - 1] : null
    }

    print(){
        this.items.slice().reverse().forEach(items => {
            console.log(items)
        })
    }
}

export default Stack