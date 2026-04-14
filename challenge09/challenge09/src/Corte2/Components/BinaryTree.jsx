    import { useEffect, useState, useRef } from "react"
    import Tree from "react-d3-tree";
    import Btree from "../Structures/BTrees";
    import transformTree from "../Structures/Data";
    import Find from "./Find";


    const BinaryTree = ({initialRoot})=>{
        const [tree, setTree] = useState(initialRoot || null);
        const bTree = useRef(new Btree());

        useEffect(() => {
            [10, 5, 15, 2, 7, 20].forEach(x => bTree.current.append(x));
            setTree(JSON.parse(JSON.stringify(bTree.current.root)));
        }, []);

        useEffect(() => {
            if (!tree) return;

            console.log("----- INORDER -----");
            bTree.current.inOrder(bTree.current.root);

            console.log("----- PREORDER -----");
            bTree.current.preOrder(bTree.current.root);

            console.log("----- POSTORDER -----");
            bTree.current.postOrder(bTree.current.root);

        }, [tree]);

        const handleInsert = () => {
            const value = Number(prompt("Valor a insertar"));

            if (isNaN(value)) return;

            bTree.current.append(value);

            setTree(JSON.parse(JSON.stringify(bTree.current.root)));
        };

        return (
            <div className="tree">

                {!tree ? (
                    <p>No hay árbol</p>
                ) : (
                    <>
                        <div style={{ width: "100%", height: "500px" }}>
                            <Tree
                                data={transformTree(tree)}
                                orientation="vertical"
                                translate={{ x: 950, y: 50 }}
                                draggable={false}      
                                zoomable={false}        
                                nodeSize={{ x: 150, y: 100 }}
                            />
                        </div>
                    </>    
                )}

                <button onClick={handleInsert}>Insertar nodo</button>
                <Find bTree={bTree} />

            </div>
        );


    };

    export default BinaryTree