import { useState, useEffect } from "react";
import FormsBooks from "./FormsBooks";
import Stack from "../Structures/Stack";


function Books(){
    const [stack] = useState(new Stack())
    const [books, setBooks] = useState([])

    useEffect(()=>{
        if (stack.size()){
            const data = [
                {
                    name : "Cien años de soledad",
                    author : "Gabriel Garcia Marquez",                    
                    isbn : "9780132350884",
                    edit : "Editorial Sudamericana"
                },
                {
                    name: "Don Quijote de la Mancha",
                    author: "Miguel de Cervantes",
                    isbn: "9788420412146",
                    edit: "Alfaguara"             
                },
                {
                    name: "El Principito",
                    author: "Antoine de Saint-Exupéry",
                    isbn: "9780156012195",
                    edit: "Reynal & Hitchcock"
                }
            ]

            data.forEach(b => stack.push(b))
            setBooks([...stack.items])

        }
    },[])

    const addBooks = (book)=>{
        stack.push(book)
        setBooks(prev => [...prev, book])
    }

    return(
        <div>
            <h1>LIBROS</h1>
            <FormsBooks addBooks={addBooks} />
            <br />
            {[...books].reverse().map((b,i)=>(
                <div key={i}>
                    <p>Libro: {b.name}</p>
                    <p>Autor: {b.author}</p>
                    <p>ISBN: {b.isbn}</p>
                    <p>Editorial: {b.edit}</p>
                    <br />
                </div>
            ))}
        </div>
    )
}

export default Books