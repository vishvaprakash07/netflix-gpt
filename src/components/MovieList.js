import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const { title, movies } = props;

  return (
    <div className="px-6">
        <h1 className="text-3xl text-white py-4">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
            <div className="flex">
                {
                    movies?.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                };
            </div>
        </div>
    </div>
  )
}

export default MovieList;