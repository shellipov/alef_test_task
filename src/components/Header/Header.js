import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./style.css";

const Header = () => {
  
  return (
    <header className="header">
      <div className="header_logo">
        <img src={logo} alt="alef_logo" />
      </div>
      <nav className="header_nav">
        <Link className="header_link" to="/">
          Форма
        </Link>
        <Link className="header_link" to="preview">
          Превью
        </Link>
      </nav>
    </header>
  );
};

export default Header;
