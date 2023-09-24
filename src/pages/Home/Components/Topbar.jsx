import React from "react";
import { Link } from "react-router-dom";
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
      link: "",
    },
  ];

  return (
    <>
      {/* ======= Top Bar ======= */}
      <section id="topbar" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <Link to="mailto:ampaisconstruction@gmail.com">ampaisconstruction@gmail.com</Link>
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
