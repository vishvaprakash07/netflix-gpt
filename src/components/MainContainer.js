import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';


const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!Array.isArray(movies) || movies.length === 0) {
    return null;
  }
  const mainMovie = movies[2];

  return (
    <div className='pt-[30%] md:pt-0 bg-black'>
      <VideoBackground movieId={mainMovie?.id} />
      <VideoTitle
        title={mainMovie?.original_title}
        overview={mainMovie?.overview}
      />
    </div>
  );
};

export default MainContainer;