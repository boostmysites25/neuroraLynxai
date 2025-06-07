import React, { useState } from "react";
import { allServices } from "../../constant";
import { services } from "../../services";
import SubHeading from "../SubHeading";
import Drawer from "react-modern-drawer";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import serviceVid from "../../assets/vids/service.mp4";

const AllServices = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(allServices[0]);

  const handleSelectServiceToShowDetail = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };
  return (
    <section className="bg-dark_surface relative overflow-hidden cyberpunk-grid">
      {/* AI-inspired background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(37,97,230,0.4),transparent_40%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(37,97,230,0.4),transparent_40%)]"></div>
      </div>

      {/* Digital particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-secondary rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatUpDown ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Neural network connections */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" className="opacity-10">
          <defs>
            <linearGradient id="serviceNeuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2561E6" stopOpacity="0" />
              <stop offset="50%" stopColor="#2561E6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#2561E6" stopOpacity="0" />
            </linearGradient>
          </defs>

          {[...Array(8)].map((_, i) => (
            <path
              key={i}
              d={`M${Math.random() * 100},${Math.random() * 100} Q${Math.random() * 100},${Math.random() * 100} ${Math.random() * 100},${Math.random() * 100}`}
              stroke="url(#serviceNeuralGradient)"
              strokeWidth="1"
              fill="none"
              className="neural-path"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </svg>
      </div>

      <div className="wrapper py-[5rem] flex flex-col gap-5 items-start sm:items-center relative z-10">
        <SubHeading heading="Our Services" />
        <h2
          data-aos="fade-up"
          className="heading-2 max-w-[60rem] mx-auto text-start sm:text-center holographic-text energy-field p-4"
        >
          Our Services are <span className="text-secondary" data-text="Tailored">Tailored</span> to Your Needs
        </h2>

        <div
          data-aos="fade-up"
          className="mt-5 grid md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className="holographic-card group hover:text-white transition-all duration-300 rounded-lg p-5 flex text-center flex-col justify-between border border-secondary/30 hover:border-secondary relative overflow-hidden"
            >
              {/* Video background with ReactPlayer */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <div
                  className="w-full h-full opacity-10"
                  style={{
                    transform: index % 3 === 0 ? 'scale(1.1)' : index % 3 === 1 ? 'scale(1.1) rotate(180deg)' : 'scale(1.2)'
                  }}
                >
                  <ReactPlayer
                    url={serviceVid}
                    playing={true}
                    loop={true}
                    muted={true}
                    width="100%"
                    height="100%"
                    playsinline={true}
                    config={{
                      file: {
                        attributes: {
                          style: {
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%'
                          }
                        }
                      }
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-primary/50 to-background/80 group-hover:bg-secondary/80 transition-all duration-300"></div>
              </div>

              {/* Scan line effect */}
              <div className="scan-line absolute inset-0 pointer-events-none"></div>

              {/* Futuristic corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-secondary"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-secondary"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-secondary"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary"></div>

              <div className="flex flex-col items-center relative z-10">
                <div className="w-[6rem] h-[6rem] flex justify-center items-center relative pulse-glow rounded-full backdrop-blur-sm">
                  <div className="absolute z-[1] top-0 w-0 group-hover:w-full h-full transition-all duration-300 bg-primary rounded-full"></div>
                  <service.icon className="z-[2] w-[4rem] h-[4rem] fill-secondary group-hover:fill-white" />
                </div>
                <h6 className="text-xl font-medium mt-3 text-primary_text group-hover:text-white holographic-text">{service.title}</h6>
                <p className="desc mt-2 text-secondary_text group-hover:text-white backdrop-blur-sm bg-background/30 p-2 rounded-lg">{service.shortDescription}</p>
              </div>
              <Link
                to={`/services/${service.slug}`}
                className="group-hover:bg-primary text-white font-medium cursor-pointer tracking-wide bg-secondary text-sm hover:shadow-dark_glow hover:-translate-y-1 shadow-large shadow-transparent rounded-lg px-4 py-3 min-w-[8rem] flex justify-center text-center transition-all duration-300 mt-5 w-fit mx-auto relative z-10"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
        <Drawer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          direction="top"
          className="p-4 z-10 w-screen"
          lockBackgroundScroll
        >
          <div className="mb-3 flex items-center justify-end pr-[.7rem] py-[.4rem] bg-dark_surface relative">
            <div className="absolute inset-0 cyberpunk-grid opacity-20"></div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary_text text-[2.2rem] relative z-10 pulse-glow rounded-full p-2"
            >
              <X size={30} />
            </button>
          </div>
          <div className="wrapper flex flex-col gap-6 pb-[2rem] bg-dark_surface text-primary_text relative">
            {/* Background effects */}
            <div className="absolute inset-0 cyberpunk-grid opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-primary/50 to-background/80"></div>

            {/* Content */}
            <div className="relative z-10">
              <h1 className="heading-2 holographic-text">{selectedService.detailHeading}</h1>

              {/* Decorative line */}
              <div className="relative w-64 h-1 my-4">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary to-transparent pulse-glow"></div>
              </div>

              <div
                className="text-secondary_text backdrop-blur-sm bg-background/30 p-4 rounded-lg border border-secondary/30"
                dangerouslySetInnerHTML={{
                  __html: selectedService.detailContent,
                }}
              ></div>
            </div>

            {/* Futuristic corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-secondary"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-secondary"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-secondary"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-secondary"></div>
          </div>
        </Drawer>
      </div>
    </section>
  );
};

export default AllServices;
