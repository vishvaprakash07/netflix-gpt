import MovieCard from "./MovieCard";
import { useDispatch } from "react-redux";
import { setNowPlayingTrailer } from "../utils/movieSlice";


const MovieList = (props) => {
  const { title, movies } = props;

  const dispatch = useDispatch();

  const handleMovieClick = (movie) => {
    if(movie?.trailerAvailable === false) return;
    dispatch(setNowPlayingTrailer({isNowPlayingTrailer: true, nowPlayingTrailerId: movie.id}));
  }

  return (
    <div className="px-6">
        <h1 className="text-lg md:text-3xl text-white py-4">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
            <div className="flex">
                {
                    movies?.map((movie) => (
                        <div onClick={() => handleMovieClick(movie)} key={movie.id}>
                            <MovieCard movie={movie} />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default MovieList;