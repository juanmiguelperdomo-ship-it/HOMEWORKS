import { useState } from "react";

interface Props {
    suma: number
}

function Contador({suma}:Props){
    const [contador, setContador] = useState(suma)

    return(
        <>
        <p>Contador: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>
            sumar
        </button>
        <button onClick={() => setContador(contador - 1)}>
            restar
        </button>
        <button onClick={() => setContador(suma)}>
            Reiniciar
        </button>
        </>
        
    )
}

export default Contador