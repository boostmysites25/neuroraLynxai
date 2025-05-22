import React from "react";
import WebsiteHeader from "../components/website/WebsiteHeader";
import PageBanner from "../components/website/PageBanner";
import SubHeading from "../components/SubHeading";
import aboutImg1 from "../assets/images/aboutus-img1.webp";
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const AboutUs = () => {
  return (
    <>
      <WebsiteHeader />
      <PageBanner title="About Us" />
      <section className="text-primary_text wrapper py-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={aboutImg1}
              className="object-cover h-full rounded-lg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5">
              <SubHeading heading="About Us" />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={aboutImg1}
                  className="object-cover h-full rounded-lg w-full"
                  alt=""
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Igniting brands that spark movements.
              </h2>
              <p className="desc">
                At{" "}
                <span className="font-semibold text-secondary">
                  NeuroraLynx AI
                </span>
                , we don’t just build software—we create digital ecosystems that
                elevate brands and fuel growth. Our expertise lies in delivering
                smart, scalable solutions that help businesses stay agile in a
                fast-changing world. From startups to enterprises, we tailor
                every line of code and design detail to suit your vision. <br />
                <br />
                We specialize in: <br />
                <ul className="list-disc pl-5 pt-3 space-y-4">
                  <li className="desc">
                    <strong>Web Development</strong> <br />
                    We create fast, flexible, and secure websites that do more
                    than just look good—they convert. Our sites are built to
                    perform, optimized for search, and responsive across all
                    platforms.
                  </li>
                  <li className="desc">
                    <strong>App Development</strong> <br />
                    From concept to code, we bring your app ideas to life.
                    Whether it's iOS, Android, or cross-platform, our developers
                    focus on usability, speed, and seamless integration with
                    your existing ecosystem.
                  </li>
                  <li className="desc">
                    <strong>AI Development Solutions</strong> <br />
                    We empower your business with intelligent systems—automating
                    tasks, predicting trends, and enhancing customer
                    experiences. Our AI solutions bring clarity to complexity
                    and results to strategy.
                  </li>
                  <li className="desc">
                    <strong>UX/UI Design</strong> <br />
                    Design is where tech meets emotion. We blend beauty with
                    function to create digital experiences that connect with
                    users. Every screen is designed with purpose—visually
                    striking, intuitive, and user-first.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        {/* <div className="mt-[3rem]">
          <h2 data-aos="fade-up" className="heading-2 text-center">
            Our Visionary Goals
          </h2>
          <div className="flex flex-col-reverse md:grid grid-cols-2 gap-10 mt-7">
            <div
              data-aos="fade-up"
              className="flex h-full items-center md:items-start flex-col gap-7"
            >
              <p className="desc">
                Our diverse expertise spans multiple domains, enabling
                businesses of all sizes to harness cutting-edge technologies
                across web development, mobile app solutions, game development,
                UI/UX design, and blockchain. <br />
                <br /> Whether you're building a dynamic online presence,
                creating immersive gaming experiences, designing intuitive user
                interfaces, or leveraging blockchain for secure and transparent
                operations, we provide tailored solutions to transform your
                ideas into impactful digital realities. <br />
                <br /> Our focus on innovation and data-driven strategies
                ensures that every service we deliver unlocks new growth
                opportunities and maximizes your business potential.
              </p>
            </div>
            <div data-aos="fade-up" className="h-full">
              <img
                loading="lazy"
                src={aboutImg2}
                className="object-cover w-full max-h-[20rem] rounded-lg"
                alt=""
              />
            </div>
          </div>
        </div> */}
      </section>
      {/* <section className="wrapper py-[3rem]">
        <div className="grid md:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="h-full">
            <img
              loading="lazy"
              src={aboutImg3}
              className="object-cover h-full w-full max-h-[20rem] rounded-lg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex items-center lg:items-start flex-col gap-7"
          >
            <p className="desc">
              Our mission is to drive innovation across industries with
              solutions rooted in integrity and responsibility. We believe that
              true innovation goes beyond cutting-edge technology—it must be
              guided by principles that build trust, accountability, and
              long-term value. Through our expertise in web and mobile
              development, game creation, UI/UX design, and blockchain
              technology, we aim to catalyze transformative change for
              businesses. By leveraging these advanced tools and frameworks, we
              tackle unique challenges, unlock growth opportunities, and deliver
              solutions that drive efficiency while maintaining the highest
              ethical standards.
            </p>
          </div>
        </div>
      </section> */}
      <WhyChooseUs />
      <TrustWorthySection />
      {/* <section className="text-primary_text wrapper py-[3rem]">
        <div className="grid md:grid-cols-2 gap-10 mt-7">
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5">
              <SubHeading heading="Our Expert Team" />
              <h2 className="heading-2">Meet Our Team</h2>
              <p className="desc">
                At <b>NeuroraLynx AI</b>, our team is at the heart of every
                solution we provide. Combining expertise, innovation, and a deep
                commitment to client success, our professionals are dedicated to
                transforming complex challenges into seamless experiences. From
                developers and designers to strategists and support specialists,
                each team member brings unique skills that drive our mission
                forward. Get to know the people powering the next generation of
                digital solutions.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="h-full w-full">
            <div
              className={`h-full grid gap-3 grid-cols-4
            `}
            >
              {images.map((img, id) => (
                <div
                  className={`
                    relative w-full h-full aspect-[4/5] rounded-xl overflow-hidden
                    ${
                      selectedImg === id
                        ? "col-span-2 shadow-large shadow-primary/50"
                        : "col-span-1"
                    }
                  `}
                  key={id}
                >
                  {selectedImg !== id && (
                    <div className="absolute top-0 w-full h-full bg-secondary/80 z-0"></div>
                  )}
                  <img
                    loading="lazy"
                    src={img}
                    className="-z-10 h-full w-full object-cover"
                    alt=""
                  />
                  {selectedImg === id && (
                    <div className="rounded-lg absolute p-2 bottom-2 left-1/2 -translate-x-1/2 w-[90%] bg-primary text-center text-primary_text">
                      <h6 className="font-medium">Liam Smith</h6>
                      <p className="text-primary text-[.8rem]">
                        CEO & Co-Founder
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default AboutUs;
