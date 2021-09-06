import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <a href="ligabank.com" className="header__logo">
          <svg width="28" height="25">
            <use xlinkHref="#logo"/>
          </svg>
          <span className="header__logo-text"> ЛИГА Банк</span>
        </a>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="ligabank.com" className="header__nav-link">
                  Услуги
              </a>
            </li>
            <li className="header__nav-item">
              <a href="ligabank.com" className="header__nav-link">
                  Рассчитать кредит
              </a>
            </li>
            <li className="header__nav-item">
              <a href="ligabank.com" className="header__nav-link header__nav-link--active">
                  Конвертер валют
              </a>
            </li>
            <li className="header__nav-item">
              <a href="ligabank.com" className="header__nav-link">
                  Контакты
              </a>
            </li>
            <li className="header__nav-item">
              <a href="ligabank.com" className="header__nav-link">
                  Задать вопрос
              </a>
            </li>
          </ul>
        </nav>          
        <a href="ligabank.com" className="header__enter">
          <svg width="20" height="22">
            <use xlinkHref="#enter"/>
          </svg>
          <span className="header__login">Войти в Интернет-банк</span>
        </a>
      </div>
    </header>
  );
};

export default Header;