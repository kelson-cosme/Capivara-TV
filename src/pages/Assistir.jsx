import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const filmesURL = import.meta.env.VITE_API
const chaveAPI = import.meta.env.VITE_API_KEY
var frame = document.getElementById('SuperFlixAPIContainerVideo');


function Assistir() {

  const {id} = useParams() //pegar o paremetro id da url
  const [filme, setFilme] = useState(null)

  

      useEffect(() => {

        const getFilme = async (url) => {
          const res = await fetch(url)
          const data = await res.json();
      
          setFilme(data)
          }

        const filmeURL = `${filmesURL}${id}?${chaveAPI}`
        getFilme(filmeURL)

        console.log(filme)

        // var type = "filme";
        // var season = "";
        // var episode = "";
  
  
        // SuperFlixAPIPluginJS(type, imdb, season, episode);
        
        // function SuperFlixAPIPluginJS(type, imdb, season, episode){
        // if (type == "filme") { 
        //   season="";episode="";
        
        // }else{if (season !== "") { 
        //   season = "/"+season; 
        //    }if (episode !== "") { 
        //       episode = "/"+episode; 
        //     }
        //   }
        //     frame.innerHTML = '<iframe src="https://superflixapi.top/'+type+'/'+imdb+season+episode+'" scrolling="no" frameborder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen=""></iframe>';
        // }

        
      }, []);
    


   

  return (
      <>
          {filme && 
            <h1>{filme.imdb_id}</h1>
          }
        

      </>
    )
  }
  
  export default Assistir
  