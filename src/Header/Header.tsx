import React from "react";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <nav className="header__nav">
            <a href="#aboutme" className="header__link">
            Обо мне
            </a>
            <a href="#projects" className="header__link">
            мои проекты
            </a>
            <a href="#skills" className="header__link">
            Навыки
            </a>
            <a href="#api" className="header__link">
            API
            </a>
            <a href="#contact" className="header__link">
            Связаться со мной
            </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
