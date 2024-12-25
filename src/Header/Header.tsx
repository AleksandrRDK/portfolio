import React, { useState } from "react";
import "./Header.scss";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      {/* ПК-версия */}
      <div className="header__wrapper header__desktop">
        <nav className="header__nav">
          <a href="#aboutme" className="header__link">Обо мне</a>
          <a href="#projects" className="header__link">Мои проекты</a>
          <a href="#skills" className="header__link">Навыки</a>
          <a href="#api" className="header__link">API</a>
          <a href="#contact" className="header__link">Связаться со мной</a>
        </nav>
      </div>

      {/* Мобильная версия */}
      <div className="header__mobile">
        <div className="header__burger" onClick={toggleMenu}>
          <span className={isMenuOpen ? "header__burger-line open" : "header__burger-line"}></span>
          <span className={isMenuOpen ? "header__burger-line open" : "header__burger-line"}></span>
          <span className={isMenuOpen ? "header__burger-line open" : "header__burger-line"}></span>
        </div>
        <nav className={`header__mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <a href="#aboutme" className="header__link" onClick={toggleMenu}>Обо мне</a>
          <a href="#projects" className="header__link" onClick={toggleMenu}>Мои проекты</a>
          <a href="#skills" className="header__link" onClick={toggleMenu}>Навыки</a>
          <a href="#api" className="header__link" onClick={toggleMenu}>API</a>
          <a href="#contact" className="header__link" onClick={toggleMenu}>Связаться со мной</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
