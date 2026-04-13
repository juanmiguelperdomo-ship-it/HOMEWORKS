import { useState } from "react";

const Find = ( { bTree } )=>{
    const [result, setResult] = useState(null);
    const [search, setSearch] = useState("");


    const handleFind = () => {
        const value = Number(search);

        const node = bTree.current.searchNode(bTree.current.root, value);

        setResult(
            node 
                ? `Nodo encontrado: ${node.value}` 
                : "Nodo no encontrado"
        );
    };

    return(
        <div>
            <input
                type="number"
                placeholder="Buscar nodo"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <button onClick={handleFind}>Buscar</button>

            {result && <p>{result}</p>}
        </div>
    )
}

export default Find