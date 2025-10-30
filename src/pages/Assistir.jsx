import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import "../pages/Assistir.css"

// API da TMDB para buscar o título
const filmesURL = import.meta.env.VITE_API
const chaveAPI = import.meta.env.VITE_API_KEY


function Assistir() {
 
  const { id } = useParams() //pegar o paremetro id da url
  const [filmeId, setFilmeId] = useState(null)
  
  const [filme, setFilme] = useState()

  const getFilme = async (url) => {
    const res = await fetch(url)
    const data = await res.json();
    setFilme(data) // Usado para mostrar o título
  }

  useEffect(() => {
    // Busca o título do filme na TMDB
    const filmeURL = `${filmesURL}${id}?language=pt-BR&${chaveAPI}`
    getFilme(filmeURL)

    // Define o ID do filme para usar na API de streaming
    setFilmeId(id)

    // Insere o Iframe
    if (filmeId) {
      var frame = document.getElementById('SuperFlixAPIContainerVideo');
      
      // ATUALIZADO: Removido o atributo 'sandbox' para corrigir o erro de CORS.
      // (Isso fará com que os pop-ups voltem)
      frame.innerHTML = '<iframe src="https://vidsrc.me/embed/movie?tmdb='+filmeId+'" scrolling="no" frameborder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen=""></iframe>';
    }

  }, [id, filmeId]); // Atualiza quando o ID ou filmeId mudam

  return (
      <>
          {/* Mostra o título que buscamos da TMDB */}
          {filme &&
            <h1>{filme.title}</h1>
          }
        
        <div id="SuperFlixAPIContainerVideo"></div>
      </>
    )
  }
  
  export default Assistir