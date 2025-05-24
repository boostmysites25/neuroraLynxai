import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { CircleOff, Users, Award, CheckCircle } from "lucide-react";

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
    triggerOnce: true,
    threshold: 0.1,
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
    <div className="relative bg-dark_surface py-16 overflow-hidden">
      {/* AI-inspired background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(0,161,255,0.4),transparent_40%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(0,161,255,0.4),transparent_40%)]"></div>
      </div>

      {/* Futuristic grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(0, 161, 255, 0.8) 25%, rgba(0, 161, 255, 0.8) 26%, transparent 27%, transparent 74%, rgba(0, 161, 255, 0.8) 75%, rgba(0, 161, 255, 0.8) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 161, 255, 0.8) 25%, rgba(0, 161, 255, 0.8) 26%, transparent 27%, transparent 74%, rgba(0, 161, 255, 0.8) 75%, rgba(0, 161, 255, 0.8) 76%, transparent 77%, transparent)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-primary_text mb-12">
          Our <span className="text-secondary">AI-Powered</span> Excellence
        </h2>

        <div
          ref={ref}
          className="max-w-7xl mx-auto w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4"
        >
          {/* Years of Experience */}
          <div
            data-aos="fade-up"
            className="group relative bg-gradient-to-br from-background to-dark_surface p-6 rounded-xl border border-dark_border hover:shadow-dark_glow transition-all duration-300 ease-in-out"
          >
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-secondary text-primary w-10 h-10 rounded-full flex items-center justify-center shadow-dark_glow">
              <CircleOff size={20} />
            </div>
            <div className="mt-4 flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-background to-dark_surface border-2 border-secondary flex items-center justify-center shadow-[0_0_15px_rgba(0,161,255,0.3)]">
                  <div className="text-4xl font-bold text-primary_text">
                    {yrs}
                    <span className="text-secondary">+</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary_text">
                Years of Experience
              </h3>
              <div className="h-1 w-16 bg-secondary mt-2 group-hover:w-24 transition-all duration-300"></div>
            </div>
          </div>

          {/* Expert Team */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="group relative bg-gradient-to-br from-background to-dark_surface p-6 rounded-xl border border-dark_border hover:shadow-dark_glow transition-all duration-300 ease-in-out"
          >
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-secondary text-primary w-10 h-10 rounded-full flex items-center justify-center shadow-dark_glow">
              <Users size={20} />
            </div>
            <div className="mt-4 flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-background to-dark_surface border-2 border-secondary flex items-center justify-center shadow-[0_0_15px_rgba(0,161,255,0.3)]">
                  <div className="text-4xl font-bold text-primary_text">
                    {experts}
                    <span className="text-secondary">+</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary_text">
                Expert Team
              </h3>
              <div className="h-1 w-16 bg-secondary mt-2 group-hover:w-24 transition-all duration-300"></div>
            </div>
          </div>

          {/* Happy Clients */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="group relative bg-gradient-to-br from-background to-dark_surface p-6 rounded-xl border border-dark_border hover:shadow-dark_glow transition-all duration-300 ease-in-out"
          >
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-secondary text-primary w-10 h-10 rounded-full flex items-center justify-center shadow-dark_glow">
              <Award size={20} />
            </div>
            <div className="mt-4 flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-background to-dark_surface border-2 border-secondary flex items-center justify-center shadow-[0_0_15px_rgba(0,161,255,0.3)]">
                  <div className="text-4xl font-bold text-primary_text">
                    {clients}
                    <span className="text-secondary">+</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary_text">
                Happy Clients
              </h3>
              <div className="h-1 w-16 bg-secondary mt-2 group-hover:w-24 transition-all duration-300"></div>
            </div>
          </div>

          {/* Projects Completed */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="group relative bg-gradient-to-br from-background to-dark_surface p-6 rounded-xl border border-dark_border hover:shadow-dark_glow transition-all duration-300 ease-in-out"
          >
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-secondary text-primary w-10 h-10 rounded-full flex items-center justify-center shadow-dark_glow">
              <CheckCircle size={20} />
            </div>
            <div className="mt-4 flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-background to-dark_surface border-2 border-secondary flex items-center justify-center shadow-[0_0_15px_rgba(0,161,255,0.3)]">
                  <div className="text-4xl font-bold text-primary_text">
                    {completedProjects}
                    <span className="text-secondary">+</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary_text">
                Projects Completed
              </h3>
              <div className="h-1 w-16 bg-secondary mt-2 group-hover:w-24 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default TrustWorthySection;
