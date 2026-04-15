import { Route, Routes, Link } from "react-router-dom"
import Private from "./PrivateRoutes/PrivateRoutes"
import Login from "./Components/Login"
import Register from "./Components/Register"
import Dashboard from "./Components/Dashboard"

export const App= ()=>{
  return(
      <Routes>
        <Route path="/" element={<Login />} />   
        <Route path="/Login" element={<Login />} /> 
        <Route path="/Register" element={<Register />} /> 
        <Route element={<Private />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>    
      </Routes>
  )
}

export default App