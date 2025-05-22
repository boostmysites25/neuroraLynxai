import React, { lazy } from "react";
import vid from "../assets/vids/banner.mp4";
import SubHeading from "../components/SubHeading";
import { appDevelopmentServices, webDevelopmentServices } from "../constant";
import TrustWorthySection from "../components/TrustWorthySection";
import appDevAboutImg from "../assets/images/landingpage/app-dev-about.jpg";
import webDevAboutImg from "../assets/images/landingpage/web-dev-about.jpg";
import ReactPlayer from "react-player";

const LandingHeader = lazy(() =>
  import("../components/landingPages/LandingHeader")
);
const LandingFooter = lazy(() =>
  import("../components/landingPages/LandingFooter")
);
const ContactForm = lazy(() =>
  import("../components/landingPages/ContactForm")
);
const Portfolio = lazy(() => import("../components/Portfolio"));
const ConnectWithUs = lazy(() => import("../components/ConnectWithUs"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WhyChooseUs = lazy(() => import("../components/WhyChooseUs"));

const LandingPage = ({ page }) => {
  const isWebLanding = Boolean(page === "web-development");
  let services;
  if (page === "web-development") {
    // banner = webBanner;
    services = webDevelopmentServices;
  } else {
    // banner = appBanner;
    services = appDevelopmentServices;
  }

  return (
    <>
      <LandingHeader />
      <section
        id="banner"
        className="h-screen banner relative text-primary_text"
      >
        <div className="absolute top-0 w-full h-full bg-gradient-to-br from-background via-primary/40 to-background">
          <div
            data-aos="fade-up"
            className="wrapper text-center flex flex-col gap-5 justify-center items-center h-full relative z-10"
          >
            <p className="sub-heading">
              Welcome to{" "}
              <span className="text-primary font-semibold block sm:inline">
                NeuroraLynx AI
              </span>
            </p>
            <h1 className="heading-1 whitespace-pre-line capitalize max-w-6xl mx-auto">
              {isWebLanding
                ? "Crafting Robust and Scalable Websites"
                : "Bringing Your Ideas to Life"}
            </h1>
            <p className="sub-heading max-w-6xl mx-auto">
              {isWebLanding
                ? "Your website is often the first interaction potential customers have with your brand. Our web development team focuses on building responsive, secure, and scalable websites tailored to your business needs."
                : "In a mobile-first world, having a functional and engaging app is crucial. Our app development services encompass everything from ideation to deployment, ensuring your app is intuitive, fast, and aligned with your business objectives."}
            </p>
          </div>
        </div>
        <ReactPlayer
          url={vid}
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
                },
              },
            },
          }}
        />
      </section>
      <section id="about" className="text-primary_text wrapper pt-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={isWebLanding ? webDevAboutImg : appDevAboutImg}
              className="object-cover h-full rounded-lg"
              alt="about us"
              width="600"
              height="400"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading
                heading={isWebLanding ? "Web Development" : "App Development"}
              />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={isWebLanding ? webDevAboutImg : appDevAboutImg}
                  className="object-cover h-full rounded-lg w-full"
                  alt="about"
                  width="200"
                  height="200"
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                {isWebLanding
                  ? "Websites That Capture Attention & Convert Visitors"
                  : "Apps That Engage & Delight Users"}
              </h2>
              <p className="desc">
                {isWebLanding
                  ? "In a mobile-first world, having a functional and engaging app is crucial. Our app development services encompass everything from ideation to deployment, ensuring your app is intuitive, fast, and aligned with your business objectives. \n We create fast, flexible, and secure websites that do more than just look good—they convert. Our sites are built to perform, optimized for search, and responsive across all platforms."
                  : "We create fast, flexible, and secure websites that do more than just look good—they convert. Our sites are built to perform, optimized for search, and responsive across all platforms. \n From concept to code, we bring your app ideas to life. Whether it's iOS, Android, or cross-platform, our developers focus on usability, speed, and seamless integration with your existing ecosystem."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="wrapper py-[5rem] flex flex-col gap-5 items-center"
      >
        <SubHeading
          heading={
            isWebLanding
              ? "Web Development Services"
              : "App Development Services"
          }
        />
        <h2
          data-aos="fade-up"
          className="heading-2 max-w-[60rem] mx-auto text-center"
        >
          Enhancing Brands with Engaging Experiences
        </h2>
        <div className="mt-5 grid sm:grid-cols-2 max-w-6xl gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gradient-to-br from-secondary/30 via-primary/40 to-secondary/30 hover:bg-secondary group hover:text-white transition-all duration-300 rounded-lg p-5 flex text-center flex-col justify-between border border-dark_border hover:border-secondary"
            >
              <div className="flex flex-col items-center">
                <div className="w-[6rem] h-[6rem] flex justify-center items-center relative">
                  <div className="absolute z-[1] top-0 w-0 group-hover:w-full h-full transition-all duration-300 bg-primary rounded-full"></div>
                  <service.icon className="z-[2] w-[4rem] h-[4rem] fill-secondary group-hover:fill-white" />
                </div>
                <h6 className="text-xl font-medium mt-3 text-primary_text group-hover:text-white">
                  {service.title}
                </h6>
                <p className="desc mt-2 text-secondary_text group-hover:text-white">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <TrustWorthySection />
      <Portfolio page={page} />
      <WhyChooseUs />
      <ConnectWithUs />
      <Testimonials />
      <JoinHappyCustomers />
      <ContactForm />
      <LandingFooter />
    </>
  );
};

export default LandingPage;
