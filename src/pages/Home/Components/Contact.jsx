import axios from "axios";
import React, { useRef } from "react";
import "../assets/css/style.css";
import "../assets/vendor/aos/aos.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../style.css";

const Contact = () => {
  const email = useRef();
  const name = useRef();
  const subject = useRef();
  const body = useRef();

  const submitHandler = async(e) => {
    e.preventDefault();
    const userEmail = {
      name : name.current.value,
      email : email.current.value,
      subject : subject.current.value,
      body : body.current.value,
      source : 'Ampais',
    }
    try {
      name.current.value = null;
      email.current.value = null;
      subject.current.value = null;
      body.current.value = null;
      await axios.post("https://my-apps-email-service.herokuapp.com/api/email", userEmail);
   } catch (err) {
      console.log(err);
   }
 }

  return (
    <>
      <section id="contact" className="contact section-space">
        <div className="container">
          <header className="section-header">
            {/* <h2>Contact</h2> */}
            <p>Contact Us</p>
          </header>
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="row gy-4">
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-geo-alt" />
                    <h3>Address</h3>
                    <p>
                      Hitech city, Hyderabad, 500081
                      <br />
                      Telangana, India
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-telephone" />
                    <h3>Call Us</h3>
                    <p>
                      +91 91980 73027
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-envelope" />
                    <h3>Email Us</h3>
                    <p>
                      contact@gimble.co.in
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-clock" />
                    <h3>Open Hours</h3>
                    <p>
                      Monday - Friday
                      <br />
                      9:00AM - 6:00PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form
                method="post"
                className="php-email-form"
                onSubmit={submitHandler}
              >
                <div className="row">
                  <div className="col form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      ref={name}
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      ref={email}
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    ref={subject}
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    ref={body}
                    placeholder="Message"
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
