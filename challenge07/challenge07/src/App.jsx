import { Route, Routes, Link } from "react-router-dom"
import Login from "./Pages/Login"
import Dashboard from "./Pages/Dashboard"
import Private from "./Structures/PrivateRoutes"
import Register from "./Pages/Register"

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
