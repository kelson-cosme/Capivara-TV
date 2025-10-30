import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import "./Home.css";

// IMPORTAR O NOVO COMPONENTE
import Top10Section from "../Componentes/Top10Section";

const filmesURL = import.meta.env.VITE_API;
const chaveAPI = import.meta.env.VITE_API_KEY;
const imgURL = import.meta.env.VITE_IMG;
const backdropURL = "https://image.tmdb.org/t/p/original/";

// ... (o código para 'totalSlides' e 'totalSlides2' pode ser mantido para os outros sliders)
// verificar tamanho da tela
let tamanho = screen.width;
let totalSlides;
let totalSlides2;
if (tamanho <= 767) {
  totalSlides = 2;
  totalSlides2 = 3;
} else if (tamanho <= 1023) {
  totalSlides = 3;
  totalSlides2 = 4;
} else {
  totalSlides = 4;
  totalSlides2 = 5;
}


function Home() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [heroMovie, setHeroMovie] = useState(null);

  const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  };

  useEffect(() => {
    const nowPlayingUrl = `${filmesURL}now_playing?language=pt-BR&${chaveAPI}`;
    const popularUrl = `${filmesURL}popular?language=pt-BR&${chaveAPI}`;
    const topRatedUrl = `${filmesURL}top_rated?language=pt-BR&${chaveAPI}`;

    const loadAllMovies = async () => {
      try {
        const [nowPlayingData, popularData, topRatedData] = await Promise.all([
          getMovies(nowPlayingUrl),
          getMovies(popularUrl),
          getMovies(topRatedUrl),
        ]);

        setNowPlaying(nowPlayingData);
        setPopular(popularData);
        setTopRated(topRatedData);

        if (popularData.length > 0) {
          setHeroMovie(popularData[0]);
        }
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };

    loadAllMovies();
  }, []);

  const truncateOverview = (text, maxLength) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, text.lastIndexOf(" ", maxLength)) + "...";
  };

  return (
    <section className="home-container">
      {/* --- HERO BANNER (Sem alteração) --- */}
      {heroMovie && (
        <div
          className="hero-banner"
          style={{
            backgroundImage: `url(${backdropURL}${heroMovie.backdrop_path})`,
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>{heroMovie.title}</h1>
            <p>{truncateOverview(heroMovie.overview, 150)}</p>
            <Link to={`/assistir/${heroMovie.id}`} className="hero-button">
              <FaPlay /> Assistir Agora
            </Link>
          </div>
        </div>
      )}

      {/* --- SEÇÕES DE FILMES --- */}
      <div className="movies-section">
        
        {/* Seção 1: Em Cartaz (Slider Padrão) */}
        <h2 className="section-title">Em Cartaz</h2>
        <div className="movies-slider">
          <Swiper
            slidesPerView={totalSlides}
            pagination={{ clickable: true }}
            navigation
            spaceBetween={15}
          >
            {nowPlaying.length > 0 &&
              nowPlaying.map((filme) => (
                <SwiperSlide key={filme.id}>
                  <Link className="card" to={`/assistir/${filme.id}`}>
                    <img
                      src={imgURL + filme.poster_path}
                      className="slideItem"
                      alt={filme.title}
                    />
                    <h3 className="card-title">{filme.title}</h3>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        {/* --- SEÇÃO 2: TOP 10 (NOVO LAYOUT) --- */}
        {/* Substituímos o slider "Populares" pelo novo componente */}
        <Top10Section movies={popular} />


        {/* Seção 3: Mais Bem Avaliados (Slider Padrão) */}
        <h2 className="section-title">Mais Bem Avaliados</h2>
        <div className="movies-slider">
          <Swiper
            slidesPerView={totalSlides2}
            pagination={{ clickable: true }}
            navigation
            spaceBetween={15}
          >
            {topRated.length > 0 &&
              topRated.map((filme) => (
                <SwiperSlide key={filme.id}>
                  <Link className="card" to={`/assistir/${filme.id}`}>
                    <img
                      src={imgURL + filme.poster_path}
                      className="slideItem"
                      alt={filme.title}
                    />
                    <h3 className="card-title">{filme.title}</h3>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Home;