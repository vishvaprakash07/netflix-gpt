import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  const mainMovie = Array.isArray(movies) && movies.length > 0 ? movies[0] : null;
  useMovieTrailer(mainMovie?.id);
  console.log("MainContainer - mainMovie: ", mainMovie);

  return (
    <div className="pt-[30%] md:pt-0 bg-black">
      <VideoBackground movieId={mainMovie?.id} />
      <VideoTitle
        title={mainMovie?.original_title}
        overview={mainMovie?.overview}
      />
    </div>
  );
};

export default MainContainer;
