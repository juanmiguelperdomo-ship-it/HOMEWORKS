import { useContext } from "react"
import { GraphContext } from "../context/createContext"
import { Graph as D3Graph } from "react-d3-graph"  
import { zoom } from "d3-zoom"

const config = {
    nodeHighlightBehavior: true,
    node: {
        color: "#4848db",
        size: 400,
        fontSize: 14,
        fontColor: "white",
        labelProperty: "label",               
    },
    link: {
        highlightColor: "lightblue",
    },
    height: 500,
    width: 800,
    zoom : false,
    panAndZoom : false,
}

function GraphView() {
    const { graph, foundCity, person } = useContext(GraphContext)  

    let nodes = graph.nodes.map(n => {
        const p = person.find(p => p.id === n)
        return {
            id: n,
            label: p ? `${p.name} - ${p.age}` : n   
        }
    })

    let links = []

    graph.nodes.forEach(node => {
        graph.adjlist[node].forEach(neighbor => {
            if(!links.find(l =>
                (l.source === node && l.target === neighbor) ||
                (l.source === neighbor && l.target === node)
            )){
                links.push({ source: node, target: neighbor })
            }
        })
    })

    if(foundCity) {
        const neighbors = graph.adjlist[foundCity]
        if(neighbors) {
            const related = [foundCity, ...neighbors]
            nodes = nodes.filter(n => related.includes(n.id))
            links = links.filter(l => related.includes(l.source) && related.includes(l.target))
        }
    }

    if(!nodes.length) return <p className="graph-empty">Agrega nodos para ver el grafo</p>

    return (
        <D3Graph
            id="friend-graph"
            data={{ nodes, links }}
            config={config}
        />
    )
}

export default GraphView


