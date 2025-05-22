import React from "react";
import vid from "../assets/vids/banner.mp4";
import aboutImg from "../assets/images/aboutus-img3.webp";
import { Link } from "react-router-dom";
import SubHeading from "../components/SubHeading";
import { ReactComponent as Icon1 } from "../assets/svgs/services/Web Development.svg";
import { ReactComponent as Icon2 } from "../assets/svgs/services/App Development.svg";
import { ReactComponent as Icon3 } from "../assets/svgs/services/Machine Learning Solutions.svg";
import WorkProcess from "../components/WorkProcess";
import ReactPlayer from "react-player";
import aiRobotImg from "../assets/images/ai-robot.png";

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

const Home = () => {
  return (
    <>
      <WebsiteHeader />
      <section className="h-screen banner relative text-primary_text">
        <div className="hidden md:flex absolute right-1/2 translate-x-1/2 md:translate-x-0 md:right-0 bottom-0 justify-end translate-y-0 z-[1]">
          <img
            loading="lazy"
            src={aiRobotImg}
            width="800"
            height="800"
            className="object-contain object-center h-full w-full md:w-[40%] opacity-40 md:opacity-100"
            alt=""
          />
        </div>
        <div className="absolute top-0 w-full h-full bg-gradient-to-br from-background via-primary/40 to-background flex justify-between">
          <div
            data-aos="fade-up"
            className="wrapper flex items-center h-full relative z-10"
          >
            <div className="flex flex-col gap-4 md:w-[65%]">
              <p className="sub-heading">
                Welcome to{" "}
                <span className="text-primary font-semibold block sm:inline">
                  NeuroraLynx AI
                </span>
              </p>
              <h1 className="heading-1 capitalize">
                Empowering Your Digital Presence with Cutting-Edge Solutions
              </h1>
              <p className="sub-heading max-w-6xl">
                At NeuroraLynx AI, we specialize in creating innovative and
                user-centric digital solutions that not only look great but also
                drive results.
              </p>
            </div>
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
      <div
        data-aos="fade-up"
        className="md:-mt-[7rem] py-[2rem] relative z-10 max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-5"
      >
        <div className="bg-primary rounded-lg backdrop-blur-sm p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon1
              width="50"
              height="50"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="!text-lg leading-tight !font-medium desc">
              Web Development
            </p>
          </div>
          <p className="desc">
            Your website is often the first interaction potential customers have
            with your brand. Our web development team focuses on building
            responsive, secure, and scalable websites tailored to your business
            needs.
          </p>
        </div>
        <div className="bg-primary rounded-lg backdrop-blur-sm p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon2
              width="50"
              height="50"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="!text-lg leading-tight !font-medium desc">
              Mobile App Development
            </p>
          </div>
          <p className="desc">
            In a mobile-first world, having a functional and engaging app is
            crucial. Our app development services encompass everything from
            ideation to deployment, ensuring your app is intuitive, fast, and
            aligned with your business objectives.
          </p>
        </div>
        <div className="bg-primary rounded-lg backdrop-blur-sm p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon3
              width="50"
              height="50"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="!text-lg leading-tight !font-medium desc">
              AI Development
            </p>
          </div>
          <p className="desc">
            Artificial Intelligence is revolutionizing industries, and we're at
            the forefront of this transformation. Our AI development solutions
            help businesses automate processes, gain insights from data, and
            enhance customer experiences.
          </p>
        </div>
      </div>
      <section className="">
        <div className="wrapper py-[3rem]">
          <div className="grid lg:grid-cols-2 gap-10 mt-7">
            <div data-aos="fade-up" className="hidden lg:flex flex-col">
              <img
                loading="lazy"
                src={aboutImg}
                width="600"
                height="400"
                className="object-cover rounded-lg w-full object-center"
                alt=""
              />
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
                  <img
                    loading="lazy"
                    src={aboutImg}
                    width="200"
                    height="200"
                    className="object-cover h-full object-center rounded-lg w-full"
                    alt=""
                  />
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
                <Link to="/about-us" className="primary-btn">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AllServices />
      <WorkProcess />
      <OurValue />
      <Portfolio />
      <WhyChooseUs />
      <TrustWorthySection />
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default Home;
