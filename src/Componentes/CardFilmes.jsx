import { Link } from "react-router-dom"

const imageURL = import.meta.env.VITE_IMG

function CardFilmes({filmes}) {

    return (
      <>
                {/* <div className="filme-card">
                    <h1 className="title">
                        {filmes.title}
                    </h1>

                    <div className="poster"> 
                        <img src={imageURL + filmes.poster_path} alt={filmes.title} />
                    </div>
                </div> */}
    {console.log(filmes)}
      </>
    )
  }
  
  export default CardFilmes
  