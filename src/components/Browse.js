import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { setNowPlayingTrailer } from "../utils/movieSlice";

const Browse = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    movieId ? dispatch(setNowPlayingTrailer({isNowPlayingTrailer: true, nowPlayingTrailer: movieId})) :
    dispatch(setNowPlayingTrailer({isNowPlayingTrailer: false, nowPlayingTrailer: null}));
  },[movieId, dispatch]);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const isGptSearchVisible = useSelector((store) => store.gpt?.showGptSearch);

  return (
    <div>
      <Header />
      {isGptSearchVisible ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;