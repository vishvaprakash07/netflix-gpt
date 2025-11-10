import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = (props) => {
  const { movie } = props;

  if (!movie?.poster_path) return null;

  return (
    <div className={`w-36 md:w-48 pr-4 ${movie?.trailerAvailable === false ? "" : "cursor-pointer"} transform transition-transform duration-200 hover:scale-105 relative`}>
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + movie?.poster_path}
        className="rounded-lg shadow-lg"
      />
      
      {/* Trailer Badge - Show only if trailerAvailable is true */}
      {movie.trailerAvailable && (
        <div className="absolute top-2 right-2 bg-black text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg flex items-center gap-1">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-3 w-3" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
          </svg>
          <span>TRAILER</span>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
