import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  return (
    <div className="p-8 w-full box-border">
      {favorites.length > 0 ? (
        <>
          <h2 className="mb-8 text-center text-4xl text-blue-500 shadow-lg">
            Your Favorites
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center p-16 bg-white/5 rounded-lg mx-auto max-w-lg">
          <h2 className="mb-4 text-3xl text-red-600">No Favorite Movies Yet</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Start adding movies to your favorites and they will appear here!
          </p>
        </div>
      )}
    </div>
  );
}

export default Favorites;
