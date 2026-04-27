import { GraphContext } from "./createContext";
import { useGraph } from "../CustomHooks/UseGraph";


export function GraphProvider({children}){
    const {addPerson, person, addCity, city, graph, foundCity, setFoundCity} = useGraph()

    return(
        <GraphContext.Provider value={{addPerson, person, addCity, city, graph, foundCity, setFoundCity}}>
            {children}
        </GraphContext.Provider>
    )
}