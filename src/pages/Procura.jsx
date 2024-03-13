import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

import { Link } from "react-router-dom"


const procurarURL = import.meta.env.VITE_SEARCH
const chaveAPI = import.meta.env.VITE_API_KEY
const imgURL = import.meta.env.VITE_IMG;


function Procurar() {
  const [procurarParams] = useSearchParams()

  const [filmes, setFilmes] = useState([])
  const query = procurarParams.get("q")


  const getProcurarFilmes = async (url) => {
      const res = await fetch(url)
      const data = await res.json();

      setFilmes(data.results)
  };

  useEffect( () => {

      const procurarFilmesUrl = `${procurarURL}?language=pt-BR&${chaveAPI}&query=${query}`//parametro da url

      getProcurarFilmes(procurarFilmesUrl)

  }, [query]); //quando a pagina carregar, iniciar o "getTopFilmes"
  


  return (
      <div className="containerPesquisa">
        
        <h2>Resultados para:{query} </h2>

        {filmes && 
          filmes.map ( (filme) => 
          <Link to={`/assistir/${filme.id}`}>
            <h1>{filme.title}</h1> 
            <img src={imgURL+ filme.poster_path} alt="" />
          </Link> )
        }
  </div>   
  )
}

export default Procurar;