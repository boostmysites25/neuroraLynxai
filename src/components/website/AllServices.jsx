import React, { useState } from "react";
import { allServices } from "../../constant";
import SubHeading from "../SubHeading";
import Drawer from "react-modern-drawer";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const AllServices = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(allServices[0]);

  const handleSelectServiceToShowDetail = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };
  return (
    <section className="bg-dark_surface">
      <div className="wrapper py-[5rem] flex flex-col gap-5 items-start sm:items-center">
        <SubHeading heading="Our Services" />
        <h2
          data-aos="fade-up"
          className="heading-2 max-w-[60rem] mx-auto text-start sm:text-center"
        >
          Our Services are Tailored to Your Needs
        </h2>
        <div
          data-aos="fade-up"
          className="mt-5 grid md:grid-cols-2 gap-6"
        >
          {allServices.map((service) => (
            <div key={service.id} className="bg-gradient-to-br from-secondary/30 via-primary/40 to-secondary/30 hover:bg-secondary group hover:text-white transition-all duration-300 rounded-lg p-5 flex text-center flex-col justify-between border border-dark_border hover:border-secondary">
              <div className="flex flex-col items-center">
                <div className="w-[6rem] h-[6rem] flex justify-center items-center relative">
                  <div className="absolute z-[1] top-0 w-0 group-hover:w-full h-full transition-all duration-300 bg-primary rounded-full"></div>
                  <service.icon className="z-[2] w-[4rem] h-[4rem] fill-secondary group-hover:fill-white" />
                </div>
                <h6 className="text-xl font-medium mt-3 text-primary_text group-hover:text-white">{service.title}</h6>
                <p className="desc mt-2 text-secondary_text group-hover:text-white">{service.description}</p>
              </div>
              {service.link && (
                <Link
                  to={service.link}
                  className="group-hover:bg-primary text-white font-medium cursor-pointer tracking-wide bg-secondary text-sm hover:shadow-dark_glow hover:-translate-y-1 shadow-large shadow-transparent rounded-lg px-4 py-3 min-w-[8rem] flex justify-center text-center transition-all duration-300 mt-5 w-fit mx-auto"
                >
                  Know More
                </Link>
              )}
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
          <div className="mb-3 flex items-center justify-end pr-[.7rem] py-[.4rem] bg-dark_surface">
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary_text text-[2.2rem]"
            >
              <X size={30} />
            </button>
          </div>
          <div className="wrapper flex flex-col gap-6 pb-[2rem] bg-dark_surface text-primary_text">
            <h1 className="heading-2">{selectedService.detailHeading}</h1>
            <div
              className="text-secondary_text"
              dangerouslySetInnerHTML={{
                __html: selectedService.detailContent,
              }}
            ></div>
          </div>
        </Drawer>
      </div>
    </section>
  );
};

export default AllServices;
