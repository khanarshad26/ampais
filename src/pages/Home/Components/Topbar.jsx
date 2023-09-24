import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import "../assets/vendor/aos/aos.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../style.css";

const Topbar = () => {
  const socialLinks = [
    {
      label: "facebook",
      link: "",
    },
    {
      label: "twitter",
      link: "",
    },
    {
      label: "instagram",
      link: "",
    },
    {
      label: "linkedin",
      link: "https://www.linkedin.com/company/gimble/",
    },
  ];

  return (
    <>
      {/* ======= Top Bar ======= */}
      <section id="topbar" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <Link to="mailto:contact@gimble.co.in">contact@gimble.co.in</Link>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <span>+91 91980 73027</span>
            </i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            {socialLinks
              .filter((socialLink) => socialLink.link)
              .map((socialLink, index) => {
                return (
                  <>
                    <Link
                      key={"socialLink topbar " + index}
                      to={socialLink.link}
                      className={socialLink.label}
                    >
                      <i className={"bi bi-" + socialLink.label} />
                    </Link>
                  </>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Topbar;
