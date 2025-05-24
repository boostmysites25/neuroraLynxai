import React from "react";
import SubHeading from "./SubHeading";
import { appPortfolio, webPortfolio } from "../constant";
import { Link } from "react-router-dom";

const Portfolio = ({ page }) => {
  let portfolioList;

  if (page === "web-development") {
    portfolioList = webPortfolio;
  } else if (page === "app-development") {
    portfolioList = appPortfolio;
  } else {
    portfolioList = webPortfolio.slice(0, 3).concat(appPortfolio.slice(0, 3));
  }
  return (
    <div className="py-[5rem]">
      <div className="wrapper flex flex-col items-start sm:items-center gap-5">
        <SubHeading heading="Our Portfolio" />
        <h2
          data-aos="fade-up"
          className="heading-2 max-w-[60rem] mx-auto text-start sm:text-center"
        >
          Work Speaks Volumes: Discover Our Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto mt-5">
          {portfolioList.map(({ img, id, title, link }) => (
            <div
              data-aos="fade-up"
              key={id}
              className="p-3 group rounded-xl aspect-square hover:shadow-large hover:shadow-accent/50 transition-all duration-300"
            >
              <div className="overflow-hidden relative h-full rounded-xl">
                <div className="absolute z-[5] top-0 w-full h-full bg-gradient-to-b from-transparent to-primary/20"></div>
                <img
                  loading="lazy"
                  src={img}
                  width="200"
                  height="200"
                  className={`-z-10 h-full w-full object-cover group-hover:scale-110 transition-all duration-200 rounded-xl`}
                  alt={title}
                />
                <Link to={link} target="_blank">
                  <h4 className="link text-xl z-20 absolute p-3 bottom-0 left-0 w-full bg-primary text-center text-white">
                    {title}
                  </h4>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
