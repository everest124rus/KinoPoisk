import { memo, useMemo } from 'react';
import type { Movie } from '../types';
import MovieCard from './MovieCard';
import './MovieList.css';

interface MovieListProps {
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

const MovieList = memo(({ movies, onMovieClick }: MovieListProps) => {
  const handleMovieClick = useMemo(
    () => (movie: Movie) => () => onMovieClick(movie),
    [onMovieClick]
  );

  if (movies.length === 0) {
    return (
      <div className="movie-list__empty">
        <div className="movie-list__empty-content">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <p>Фильмы не найдены</p>
        </div>
      </div>
    );
  }

  return (
    <section className="movie-list">
      <div className="movie-list__grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={handleMovieClick(movie)}
          />
        ))}
      </div>
    </section>
  );
});

MovieList.displayName = 'MovieList';

export default MovieList;

