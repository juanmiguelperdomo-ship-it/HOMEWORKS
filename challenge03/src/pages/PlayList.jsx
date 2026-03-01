import { useEffect, useState } from "react"
import   LinkedList   from "../structures/LinkedList"

function List(){

    const [linkedList] = useState(new LinkedList())
    const [song, setSong] = useState("")

    useEffect(()=>{
        if (linkedList.length === 0){
            linkedList.append("Me Porto Bonito")
            linkedList.append("Hyperfocus")
            linkedList.append("Golden Hour")
            linkedList.append("Pulse & Nerve")
            linkedList.append("Blinding Lights")
            linkedList.append("Levitating")
            linkedList.append("Save Your Tears")
            linkedList.append("Stay")
            linkedList.append("Industry Baby")
            linkedList.append("Anti-Hero")
            linkedList.append("Circles")
            setSong(linkedList.getCurrent())
        }
    },[]) 

    const nextSong = () =>{
        setSong(linkedList.next())
    }

    return (
    <div>
      <h2>Playlist</h2>
      <p>Cancion: {song}</p>
      <button onClick={nextSong}>Siguiente</button>
    </div>
  )
}


export default List