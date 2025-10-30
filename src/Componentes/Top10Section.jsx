import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

// Importe o CSS da Home, pois usaremos os estilos de Swiper de lá
import "../pages/Home.css"; 

const imgURL = import.meta.env.VITE_IMG;

// Este componente recebe a lista de filmes populares
function Top10Section({ movies }) {

  // Ajusta o número de slides visíveis para a seção Top 10
  let tamanho = screen.width;
  let slidesVisiveis;
  if (tamanho <= 767) {
    slidesVisiveis = 1.5;
  } else if (tamanho <= 1023) {
    slidesVisiveis = 2.5;
  } else {
    slidesVisiveis = 3.5;
  }

  return (
    <div className="top10-section">
      <h2 className="section-title">Top 10 Populares</h2>
      <div className="movies-slider top10-slider">
        <Swiper
          slidesPerView={slidesVisiveis} // Usa a nova contagem de slides
          pagination={{ clickable: true }}
          navigation
          spaceBetween={10} // Menor espaço para o design do Top 10
        >
          {movies &&
            movies.slice(0, 10).map((filme, index) => ( // Pega apenas os 10 primeiros
              <SwiperSlide key={filme.id} style={{ width: "auto" }}> 
                <Link className="top10-card" to={`/assistir/${filme.id}`}>
                  <span className="top10-number">{index + 1}</span>
                  <div className="top10-poster-wrapper">
                    <img
                      src={imgURL + filme.poster_path}
                      className="top10-poster"
                      alt={filme.title}
                    />
                    {/* Efeito de hover com play */}
                    <div className="top10-play-overlay">
                      <FaPlay />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Top10Section;