import MinHeap from "./Heaps"

class Node{
    constructor(value) {
        this.value = value
        this.isEndOfWord = false
        this.children = {}
    }
}

class Trie{
    constructor(){
        this.root = new Node(null)
    }

    insert(word, pop){
        let current = this.root

        for (let character of word){
            if(current.children[character] === undefined){
                current.children[character] = new Node(character)
            }

            current = current.children[character]
        }
        current.isEndOfWord = true
        current.product = {word, pop}
    }

    search(word){
        let current = this.root

        for(let character of word){
            if(current.children[character] === undefined){
                return false
            }
            current = current.children[character]
        }
        return current.isEndOfWord
    }

    searchTopk(prefix, top){
        let current = this.root

        for(let character of prefix){
            if(current.children[character] === undefined) return []
            current = current.children[character]
        }

        const products = []
        this.dfs(current, products)

        const heap = new MinHeap([], (a, b) => a.pop - b.pop)

        for(let product of products){
            heap.push(product)
            if(heap.size() > top) heap.pop()
        }
        return heap.toArray().sort((a,b)=> b.pop - a.pop)
    }

    dfs(node, products){
        if(node.isEndOfWord){
            products.push(node.product)
        }

        for(let child of Object.values(node.children)){
            this.dfs(child, products)
        }
    }

    getAll() {
        const products = []
        this.dfs(this.root, products)
        return products.sort((a, b) => b.pop - a.pop)
    }

}

export default Trie