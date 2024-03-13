import { BrowserRouter, Route, Routes  } from "react-router-dom"

import Home from "../pages/Home"
import Assistir from  "../pages/Assistir"
import Procurar from "../pages/Procura"
import Navbar from "../Componentes/Navbar"

function Rotas() {

  return (
    <BrowserRouter>

      <Navbar/>
        <Routes>
            <Route path="/" element= {<Home/>} />
            <Route path="/assistir/:id" element= {<Assistir/>} />
            <Route path="/procurar" element= {<Procurar/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Rotas
