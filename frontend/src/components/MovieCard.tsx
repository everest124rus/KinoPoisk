import { memo, useState } from 'react';
import type { Movie } from '../types';
import './MovieCard.css';

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

const MovieCard = memo(({ movie, onClick }: MovieCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <article className="movie-card" onClick={onClick}>
      <div className="movie-card__poster-wrapper">
        {!imageLoaded && (
          <div className="movie-card__placeholder">
            <div className="movie-card__placeholder-text">{movie.title}</div>
          </div>
        )}
        {!imageError && (
          <img
            src={movie.poster}
            alt={movie.title}
            className={`movie-card__poster ${imageLoaded ? 'movie-card__poster--loaded' : ''}`}
            loading="lazy"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}
        {imageError && (
          <div className="movie-card__error-placeholder">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="9" y1="9" x2="15" y2="15" />
              <line x1="15" y1="9" x2="9" y2="15" />
            </svg>
            <span>{movie.title}</span>
          </div>
        )}
        <div className="movie-card__overlay">
          <div className="movie-card__rating">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>{movie.rating}</span>
          </div>
        </div>
      </div>
      <div className="movie-card__content">
        <h2 className="movie-card__title">{movie.title}</h2>
        <div className="movie-card__meta">
          <span className="movie-card__year">{movie.year}</span>
          <span className="movie-card__duration">{movie.duration}</span>
        </div>
        <div className="movie-card__genres">
          {movie.genre.map((g) => (
            <span key={g} className="movie-card__genre">
              {g}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
});

MovieCard.displayName = 'MovieCard';

export default MovieCard;
