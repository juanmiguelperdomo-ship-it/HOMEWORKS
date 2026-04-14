class Node {
    constructor(value){
        this.value = value
        this.son = []
    }

    addSon(node){
        this.son.push(node)
    }

}

export default Node