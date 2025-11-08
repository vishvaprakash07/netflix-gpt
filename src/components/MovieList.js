import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = (props) => {
  const { title, movies } = props;

  return (
    <div className="px-6">
        <h1 className="text-lg md:text-3xl text-white py-4">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
            <div className="flex">
                {
                    movies?.map((movie) => (
                        <Link to={`/browse/${movie.id}`} key={movie.id}><MovieCard movie={movie} /></Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default MovieList;