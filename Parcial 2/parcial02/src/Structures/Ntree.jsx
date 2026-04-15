class Node{
    constructor({id, name, type, email}){
        this.id = id
        this.name = name
        this.type = type
        this.email = email

        this.children = type === "folder" ? [] : null

    }

    addChildren(node){
        if(this.type === "file"){
            throw new Error("Un archivo no puede tener hijos")
        }
        this.children.push(node)
    }

}

export default Node