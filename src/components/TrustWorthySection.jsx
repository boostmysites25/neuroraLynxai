import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const TrustWorthySection = React.memo(() => {
  const totalYrs = 3;
  const projectsDone = 100;
  const totalExperts = 15;
  const happlyClients = 80;

  const [yrs, setYrs] = useState(0);
  const [completedProjects, setCompletedProjects] = useState(0);
  const [experts, setExperts] = useState(0);
  const [clients, setClients] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      // Animate Years of Experience
      const yrsInterval = setInterval(() => {
        setYrs((prev) => Math.min(prev + 1, totalYrs));
      }, 100);

      // Animate Experts
      const expertsInterval = setInterval(() => {
        setExperts((prev) => Math.min(prev + 1, totalExperts));
      }, 100);

      // Animate Clients
      const clientsInterval = setInterval(() => {
        setClients((prev) => Math.min(prev + 1, happlyClients));
      }, 10);

      // Animate On Time Completion Percentage
      const completionInterval = setInterval(() => {
        setCompletedProjects((prev) => Math.min(prev + 1, projectsDone));
      }, 10);

      // Clear intervals when animation reaches target values
      return () => {
        clearInterval(yrsInterval);
        clearInterval(expertsInterval);
        clearInterval(clientsInterval);
        clearInterval(completionInterval);
      };
    }
  }, [inView]);
  return (
    <div className="bg-gradient-to-b text-secondary from-primary to-primary py-[2rem] border-y border-secondary/30">
      <div
        ref={ref}
        className="w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-5 p-[2rem]"
      >
        <div
          data-aos="fade-up"
          className="w-full flex flex-col items-center justify-center"
        >
          <h3 className="heading-1 text-secondary">{yrs}+</h3>
          <p className="font-medium mt-1 text-xl">Years of Experience</p>
        </div>
        <div
          data-aos="fade-up"
          className="w-full flex flex-col items-center justify-center"
        >
          <h3 className="heading-1 text-secondary">{experts}+</h3>
          <p className="font-medium mt-1 text-xl">Expert Team</p>
        </div>
        <div
          data-aos="fade-up"
          className="w-full flex flex-col items-center justify-center"
        >
          <h3 className="heading-1 text-secondary">{clients}+</h3>
          <p className="font-medium mt-1 text-xl">Happy Clients</p>
        </div>
        <div
          data-aos="fade-up"
          className="w-full flex flex-col items-center justify-center"
        >
          <h3 className="heading-1 text-secondary">{completedProjects}+</h3>
          <p className="font-medium mt-1 text-xl">Projects Completed</p>
        </div>
      </div>
    </div>
  );
});

export default TrustWorthySection;
