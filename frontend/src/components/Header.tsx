import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const categories = [
    'Все фильмы',
    'Фантастика',
    'Драма',
    'Боевик',
    'Криминал',
    'Триллер',
    'Комедия',
    'Ужасы',
    'Романтика',
    'Биография'
  ];

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <h1 className="header__logo-text">Каталог фильмов</h1>
        </div>

        <nav className="header__nav">
          <button className="header__nav-button">
            Новинки
          </button>

          <div 
            className="header__dropdown"
            onMouseEnter={() => setIsCategoriesOpen(true)}
            onMouseLeave={() => setIsCategoriesOpen(false)}
          >
            <button className="header__nav-button header__nav-button--dropdown">
              Категории фильмов
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className={`header__dropdown-icon ${isCategoriesOpen ? 'header__dropdown-icon--open' : ''}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            
            {isCategoriesOpen && (
              <div className="header__dropdown-menu">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="header__dropdown-item"
                    onClick={() => setIsCategoriesOpen(false)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="header__nav-button">
            Избранное
          </button>

          <button className="header__nav-button">
            О нас
          </button>
        </nav>

        <div className="header__auth">
          <button className="header__auth-button header__auth-button--secondary">
            Войти
          </button>
          <button className="header__auth-button header__auth-button--primary">
            Зарегистрироваться
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;


