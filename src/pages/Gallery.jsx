import React from "react";
import image1 from "./Home/assets/images/1.png";
import image10 from "./Home/assets/images/10.png";
import image11 from "./Home/assets/images/11.png";
import image12 from "./Home/assets/images/12.png";
import image13 from "./Home/assets/images/13.png";
import image14 from "./Home/assets/images/14.png";
import image15 from "./Home/assets/images/15.png";
import image16 from "./Home/assets/images/16.png";
import image18 from "./Home/assets/images/18.png";
import image19 from "./Home/assets/images/19.png";
import image2 from "./Home/assets/images/2.png";
import image20 from "./Home/assets/images/20.png";
import image21 from "./Home/assets/images/21.png";
import image22 from "./Home/assets/images/22.png";
import image3 from "./Home/assets/images/3.png";
import image4 from "./Home/assets/images/4.png";
import image5 from "./Home/assets/images/5.png";
import image6 from "./Home/assets/images/6.png";
import image7 from "./Home/assets/images/7.png";
import image8 from "./Home/assets/images/8.png";
import image9 from "./Home/assets/images/9.png";
import building1 from "./Home/assets/images/building1.png";
import building2 from "./Home/assets/images/building2.png";
import building3 from "./Home/assets/images/building3.png";
import building4 from "./Home/assets/images/building4.png";
import building5 from "./Home/assets/images/building5.png";
import building6 from "./Home/assets/images/building6.png";

const Gallery = () => {
  const images = [
    building1,
    building2,
    building3,
    building4,
    building5,
    building6,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    // image17,
    image18,
    image19,
    image20,
    image21,
    image22,
  ];
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Gallery
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {images.map((img, i) => {
              return (
                <div key={'gallary_image_'+i}>
                  <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="flex relative">
                      <img
                        alt="gallery"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        src={img}
                      />
                      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                          THE SUBTITLE
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          Shooting Stars
                        </h1>
                        <p className="leading-relaxed">
                          Photo booth fam kinfolk cold-pressed sriracha leggings
                          jianbing microdosing tousled waistcoat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
