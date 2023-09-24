import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import Logo from '../assets/images/ampais-logo.png';
import "../assets/vendor/aos/aos.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../style.css";

const Footer = () => {
  const footerConfig = {
    companyName: "Ampais Constructions",
    logo: Logo,
    description:
      "Consultancy, Contractor, Engineer, Planner, Estimator And General Order Supplier considering your specific needs. Trust, Quality & Convinience is our way we work and design @AmpaisConstruction",
    socialLinks: [
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
    ],
    groups: [],
    address: {
      line1: "Hitech City",
      city: "Hyderabad",
      pincode: "500081",
      state: "Telangana",
      country: "India",
    },
    phone: "9340524985, 9907814944, 9516873307",
    email: "ampaisconstruction@gmail.com",
  };
  
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <Link to="/" className="logo d-flex align-items-center">
                  <img src={footerConfig.logo} alt="" />
                  <span>{footerConfig.companyName}</span>
                </Link>
                <p>{footerConfig.description} <br />
                 For more information contact us on - <strong>ampaisconstruction@gmail.com</strong></p>
                <div className="social-links mt-3">
                  {footerConfig.socialLinks
                    .filter((socialLink) => socialLink.link)
                    .map((socialLink, index) => {
                      return (
                        <div key={"socialLink footer" + index}>
                          <Link
                            to={socialLink.link}
                            className={socialLink.label}
                          >
                            <i className={"bi bi-" + socialLink.label} />
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </div>
              {footerConfig.groups.map((group, index) => {
                return (
                  <div key={group.name + " " + index}>
                    <div
                      key={group.name + " " + index}
                      className="col-lg-2 col-6 footer-links"
                    >
                      <h4>{group.name}</h4>
                      <ul>
                        {group.links.map((link, index) => {
                          return (
                            <>
                              <li>
                                <i className="bi bi-chevron-right" />{" "}
                                <Link to={link.link}>{link.label}</Link>
                                {/* {link.link ? (
                                  <Link to={link.link}>{link.label}</Link>
                                ) : null} */}
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <p>
                <strong>Head Office:</strong> House No. 13, 118- Bansi Vihar Sagartal
                <br />
                 Gwalior Madhya Pradesh - 474008
                  <br />
                  <strong>Phone:</strong> {footerConfig.phone}
                  <br />
                  <strong>Email:</strong> {footerConfig.email}
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <span className="copyright">
            © Copyright{" "}
            <strong>
              <span>{footerConfig.companyName}</span>
            </strong>
            . All Rights Reserved
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
