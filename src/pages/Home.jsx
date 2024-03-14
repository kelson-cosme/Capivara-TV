import {useState, useEffect} from "react"


import {Swiper, SwiperSlide} from "swiper/react"

import { Link } from "react-router-dom";

import "./Home.css"

const filmesURL = import.meta.env.VITE_API;
const chaveAPI = import.meta.env.VITE_API_KEY;
const imgURL = import.meta.env.VITE_IMG;


function Home() {

  
  const [recente, setRecente] = useState([]);
  const [popular, setPopular] = useState([])

  const getRecentes = async (url) => {
    const res = await fetch(url)
    const data = await res.json() //transformando o resultado em json

    setRecente(data.results)
  }  

  const getPopular = async (url) => {
    const res = await fetch(url)
    const data = await res.json() //transformando o resultado em json

    setPopular(data.results)
  }  

  useEffect ( () => {

    const popularFilmes = `${filmesURL}upcoming?language=pt-BR&${chaveAPI}`

    getPopular(popularFilmes)
  }, [])//quando a pagina iniciar ela irá ativar a função "getRecentes"

  useEffect ( () => {

    const recentesFilmesURL = `${filmesURL}now_playing?language=pt-BR&${chaveAPI}`

    getRecentes(recentesFilmesURL)
  }, [])//quando a pagina iniciar ela irá ativar a função "getRecentes"

  return (

    
    <section class="corpoHome">
      <div className="slideCinemas">
      <Swiper slidesPerView={4} pagination={{ clickable:true }} navigation>
          {recente &&
            recente.map( (filmes) => (
              <SwiperSlide key={filmes.id}>

                <Link className="card" to={`/assistir/${filmes.id}`}> 
                  <div className="poster">
                    <img src={imgURL + filmes.poster_path} className="slideItem" alt="" />
                  </div>

                  <h1>{filmes.title}</h1>
                </Link>
              </SwiperSlide>
            ))
          }
      </Swiper>

      </div>
        
      <div className="slidePopular">
        <Swiper slidesPerView={4} pagination={{ clickable:true }} navigation>
            {popular &&
              popular.map( (filmes) => (
                <SwiperSlide key={filmes.id}>

                  <Link className="card" to={`/assistir/${filmes.id}`}> 
                    <div className="poster">
                      <img src={imgURL + filmes.poster_path} className="slideItem" alt="" />
                    </div>

                    <h1>{filmes.title}</h1>
                  </Link>
                </SwiperSlide>
              ))
            }
        </Swiper>
      </div>
      
    </section>
  )
}

export default Home
