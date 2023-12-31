import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";



export const baseImgUrl = "https://image.tmdb.org/t/p/original/";

const Hero = () => {
const navigate = useNavigate();

  const state = useSelector(state => state.movieReducer);

  const index = Math.round(Math.random() * 19)

  const film = state.popularFilms[index];

  
  
  return (
    <div className="row bg-dark text-light p-4">
      <div className="col-md-6 mb-3 gap-3 d-flex flex-column justify-content-center ">
        <h1>{film?.title}</h1>
        <p className="text-warning">IMDB : {film?.vote_average}</p>
        <p>{film?.overview}</p>
        <div className="d-flex gap-3 justify-content-center">
          <button onClick={()=>navigate(`/movie/${film.id}`)} className="btn btn-danger">Şimdi İzle</button>
          <button className="btn btn-info">Listeye Ekle</button>
        </div>
      </div>

      <div className="col-md-6 d-flex align-items-center">
        <img className="img-fluid rounded" src={`${baseImgUrl}${film?.backdrop_path}`} />
      </div>
    </div>
  )
}

export default Hero