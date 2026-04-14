import { useEffect, useState } from 'react';
import DlinkedList from '../Structures/DLinkedList';

function History(){
    const [Dlist] = useState(new DlinkedList())
    const [search, setsearch] = useState(null)

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
            setsearch(Dlist.getHead())
        }
    },[])

    const prevSearch = ()=>{
        if(search){
            const prev = Dlist.getPrev(search)
            if(prev) setsearch(prev)
        }
    }

    const nextSearch = ()=>{
        if(search){
            const next =  Dlist.getNext(search)
            if(next) setsearch(next)
        }
    }

    return(
        <div>
            <h2>Historial</h2>
            <p>Pagina visitada: {search?.value}</p>
            <button onClick={prevSearch}>Anterior</button>
            <button onClick={nextSearch}>Siguiente</button> 
        </div>
    )

}

export default History
