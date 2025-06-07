import React, { lazy, Suspense, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { services } from "../services";
import SubHeading from "../components/SubHeading";
import FuturisticButton from "../components/FuturisticButton";
import SectionDivider from "../components/SectionDivider";

// Lazy load components
const ReactPlayer = lazy(() => import("react-player/lazy"));
const WorkProcess = lazy(() => import("../components/WorkProcess"));

// Lazy load SVG components
const Icon1 = lazy(() => import("../assets/svgs/services/Web Development.svg").then(module => module.ReactComponent));
const Icon2 = lazy(() => import("../assets/svgs/services/App Development.svg").then(module => module.ReactComponent));
const Icon3 = lazy(() => import("../assets/svgs/services/Machine Learning Solutions.svg").then(module => module.ReactComponent));

// Lazy load media assets
const mediaAssets = {
  banner: () => import("../assets/vids/banner.mp4").then(module => module.default),
  service: () => import("../assets/vids/service.mp4").then(module => module.default),
  about: () => import("../assets/images/aboutus-img3.webp").then(module => module.default),
  aiRobot: () => import("../assets/images/ai-robot.png").then(module => module.default)
};

const WebsiteHeader = React.lazy(() =>
  import("../components/website/WebsiteHeader")
);
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Portfolio = React.lazy(() => import("../components/Portfolio"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const AllServices = React.lazy(() =>
  import("../components/website/AllServices")
);
const OurValue = React.lazy(() => import("../components/website/OurValue"));
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

// Loading component for Suspense fallback
const ComponentLoader = () => (
  <div className="flex items-center justify-center h-32">
    <div className="w-8 h-8 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Home = () => {
  const navigate = useNavigate();
  const [media, setMedia] = useState({
    banner: null,
    service: null,
    about: null,
    aiRobot: null
  });
  const [loading, setLoading] = useState(true);

  // Load media assets on component mount
  useEffect(() => {
    const loadMediaAssets = async () => {
      try {
        const [banner, service, about, aiRobot] = await Promise.all([
          mediaAssets.banner(),
          mediaAssets.service(),
          mediaAssets.about(),
          mediaAssets.aiRobot()
        ]);
        
        setMedia({
          banner,
          service,
          about,
          aiRobot
        });
        setLoading(false);
      } catch (error) {
        console.error("Failed to load media assets:", error);
        setLoading(false);
      }
    };

    loadMediaAssets();
  }, []);

  return (
    <>
      <Suspense fallback={<ComponentLoader />}>
        <WebsiteHeader />
      </Suspense>
      <section className="h-screen banner relative text-primary_text overflow-hidden cyberpunk-grid">
        {/* Digital rain effect */}
        <div className="digital-rain">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="rain-drop"
              style={{
                left: `${i * 7}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${8 + (i % 3)}s`,
              }}
            >
              {Array.from({ length: 30 }, () =>
                Math.random() > 0.5 ? '1' : '0'
              ).join('')}
            </div>
          ))}
        </div>

        {/* Plasma effect overlay */}
        <div className="absolute inset-0 plasma-effect"></div>

        <div className="relative h-full w-full">
          <div className="hidden lg:flex absolute right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-0 bottom-0 justify-end translate-y-0 z-[1]">
            <div className="relative">
              {media.aiRobot ? (
                <img
                  loading="lazy"
                  src={media.aiRobot}
                  width="800"
                  height="800"
                  className="object-contain object-center h-full w-full lg:w-[40vw] opacity-40 lg:opacity-100"
                  alt="AI Robot"
                />
              ) : (
                <div className="w-full h-full bg-dark_surface flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              {/* Quantum dots effect */}
              <div className="absolute top-1/4 left-1/4 quantum-dots w-4 h-4"></div>
              <div className="absolute top-3/4 right-1/4 quantum-dots w-4 h-4" style={{ animationDelay: '1s' }}></div>
              {/* Morphing shapes */}
              <div className="absolute top-1/2 left-0 morphing-shape"></div>
              <div className="absolute bottom-1/4 right-0 morphing-shape" style={{ animationDelay: '3s' }}></div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 w-full h-full bg-gradient-to-br from-background/80 via-primary/20 to-background/80 flex justify-between">
          {/* Matrix rain effect */}
          <div className="matrix-rain">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="matrix-column"
                style={{
                  left: `${i * 10}%`,
                  animationDelay: `${i * 0.5}s`,
                }}
              >
                {Array.from({ length: 20 }, () =>
                  String.fromCharCode(0x30A0 + Math.random() * 96)
                ).join('')}
              </div>
            ))}
          </div>

          <div
            data-aos="fade-up"
            className="wrapper flex items-center h-full relative z-10"
          >
            <div className="flex flex-col gap-4 lg:w-[65%]">
              <p className="sub-heading">
                Welcome to{" "}
                <span className="holographic-text font-semibold block sm:inline" data-text="NeuroraLynx AI">
                  NeuroraLynx AI
                </span>
              </p>
              <h1 className="heading-1 capitalize">
                <span className="">
                  Empowering Your Digital Presence with Cutting-Edge Solutions
                </span>
              </h1>
              <p className="sub-heading max-w-6xl">
                At NeuroraLynx AI, we specialize in creating innovative and
                user-centric digital solutions that not only look great but also
                drive results.
              </p>

              {/* Futuristic CTA buttons */}
              {/* <div className="flex gap-4 mt-6">
                <FuturisticButton onClick={() => navigate('/services')} variant="primary">
                  Explore Solutions
                </FuturisticButton>
                <FuturisticButton onClick={() => navigate('/contact-us')} variant="neon">
                  Get Started
                </FuturisticButton>
              </div> */}
            </div>
          </div>
        </div>
        <Suspense fallback={
          <div className="w-full h-full bg-dark_surface flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          {media.banner && (
            <ReactPlayer
              url={media.banner}
              playing
              muted
              playsinline
              loop
              pip={false}
              width="100%"
              height="100%"
              config={{
                file: {
                  attributes: {
                    style: {
                      objectFit: "cover",
                    }
                  }
                }
              }}
            />
          )}
        </Suspense>
      </section>
      <div
        data-aos="fade-up"
        className="md:-mt-[7rem] py-[2rem] relative z-10 max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-7"
      >
        <div className="holographic-card rounded-lg p-5 floating-element glow-effect relative overflow-hidden">


          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="pulse-glow rounded-full p-2 bg-background/50 backdrop-blur-sm">
                <Suspense fallback={<div className="w-[4rem] h-[4rem] bg-secondary/20 rounded-full"></div>}>
                  <Icon1
                    width="50"
                    height="50"
                    className="w-[4rem] h-[4rem] fill-secondary"
                  />
                </Suspense>
              </div>
              <p className="!text-lg leading-tight !font-medium desc holographic-text">
                Web Development
              </p>
            </div>
            <p className="desc backdrop-blur-sm bg-background/30 p-2 rounded-lg">
              Your website is often the first interaction potential customers have
              with your brand. Our web development team focuses on building
              responsive, secure, and scalable websites tailored to your business
              needs.
            </p>

          </div>

          <div className="scan-line absolute inset-0 pointer-events-none"></div>

          {/* Futuristic corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-secondary"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-secondary"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-secondary"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary"></div>
        </div>
        <div className="holographic-card rounded-lg p-5 floating-element glow-effect relative overflow-hidden" style={{ animationDelay: '0.5s' }}>


          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="pulse-glow rounded-full p-2 bg-background/50 backdrop-blur-sm">
                <Suspense fallback={<div className="w-[4rem] h-[4rem] bg-secondary/20 rounded-full"></div>}>
                  <Icon2
                    width="50"
                    height="50"
                    className="w-[4rem] h-[4rem] fill-secondary"
                  />
                </Suspense>
              </div>
              <p className="!text-lg leading-tight !font-medium desc holographic-text">
                Mobile App Development
              </p>
            </div>
            <p className="desc backdrop-blur-sm bg-background/30 p-2 rounded-lg">
              In a mobile-first world, having a functional and engaging app is
              crucial. Our app development services encompass everything from
              ideation to deployment, ensuring your app is intuitive, fast, and
              aligned with your business objectives.
            </p>
          </div>

          <div className="scan-line absolute inset-0 pointer-events-none"></div>

          {/* Futuristic corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-secondary"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-secondary"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-secondary"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary"></div>
        </div>
        <div className="holographic-card rounded-lg p-5 floating-element glow-effect relative overflow-hidden" style={{ animationDelay: '1s' }}>


          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="pulse-glow rounded-full p-2 bg-background/50 backdrop-blur-sm">
                <Suspense fallback={<div className="w-[4rem] h-[4rem] bg-secondary/20 rounded-full"></div>}>
                  <Icon3
                    width="50"
                    height="50"
                    className="w-[4rem] h-[4rem] fill-secondary"
                  />
                </Suspense>
              </div>
              <p className="!text-lg leading-tight !font-medium desc holographic-text">
                AI Development
              </p>
            </div>
            <p className="desc backdrop-blur-sm bg-background/30 p-2 rounded-lg">
              Artificial Intelligence is revolutionizing industries, and we're at
              the forefront of this transformation. Our AI development solutions
              help businesses automate processes, gain insights from data, and
              enhance customer experiences.
            </p>
          </div>

          <div className="scan-line absolute inset-0 pointer-events-none"></div>

          {/* Futuristic corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-secondary"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-secondary"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-secondary"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary"></div>
        </div>
      </div>
      <section className="">
        <div className="wrapper py-[3rem]">
          <div className="grid lg:grid-cols-2 gap-10 mt-7">
            <div data-aos="fade-up" className="hidden lg:flex flex-col">
              {media.about ? (
                <img
                  loading="lazy"
                  src={media.about}
                  width="600"
                  height="400"
                  className="object-cover rounded-lg w-full object-center"
                  alt="About Us"
                />
              ) : (
                <div className="w-full h-[400px] bg-dark_surface flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
            <div
              data-aos="fade-up"
              className="flex h-full items-start flex-col gap-7"
            >
              <div className="flex flex-col items-start gap-5 text-start">
                <SubHeading heading="About Us" />
                <div
                  data-aos="fade-up"
                  className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
                >
                  {media.about ? (
                    <img
                      loading="lazy"
                      src={media.about}
                      width="200"
                      height="200"
                      className="object-cover h-full object-center rounded-lg w-full"
                      alt="About Us"
                    />
                  ) : (
                    <div className="w-full h-full bg-dark_surface flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>
                <h2 className="heading-2 max-w-[60rem]">
                  Shaping Digital Futures with Purposeful Technology
                </h2>
                <p className="desc">
                  At{" "}
                  <span className="font-medium text-secondary">
                    NeuroraLynx AI
                  </span>
                  , we don’t just build software—we create digital ecosystems
                  that elevate brands and fuel growth. Our expertise lies in
                  delivering smart, scalable solutions that help businesses stay
                  agile in a fast-changing world. From startups to enterprises,
                  we tailor every line of code and design detail to suit your
                  vision.
                </p>
              </div>
              <div className="w-fit mt-4 justify-start">
                <Link to="/about-us">
                  <FuturisticButton variant="primary">
                    Know More
                  </FuturisticButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<ComponentLoader />}>
        <AllServices />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <WorkProcess />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <OurValue />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <WhyChooseUs />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <TrustWorthySection />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <JoinHappyCustomers />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <LeadForm />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <WebsiteFooter />
      </Suspense>
    </>
  );
};

export default Home;
