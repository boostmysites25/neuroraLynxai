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
    <div className="relative bg-dark_surface py-16  cyberpunk-grid">
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

      {/* Digital particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
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

      {/* Scan line effect */}
      <div className="scan-line absolute inset-0 pointer-events-none"></div>

      {/* Neural network connections */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" className="opacity-10">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00a1ff" stopOpacity="0" />
              <stop offset="50%" stopColor="#00a1ff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#00a1ff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {[...Array(10)].map((_, i) => (
            <path
              key={i}
              d={`M${Math.random() * 100},${Math.random() * 100} Q${Math.random() * 100},${Math.random() * 100} ${Math.random() * 100},${Math.random() * 100}`}
              stroke="url(#neuralGradient)"
              strokeWidth="1"
              fill="none"
              className="neural-path"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10">
        <div className="flex justify-center">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-primary_text mb-6 holographic-text energy-field p-4 inline-block mx-auto">
            Our <span className="text-secondary " data-text="AI-Powered">AI-Powered</span> Excellence
          </h2>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center mb-8">
          <div className="relative w-64 h-1">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary to-transparent pulse-glow"></div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-secondary rounded-full quantum-dots"></div>
          </div>
        </div>

        <div
          ref={ref}
          className="max-w-7xl mx-auto w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4"
        >
          {/* Years of Experience */}
          <div
            data-aos="fade-up"
            className="group relative holographic-card p-6 rounded-xl border border-secondary/30 hover:shadow-dark_glow transition-all duration-300 ease-in-out"
          >
            {/* Scan line effect */}
            <div className="scan-line absolute inset-0 pointer-events-none"></div>

            {/* Futuristic corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-secondary"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-secondary"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-secondary"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary"></div>

            <div className="mx-auto bg-secondary text-primary w-10 h-10 rounded-full flex items-center justify-center shadow-dark_glow pulse-glow">
              <CircleOff size={20} className="animate-spin-slow" />
            </div>
            <div className="mt-4 flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-background/50 to-dark_surface/50 border-2 border-secondary flex items-center justify-center shadow-[0_0_15px_rgba(0,161,255,0.3)] neon-border">
                  {/* Circular progress indicator */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="46"
                      fill="none"
                      stroke="rgba(0, 161, 255, 0.2)"
                      strokeWidth="4"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="46"
                      fill="none"
                      stroke="#00a1ff"
                      strokeWidth="4"
                      strokeDasharray="289.02652413026095"
                      strokeDashoffset={289.02652413026095 * (1 - yrs / totalYrs)}
                      className="transform -rotate-90 origin-center transition-all duration-1000"
                    />
                  </svg>
                  <div className="text-4xl font-bold text-primary_text holographic-text">
                    {yrs}
                    <span className="text-secondary">+</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary_text holographic-text">
                Years of Experience
              </h3>
              <div className="h-1 w-16 bg-gradient-to-r from-transparent via-secondary to-transparent mt-2 group-hover:w-24 transition-all duration-300 pulse-glow"></div>
            </div>
          </div>

          {/* Expert Team */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="group relative holographic-card p-6 rounded-xl border border-secondary/30 hover:shadow-dark_glow transition-all duration-300 ease-in-out"
            style={{ animationDelay: '0.2s' }}
          >
            {/* Scan line effect */}
            <div className="scan-line absolute inset-0 pointer-events-none"></div>

            {/* Futuristic corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-secondary"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-secondary"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-secondary"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary"></div>

            <div className="mx-auto bg-secondary text-primary w-10 h-10 rounded-full flex items-center justify-center shadow-dark_glow pulse-glow">
              <Users size={20} className="animate-pulse" />
            </div>
            <div className="mt-4 flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-background/50 to-dark_surface/50 border-2 border-secondary flex items-center justify-center shadow-[0_0_15px_rgba(0,161,255,0.3)] neon-border">
                  {/* Circular progress indicator */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="46"
                      fill="none"
                      stroke="rgba(0, 161, 255, 0.2)"
                      strokeWidth="4"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="46"
                      fill="none"
                      stroke="#00a1ff"
                      strokeWidth="4"
                      strokeDasharray="289.02652413026095"
                      strokeDashoffset={289.02652413026095 * (1 - experts / totalExperts)}
                      className="transform -rotate-90 origin-center transition-all duration-1000"
                    />
                  </svg>
                  <div className="text-4xl font-bold text-primary_text holographic-text">
                    {experts}
                    <span className="text-secondary">+</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary_text holographic-text">
                Expert Team
              </h3>
              <div className="h-1 w-16 bg-gradient-to-r from-transparent via-secondary to-transparent mt-2 group-hover:w-24 transition-all duration-300 pulse-glow"></div>
            </div>
          </div>

          {/* Happy Clients */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="group relative holographic-card p-6 rounded-xl border border-secondary/30 hover:shadow-dark_glow transition-all duration-300 ease-in-out"
            style={{ animationDelay: '0.4s' }}
          >
            {/* Scan line effect */}
            <div className="scan-line absolute inset-0 pointer-events-none"></div>

            {/* Futuristic corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-secondary"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-secondary"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-secondary"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary"></div>

            <div className="mx-auto bg-secondary text-primary w-10 h-10 rounded-full flex items-center justify-center shadow-dark_glow pulse-glow">
              <Award size={20} className="animate-bounce-slow" />
            </div>
            <div className="mt-4 flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-background/50 to-dark_surface/50 border-2 border-secondary flex items-center justify-center shadow-[0_0_15px_rgba(0,161,255,0.3)] neon-border">
                  {/* Circular progress indicator */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="46"
                      fill="none"
                      stroke="rgba(0, 161, 255, 0.2)"
                      strokeWidth="4"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="46"
                      fill="none"
                      stroke="#00a1ff"
                      strokeWidth="4"
                      strokeDasharray="289.02652413026095"
                      strokeDashoffset={289.02652413026095 * (1 - clients / happlyClients)}
                      className="transform -rotate-90 origin-center transition-all duration-1000"
                    />
                  </svg>
                  <div className="text-4xl font-bold text-primary_text holographic-text">
                    {clients}
                    <span className="text-secondary">+</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary_text holographic-text">
                Happy Clients
              </h3>
              <div className="h-1 w-16 bg-gradient-to-r from-transparent via-secondary to-transparent mt-2 group-hover:w-24 transition-all duration-300 pulse-glow"></div>
            </div>
          </div>

          {/* Projects Completed */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="group relative holographic-card p-6 rounded-xl border border-secondary/30 hover:shadow-dark_glow transition-all duration-300 ease-in-out"
            style={{ animationDelay: '0.6s' }}
          >
            {/* Scan line effect */}
            <div className="scan-line absolute inset-0 pointer-events-none"></div>

            {/* Futuristic corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-secondary"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-secondary"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-secondary"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary"></div>

            <div className="mx-auto bg-secondary text-primary w-10 h-10 rounded-full flex items-center justify-center shadow-dark_glow pulse-glow">
              <CheckCircle size={20} className="animate-ping-slow" />
            </div>
            <div className="mt-4 flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-background/50 to-dark_surface/50 border-2 border-secondary flex items-center justify-center shadow-[0_0_15px_rgba(0,161,255,0.3)] neon-border">
                  {/* Circular progress indicator */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="46"
                      fill="none"
                      stroke="rgba(0, 161, 255, 0.2)"
                      strokeWidth="4"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="46"
                      fill="none"
                      stroke="#00a1ff"
                      strokeWidth="4"
                      strokeDasharray="289.02652413026095"
                      strokeDashoffset={289.02652413026095 * (1 - completedProjects / projectsDone)}
                      className="transform -rotate-90 origin-center transition-all duration-1000"
                    />
                  </svg>
                  <div className="text-4xl font-bold text-primary_text holographic-text">
                    {completedProjects}
                    <span className="text-secondary">+</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary_text holographic-text">
                Projects Completed
              </h3>
              <div className="h-1 w-16 bg-gradient-to-r from-transparent via-secondary to-transparent mt-2 group-hover:w-24 transition-all duration-300 pulse-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default TrustWorthySection;
