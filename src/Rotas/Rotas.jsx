import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Assistir from "../pages/Assistir";
import Procurar from "../pages/Procura";
import Navbar from "../Componentes/Navbar";
import Footer from "../Componentes/Footer";

function Rotas() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Adicionamos o container principal aqui */}
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assistir/:id" element={<Assistir />} />
          <Route path="/procurar" element={<Procurar />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default Rotas;