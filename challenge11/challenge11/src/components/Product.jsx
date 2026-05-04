import { useRef, useState, useEffect } from "react"
import Trie from "../structures/Tries"
import "../Product.css" 

const trie = new Trie()
trie.insert("air max", 95)
trie.insert("nike dunk", 88)
trie.insert("air force 1", 97)
trie.insert("nike blazer", 99)
trie.insert("air jordan 1", 93)
trie.insert("air zoom pegasus", 82)
trie.insert("adidas superstar", 91)
trie.insert("adidas stan smith", 86)
trie.insert("adidas campus 00s", 94)
trie.insert("adidas samba", 98)
trie.insert("adidas gazelle", 83)
trie.insert("adidas ultraboost", 89)



function Product(){
    const product = useRef(trie)
    const [res, setRes] = useState([])
    const [topk, setTopK] = useState(3)
    const [query, setQuery] = useState("")


    useEffect(() => {
        if(query.trim() === ""){
            const all = product.current.getAll()
            setRes(all.slice(0, topk)) // respeta el topK
            return
        }

        const result = product.current.searchTopk(query.toLowerCase(), topk)
        setRes(result)
    }, [query, topk])

    const handleSearch = (e) =>{
        const value = e.target.value
        setQuery(value)

        if(value.trim() === ""){
            setRes([])
            return
        }
        const result = product.current.searchTopk(value.toLowerCase(), topk)
        setRes(result)
    }

    return(
        <div className="container">
            <h2 className="title">Buscar Producto</h2>

            <input 
                className="search-input"
                type="text" 
                value={query} 
                onChange={handleSearch} 
                placeholder="Ej: air, adidas"
            />

            <select 
                className="select-topk"
                value={topk} 
                onChange={(e)=> setTopK(Number(e.target.value))}
            >
                <option value={1}>Top 1</option>
                <option value={2}>Top 2</option>
                <option value={3}>Top 3</option>
                <option value={5}>Top 5</option>
                <option value={10}>Top 10</option>
            </select>

            <ul className="result-list">
                {res.map((item, index) => (
                    <li className="result-item" key={index}>
                        <span>{item.word}</span>
                        <span className="score">⭐ {item.pop}</span>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default Product