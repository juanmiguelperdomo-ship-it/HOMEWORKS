import { useEffect, useState } from 'react';
import DLinkedList from '../structures/DLinkedList';  

function History(){
    const [Dlist] = useState(new DLinkedList())
    const [search, setsearch] = useState("")

    useEffect(()=>{
        if(Dlist.length === 0){
            Dlist.append("https://www.youtube.com")
            Dlist.append("https://www.facebook.com/?locale=es_LA")
            Dlist.append("https://www.tiktok.com")
            Dlist.append("https://www.instagram.com")
            Dlist.append("https://open.spotify.com/intl-es  ")
            Dlist.append("https://www.netflix.com/browse")
            Dlist.append("https://campus.uaovirtual.edu.co/login/index.php?loginredirect=1")
            Dlist.append("https://workspace.google.com/intl/es-419/gmail/")
            Dlist.append("https://github.com")

            setsearch(Dlist.getCurrent())
        }
    },[])

    const prevSearch = ()=>{
        setsearch(Dlist.prev())
    }

    const nextSearch = ()=>{
            setsearch(Dlist.next())
    }

    return(
        <div>
            <h2>Historial</h2>
            <p>Pagina visitada: {search}</p>
            <button onClick={prevSearch}>Anterior</button>
            <button onClick={nextSearch}>Siguiente</button> 
        </div>
    )

}

export default History

