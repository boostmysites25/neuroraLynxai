import React from "react";
import bannerImg from "../../assets/images/banner.webp";

const PageBanner = ({ title, desc }) => {
  return (
    <div
      className="w-full min-h-[55vh] h-fit py-[1rem] bg-cover bg-top relative flex items-center justify-center"
      style={{ 
        backgroundImage: `url(${bannerImg})`,
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.7)' /* Dark overlay for banner image */
      }}
    >
      <div className="absolute top-0 w-full h-full bg-gradient-to-b from-primary/80 to-transparent"></div>
      <div className="w-full translate-y-[20%] relative z-10">
        <div data-aos="fade-up" className="wrapper text-center">
          <h1 className="heading-1 text-primary_text">{title}</h1>
          {desc && <p className="desc mt-3 max-w-[55rem] mx-auto text-secondary_text">{desc}</p>}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
