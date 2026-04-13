class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

    isLeaf(){
        if (this.left === null && this.right === null){
            return true;
        } else{
            return false;
        }
    }

}


class Btree{
    constructor(){
        this.root = null;
    }

    append(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return;
        }
   
        let current = this.root;

        while (true){
            if(value === current.value) return

            if (value < current.value){
                if(!current.left){
                    current.left = newNode;
                    return;
                }
                current = current.left;

            } else{
                if(!current.right){
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
            
        }
    }

    preOrder(node){
       if(!node) return;
       console.log(node.value);
       this.preOrder(node.left);
       this.preOrder(node.right);
    }

    postOrder(node){
        if(!node) return;
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.value);
    }

    inOrder(node){
        if(!node) return;
        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right);
    }

    searchNode(node, value){
        if(!node) return null;
        if(node.value === value) return node;

        if(value < node.value)
            return this.searchNode(node.left, value);

        return this.searchNode(node.right, value);
    }

}   

export default Btree