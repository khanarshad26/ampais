import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/style.css";
import Logo from '../assets/images/Ampais-heading.png';
import "../assets/vendor/aos/aos.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../style.css";

const Header = () => {
  const location = useLocation();  

  const isActive = (pathname) => {
    return location.pathname === pathname ? " active" : "";
  }
  
  return (
    <>
      {/* ======= Header ======= */}
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo flex-x">
          <Link to="/" className="logo me-auto d-flex flex-row align-items-center">
            <img src={Logo} alt="" className="img-fluid" />
            {/* <div className="heading">Ampaise</div> */}
          </Link>
          </h1>
          {/* <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link className={"nav-link scrollto" + isActive('/')} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={"nav-link scrollto" + isActive('/about')} to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className={"nav-link scrollto" + isActive('/services')} to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className={"nav-link scrollto" + isActive('/contact')} to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav> */}
        </div>
      </header>
    </>
  );
};

export default Header;
