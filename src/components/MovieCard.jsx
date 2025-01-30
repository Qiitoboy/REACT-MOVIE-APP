import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  return (
    <div className="relative rounded-lg overflow-hidden bg-gray-900 transition-transform duration-200 hover:translate-y-[-5px] flex flex-col h-full">
      {/* Movie Poster */}
      <div className="relative aspect-[2/3] w-full">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        {/* Movie Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 opacity-0 transition-opacity duration-200 flex flex-col justify-end p-4 hover:opacity-100">
          <button
            className={`absolute top-4 right-4 text-white text-2xl p-2 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 ${
              favorite ? "text-red-500" : ""
            } hover:bg-black/80`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>
      {/* Movie Info */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-lg text-gray-200 font-semibold">{movie.title}</h3>
        <p className="text-gray-400 text-sm">{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
