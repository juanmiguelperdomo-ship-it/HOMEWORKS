import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import List from "./pages/PlayList"
import History from "./pages/History"


function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/musica">Musica </Link> |
        <Link to="/history"> Historial</Link>
      </nav>

      <Routes>
        <Route path="/musica" element={<List/>} />
        <Route path="/history" element={<History/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App