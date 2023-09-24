import React from "react";
import "../style.css";

const Services = () => {
  const services = [
    "Buildings ( Commercial & Residential )",
    "Sports Infrastructure For Schools & Universities and large projects",
    "Roads ( Drive Way, Asphalt Road, Concrete Road, Interlocking Tile Work Etc.)",
    "Landscaping & Horticulture Works (All Earth Work )",
    "Consultancy In All Civil Infrastructure",
    "Contractor",
    "Engineer",
    "Planner",
    "Basketball Court",
    "Football Court",
    "Multipurpose Court",
    "Children Play Area",
    "Squash Court",
    "Sports Equipments",
    "Cricket Grounds And Pitch",
    "Synthetic & Cinder Running Track & Jogging Track",
    "Tennis Courts ( Clay, Concrete & Asphalt Base )",
    "Badminton Court ( Concrete & Asphalt Base )",
    "Skating Rink ( Concrete & Asphalt Base { Kota Stone Flooring & Synthetic Flooring})",
    "EPDM Flooring",
    "Hockey Ground ( Natural Grass & Artificial Turf )",
  ];
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Our Services
            </h1>
            {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug.
            </p> */}
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {services.map((s, i) => {
              return <Service key={"service_" + i} service={s} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

const Service = ({ service }) => {
  return (
    <>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
            viewBox="0 0 24 24"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">{service}</span>
        </div>
      </div>
    </>
  );
};

export default Services;
