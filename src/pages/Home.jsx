import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.error("Error fetching popular movies:", err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim() || loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.error("Error searching movies:", err);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 w-full box-border">
      <form onSubmit={handleSearch} className="max-w-xl mx-auto flex gap-4 px-4 mb-8">
        <input
          type="text"
          placeholder="Search for movies..."
          className="flex-1 px-4 py-3 rounded bg-gray-800 text-white text-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="px-6 py-3 bg-red-600 text-white rounded-md font-medium transition hover:bg-red-700"
        >
          Search
        </button>
      </form>

      {error && <div className="text-center text-red-500 text-lg">{error}</div>}

      {loading ? (
        <div className="text-center text-white text-lg">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {movies.length > 0 ? (
            movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
          ) : (
            <div className="text-center col-span-full text-gray-400 text-lg">
              No movies found. Try searching something else!
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
