import './App.css'
import CityForm from './components/CityForm'
import PersonForm from './components/PersonForm'
import SearchPerson from './components/SearchPerson'
import { GraphProvider } from './context/GraphContext'
import GraphView from './components/GraphView'

function App() {

  return (
    <GraphProvider>
      <div className="section">
        <p className="section-title">Agregar Ciudad</p>
        <CityForm />
      </div>      
      <div className="section">
        <p className="section-title">Agregar Persona</p>
        <PersonForm />
      </div>
      <div className="section">
        <p className="section-title">Buscar por Ciudad</p>
        <SearchPerson />
      </div>
      <div className="graph-container">
        <GraphView />
      </div>
    </GraphProvider>
  )
}

export default App
