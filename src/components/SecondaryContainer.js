import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeNowPlayingTrailer } from "../utils/movieSlice";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);
  const isNowPlayingTrailer = useSelector((store) => store.movies?.isNowPlayingTrailer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoBack = () => {
     window.history.back();
  }

  const handleGoHome = () => {
    dispatch(removeNowPlayingTrailer());
     navigate("/browse");
  }

  return (
    <div className=" bg-black">
      {isNowPlayingTrailer && (
        <div>
          <button
            onClick={handleGoBack}
            className="text-white bg-red-600 text-sm mt-10 px-6 py-2 ml-16 rounded-md"
          >
            Back
          </button>
          <button
            onClick={handleGoHome}
            className="text-black bg-white text-sm mt-10 px-6 py-2 ml-8 rounded-md"
          >
            Home
          </button>
        </div>
      )}
      <div
        className={`mt-0 ${
          isNowPlayingTrailer ? "" : "md:-mt-40"
        } relative pl-2 md:pl-12 z-20`}
      >
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Upcoming"} movies={upcomingMovies} />
        <MovieList title={"Top Rated"} movies={topRatedMovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
