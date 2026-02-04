import { memo, useEffect } from 'react';
import type { Movie } from '../types';
import './MovieDetail.css';

interface MovieDetailProps {
  movie: Movie;
  onClose: () => void;
}

const MovieDetail = memo(({ movie, onClose }: MovieDetailProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="movie-detail__overlay" onClick={onClose}>
      <div
        className="movie-detail__container"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="movie-detail__close" onClick={onClose} aria-label="Закрыть">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="movie-detail__content">
          <div className="movie-detail__poster-wrapper">
            <img
              src={movie.poster}
              alt={movie.title}
              className="movie-detail__poster"
            />
          </div>

          <div className="movie-detail__info">
            <header className="movie-detail__header">
              <div className="movie-detail__title-wrapper">
                <h1 className="movie-detail__title">{movie.title}</h1>
                <div className="movie-detail__rating">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>{movie.rating}</span>
                </div>
              </div>
            </header>

            <div className="movie-detail__meta">
              <div className="movie-detail__meta-item">
                <span className="movie-detail__meta-label">Год:</span>
                <span className="movie-detail__meta-value">{movie.year}</span>
              </div>
              <div className="movie-detail__meta-item">
                <span className="movie-detail__meta-label">Длительность:</span>
                <span className="movie-detail__meta-value">{movie.duration}</span>
              </div>
              <div className="movie-detail__meta-item">
                <span className="movie-detail__meta-label">Режиссер:</span>
                <span className="movie-detail__meta-value">{movie.director}</span>
              </div>
            </div>

            <div className="movie-detail__genres">
              {movie.genre.map((g) => (
                <span key={g} className="movie-detail__genre">
                  {g}
                </span>
              ))}
            </div>

            <div className="movie-detail__section">
              <h2 className="movie-detail__section-title">Описание</h2>
              <p className="movie-detail__description">{movie.description}</p>
            </div>

            <div className="movie-detail__section">
              <h2 className="movie-detail__section-title">В ролях</h2>
              <div className="movie-detail__actors">
                {movie.actors.map((actor, index) => (
                  <span key={index} className="movie-detail__actor">
                    {actor}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

MovieDetail.displayName = 'MovieDetail';

export default MovieDetail;

