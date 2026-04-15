class Tree {
    constructor(root){
        this.root = root
    }

    find(current, id) {
        if(!current) return null
        if(current.id === id) return current

        if(current.children) {
            for (let child of current.children){
                const node = this.find(child, id)
                if(node) return node
            }
        }
        return null
    }

    add(fatherId, newNode){
        const father = this.find(this.root, fatherId)

        if (!father) {
            throw new Error("Nodo no encontrado")
        }

        if (father.type === "file") {
            throw new Error("No puedes agregar hijos a un archivo")
        }

        father.addChild(newNode)
        
    }
}

