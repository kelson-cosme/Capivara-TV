import {useState, useEffect} from "react"

import { Link } from "react-router-dom";
 
const filmesURL = import.meta.env.VITE_API;
const chaveAPI = import.meta.env.VITE_API_KEY;
const imgURL = import.meta.env.VITE_IMG;


function Home() {

  
  const [recente, setRecente] = useState([]);

  const getRecentes = async (url) => {
    const res = await fetch(url)
    const data = await res.json() //transformando o resultado em json

    setRecente(data.results)
  }  

  useEffect ( () => {

    const recentesFilmesURL = `${filmesURL}now_playing?language=pt-BR&${chaveAPI}`

    getRecentes(recentesFilmesURL)
  }, [])//quando a pagina iniciar ela irá ativar a função "getRecentes"

  return (

    <section class="corpoHome">
      <h1>Recente adicionados</h1>

      {recente && 
        recente.map((filmes) => 
          <Link to={`/assistir/${filmes.id}`}> 
            <h1>{filmes.title}</h1>

            <div className="poster">
              <img src={imgURL + filmes.poster_path} alt="" />
            </div>
          </Link>
        )
      }
    </section>
  )
}

export default Home
