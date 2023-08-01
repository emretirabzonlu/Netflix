import { useEffect } from "react";
import Hero from "../components/Hero";
import MovieCategories from "../components/MovieCategories";
import { useDispatch, useSelector } from "react-redux"
import { getFilms, getGenres } from "../app/actions/movieAction";

const MainPage = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.movieReducer);
  

  useEffect(() => {
    //POPULAR FILM GET 
    dispatch(getFilms());

    //CATEGORY FILM GET 
    dispatch(getGenres());
  }, []);

  return (
    <div className="bg-dark text-light">
      {/* Popular Films */}
      <Hero />

      {/* Film List */}
      {state.genres.slice(0,10).map((genre) => (
        <MovieCategories
         key={genre.id}
         title = {genre.name}
         fetchUrl = {`/discover/movie?with_genres=${genre.id}`}
         
         />
        ))}

    </div>
  );
};

export default MainPage