import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

import "../pages/Home.css"; // Seus estilos de Navbar estão aqui

import Logo from "../Imagens/logo.png";
import Lupa from "../Imagens/lupa.png";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const envio = (e) => {
    e.preventDefault(); //botão submit não fazer o envio

    if (!search) return; //evitar que a pesquisa retorne vazia

    navigate(`/procurar?q=${search}`);
    setSearch("");
  };

  return (
    <nav className="navegar">
      <div className="navegarCima">
        <div className="imageLogo">
          <Link to={"/"}>
            <img src={Logo} alt="Capivara TV" />
          </Link>
        </div>

        <div className="categoria">
          {/* Links removidos para limpar a UI */}
          <Link to={"/"}>Filmes</Link>
          {/* <Link to={"/"}>Canais Ao Vivo</Link> */}
          {/* <Link to={"/"}>Series</Link> */}
        </div>
      </div>

      <div className="pesquisa">
        <form onSubmit={envio}>
          <input
            type="text"
            placeholder="Busque seu filme"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button className="enviar" type="submit">
            <img src={Lupa} alt="Buscar" />
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;