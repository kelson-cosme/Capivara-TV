import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const filmesURL = import.meta.env.VITE_API
const chaveAPI = import.meta.env.VITE_API_KEY

function Assistir() {

  const id = useParams() //pegar o paremetro id da url
  const [filme, setFilme] = useState()
  
  const getFilme = async (url) => {
    const res = await fetch(url)
    const data = await res.json();
    setFilme(data)
    }
  
    useEffect(() => {
      const filmeURL = `${filmesURL}${id.id}?language=pt-BR&${chaveAPI}`
      getFilme(filmeURL)

      let type = "filme";
      let season = "";
      let episode = "";
      let imdb

        if(filme != null){
           imdb = filme.imdb_id
        }

        SuperFlixAPIPluginJS(type, imdb, season, episode);
        function SuperFlixAPIPluginJS(type, imdb, season, episode){
        if (type == "filme") { 
          season="";episode="";
        }else{if (season !== "") { 
          season = "/"+season; 
          }if (episode !== "") { 
            episode = "/"+episode; 
          }}
            var frame = document.getElementById('SuperFlixAPIContainerVideo');
            frame.innerHTML = '<iframe sandbox="allow-scripts allow-same-origin" src="https://superflixapi.top/'+type+'/'+imdb+season+episode+'" scrolling="no" frameborder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen=""></iframe>';
        }
    }, [filme != null]);

  return (
      <>
          {filme &&
            <h1>{filme.title}</h1>
          }
        
        <div id="SuperFlixAPIContainerVideo"></div>
      </>
    )
  }
  
  export default Assistir
  