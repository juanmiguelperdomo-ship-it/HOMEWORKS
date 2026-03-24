import { Route, Routes, Link } from "react-router-dom"
import Login from "./Pages/Login"
import Dashboard from "./Pages/Logout"
import Row from "./Pages/QAtm"
import Books from "./Pages/Books"
import Private from "./Structures/PrivateRoutes"

export const App= ()=>{
  return(
      <Routes>
        <Route path="/" element={<Login />} />   
        <Route path="/Login" element={<Login />} />   

        <Route element={<Private />}>
          <Route path="/dashboard" element={<Dashboard />}>
                <Route path="Row" element={<Row />}/>
                <Route path="Books" element={<Books />}/>
          </Route>
        </Route>     
      </Routes>
  )
}

export default App
