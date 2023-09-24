import React from "react";
import "../assets/css/style.css";
import "../assets/vendor/aos/aos.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../style.css";

const Hero = () => {
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <h1>
            Welcome to <span>Ampais</span>
          </h1>
          <h2>
            Our pledge to society to create the smart, green and sustainable infrastucture.
          </h2>
        </div>
      </section>
    </>
  );
};

export default Hero;
