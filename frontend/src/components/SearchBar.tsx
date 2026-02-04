import { memo } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = memo(({ value, onChange }: SearchBarProps) => {
  return (
    <div className="search-bar">
      <div className="search-bar__container">
        <svg
          className="search-bar__icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          className="search-bar__input"
          placeholder="Поиск фильмов..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
});

SearchBar.displayName = 'SearchBar';

export default SearchBar;

