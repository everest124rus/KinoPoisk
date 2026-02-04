import { useState, useEffect, useCallback } from 'react';
import type { Movie } from './types';
import { fetchMovies } from './api';
import { useDebounce } from './hooks/useDebounce';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import './App.css';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchMovies();
        setMovies(data);
        setFilteredMovies(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ошибка загрузки фильмов');
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  useEffect(() => {
    if (!debouncedSearchQuery.trim()) {
      setFilteredMovies(movies);
      return;
    }

    const query = debouncedSearchQuery.toLowerCase().trim();
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query)
    );
    setFilteredMovies(filtered);
  }, [debouncedSearchQuery, movies]);

  const handleMovieClick = useCallback((movie: Movie) => {
    setSelectedMovie(movie);
  }, []);

  const handleCloseDetail = useCallback(() => {
    setSelectedMovie(null);
  }, []);

  const handleSearchChange = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  return (
    <div className="app">
      <Header />
      
      <div className="app__content">
        {loading ? (
          <div className="app__loading">
            <div className="app__spinner"></div>
            <p>Загрузка фильмов...</p>
          </div>
        ) : error ? (
          <div className="app__error">
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <h2>Ошибка загрузки</h2>
            <p>{error}</p>
            <button
              className="app__retry-button"
              onClick={() => window.location.reload()}
            >
              Попробовать снова
            </button>
          </div>
        ) : (
          <>
            <div className="app__header">
              <SearchBar value={searchQuery} onChange={handleSearchChange} />
            </div>

            <main className="app__main">
              <MovieList movies={filteredMovies} onMovieClick={handleMovieClick} />
            </main>
          </>
        )}
      </div>

      {selectedMovie && (
        <MovieDetail movie={selectedMovie} onClose={handleCloseDetail} />
      )}
    </div>
  );
}

export default App;
