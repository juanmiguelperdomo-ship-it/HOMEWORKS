import { useState } from "react";

function Add({addBooks}){
    const [name, setName] = useState ("")
    const [isbn, setIsbn] = useState ("")
    const [author, setAuthor] = useState ("")
    const [edit, setEdit] = useState ("")

    const handleSubmit  = (e)=>{
        e.preventDefault()
        if(!name || !isbn || !author || !edit) return

        addBooks({name,isbn,author,edit})

        setName("")
        setIsbn("")
        setAuthor("")
        setEdit("")
    }


    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} placeholder="Nombre" name="name" onChange={n => setName(n.target.value)}/>
            <input type="text" value={author} placeholder="Autor" name="author" onChange={n => setAuthor(n.target.value)}/>
            <input type="text" value={isbn} placeholder="Isbn" name="isbn" onChange={n => setIsbn(n.target.value)}/>
            <input type="text" value={edit} placeholder="Editorial" name="edit" onChange={n => setEdit(n.target.value)}/>
            <button type="submit">Agregar</button>
        </form>
    )



}

export default Add 