import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';


const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const isNowPlayingTrailer = useSelector((store) => store.movies?.isNowPlayingTrailer);
  const nowPlayingTrailer = useSelector((store) => store.movies?.nowPlayingTrailer);

  if (!Array.isArray(movies) || movies.length === 0) {
    return null;
  }
  const mainMovie = movies[0];
  console.log("MainContainer - mainMovie: ", mainMovie);

  return (
    <div className='pt-[30%] md:pt-0 bg-black'>
      <VideoBackground movieId={ !isNowPlayingTrailer ? mainMovie?.id : nowPlayingTrailer} />
      {!isNowPlayingTrailer && <VideoTitle
        title={mainMovie?.original_title}
        overview={mainMovie?.overview}
      />}
    </div>
  );
};

export default MainContainer;