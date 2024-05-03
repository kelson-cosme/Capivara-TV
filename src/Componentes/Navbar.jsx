import { useState } from "react";
import { BiSearchAlt2} from "react-icons/bi"
import {Link, useNavigate } from "react-router-dom";

import "../pages/Home.css"

import Logo from "../assets/logo.png"

function Navbar() {

    const [search, setSearch] = useState("")
    const navigate = useNavigate();

    const envio = (e) => {
        e.preventDefault();//botão submit não fazer o envio
    
        if(!search) return //evitar que a pesquisa retorne vazia

        navigate(`/procurar?q=${search}`)
        setSearch("")

    }

    return (
        <nav className="navegar">

            <div className="navegarCima">
                <div><Link to={""}><img src={Logo}/></Link></div>

                <div className="categoria">
                    <Link to={"/"}>Canais Ao Vivo</Link>
                    <Link to={"/"}>Filmes</Link>
                    <Link to={"/"}>Series</Link>
                </div>
                
            </div>
            

            <div className="pesquisa">
                <form onSubmit={envio}>
                    <input type="text" placeholder="Busque seu filme" onChange={ (e)=> setSearch(e.target.value)}  value={search}/> {/* pegar valor do input*/}
                    <button type="submit" >
                            <BiSearchAlt2/> 
                    </button>

                </form>
            </div>
        </nav>

        
    )
  }
  
  export default Navbar
  