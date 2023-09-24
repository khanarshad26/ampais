import React from "react";
import "../assets/css/style.css";
import ad2 from '../assets/images/app.jpeg';
import ad3 from '../assets/images/online-presence.jpeg';
import ad1 from '../assets/images/website.jpeg';
import "../assets/vendor/aos/aos.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../style.css";

const Ads = () => {
  const ads = [
    {
      heading: 'Build what you believe in',
      description: 'One idea can change the world. But every such idea needs to be communicated to the people who need it the most. Let us help you make your idea come to life.',
      image: ad1,
      alignment: 'left',
    },
    {
      heading: 'Show off your strengths',
      description: 'Focus on what your strengths are and put them out for the world to see while we will help you resolve any technical issue related to IT infrastructure.',
      image: ad2,
      alignment: 'right',
    },
    {
      heading: 'Grow your online presence',
      description: 'Boost traffic and increase engagement with built-in SEO tools, Facebook ads, email marketing and social posts.',
      image: ad3,
      alignment: 'left',
    },
  ];
  return (
    <>
      <div id="Ads">
        {
          ads.map((ad, index) => {
            return <Ad key={"ads "+index} heading={ad.heading} description={ad.description} image={ad.image} alignment={ad.alignment} />
          })
        }
      </div>
    </>
  );
};

const Ad = ({heading, description, image, alignment}) => {
  return (
    <>
        <section className="text-gray-600 body-font section-space">
          <div className="container mx-auto flex px-2 py-3 md:flex-row flex-col items-center">           {/* style={{flexDirection: alignment === 'left' ? "row-reverse" : "row"}} */}
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                style={{ width: "80%" }}
                src={image}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {heading}
              </h1>
              <p className="mb-8 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </section>
    </>
  );
}

export default Ads;
