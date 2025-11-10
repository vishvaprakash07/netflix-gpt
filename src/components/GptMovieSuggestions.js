import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import MovieList from './MovieList';
import { API_OPTIONS } from '../utils/constants';

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector(store => store.gpt);
  const [enrichedMovieResults, setEnrichedMovieResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieResults || movieResults.length === 0) {
      return;
    }

    const enrichMoviesWithTrailerInfo = async () => {
      setLoading(true);

      try {
        // Process each movie list (each search result)
        const enrichedResults = await Promise.all(
          movieResults.map(async (result) => {
            if (!result?.results) return result;

            // For each movie in the results, check if trailer exists
            const moviesWithTrailerInfo = await Promise.all(
              result.results.map(async (movie) => {
                try {
                  const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${movie.id}/videos`,
                    API_OPTIONS
                  );
                  const json = await response.json();

                  console.log(`Movie: ${movie.title}, Videos:`, json);

                  // Check if trailer exists
                  const filterData = json.results.filter((video) => video.type === "Trailer");
                  const trailer = filterData.length ? filterData[0] : json.results[0];

                  const hasTrailer = trailer?.length !== 0 && trailer !== undefined && trailer !== null ? true : false;

                  // Return movie object with trailerAvailable property
                  return {
                    ...movie,
                    trailerAvailable: hasTrailer
                  };
                } catch (error) {
                  console.error(`Error fetching trailer for ${movie.title}:`, error);
                  // If error, assume no trailer
                  return {
                    ...movie,
                    trailerAvailable: false
                  };
                }
              })
            );

            // Return the result with enriched movies
            return {
              ...result,
              results: moviesWithTrailerInfo
            };
          })
        );

        setEnrichedMovieResults(enrichedResults);
        console.log("Enriched Movie Results:", enrichedResults);
      } catch (error) {
        console.error("Error enriching movies with trailer info:", error);
        setEnrichedMovieResults(movieResults); // Fallback to original
      } finally {
        setLoading(false);
      }
    };

    enrichMoviesWithTrailerInfo();
  }, [movieResults]);

  if (!movieNames) return null;

  // Show loading state while checking trailers
  if (loading && enrichedMovieResults.length === 0) {
    return (
      <div className="p-4 m-4 bg-black bg-opacity-90">
        <div className='m-4 flex'>
          <div className="w-48 h-64 mx-4 bg-gray-500"></div>
          <div className="w-48 h-64 mx-4 bg-gray-500"></div>
          <div className="w-48 h-64 mx-4 bg-gray-500"></div>
          <div className="w-48 h-64 mx-4 bg-gray-500"></div>
          <div className="w-48 h-64 mx-4 bg-gray-500"></div>
        </div>
        <div className='m-4 flex'>
          <div className="w-48 h-64 mx-4 bg-gray-500"></div>
          <div className="w-48 h-64 mx-4 bg-gray-500"></div>
          <div className="w-48 h-64 mx-4 bg-gray-500"></div>
          <div className="w-48 h-64 mx-4 bg-gray-500"></div>
          <div className="w-48 h-64 mx-4 bg-gray-500"></div>
        </div>
        <div className='m-4 flex'>
          <div className="w-48 h-64 mx-4 bg-gray-500"></div>
          <div className="w-48 h-64 mx-4 bg-gray-500"></div>
          <div className="w-48 h-64 mx-4 bg-gray-500"></div>
          <div className="w-48 h-64 mx-4 bg-gray-500"></div>
          <div className="w-48 h-64 mx-4 bg-gray-500"></div>
        </div>
      </div>
    );
  }

  // Use enriched results if available, otherwise use original
  const resultsToShow = enrichedMovieResults.length > 0 ? enrichedMovieResults : movieResults;

  return (
    <div className="p-4 m-4 bg-black bg-opacity-90">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList 
            key={movieName} 
            title={movieName} 
            movies={resultsToShow[index]?.results || []} 
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
