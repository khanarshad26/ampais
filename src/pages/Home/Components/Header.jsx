import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import Logo from '../assets/images/Ampais-heading.png';
import "../style.css";

const Header = () => { 
  return (
    <>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo flex-x">
          <Link to="/" className="logo me-auto d-flex flex-row align-items-center">
            <img src={Logo} alt="" className="img-fluid" />
          </Link>
          </h1>
        </div>
      </header>
    </>
  );
};

export default Header;
