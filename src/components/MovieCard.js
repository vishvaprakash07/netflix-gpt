import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = (props) => {
  const { movie } = props;
  if(!movie?.poster_path) return null;

  return (
    <div className="w-48 pr-4">
        <img alt="Movie Poster" 
         src={IMG_CDN_URL + movie?.poster_path}/>
    </div>
  )
}

export default MovieCard