import BinaryTree from "./Components/BinaryTree"
import { arbol } from "./Structure/Data"


export const App = ()=>{
  return(
    <div>
      <h1>Arbol Binario</h1>
      <BinaryTree initialRoot={arbol} />
    </div>
  )
}

export default App  
