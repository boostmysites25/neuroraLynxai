import SubHeading from "./SubHeading";
import { ReactComponent as Icon1 } from "../assets/svgs/Consult & Strategize.svg";
import { ReactComponent as Icon2 } from "../assets/svgs/Design & Develop.svg";
import { ReactComponent as Icon3 } from "../assets/svgs/Testing & Launch.svg";
import { ReactComponent as Icon4 } from "../assets/svgs/Ongoing Support & Maintenance.svg";

let workflow = [
  {
    id: 1,
    icon: Icon1,
    title: "Requirement Analysis Process",
    desc: "Our expert team conducts thorough software requirement analysis, defining project scope with precision. We perform comprehensive feasibility studies and stakeholder alignment to establish clear project objectives, ensuring successful digital product development from inception.",
  },
  {
    id: 2,
    icon: Icon2,
    title: "Design & Prototyping Services",
    desc: "We create scalable system architecture and develop interactive software prototypes. Our iterative design process incorporates user feedback to refine interfaces, optimizing both functionality and user experience for web and mobile applications.",
  },
  {
    id: 3,
    icon: Icon3,
    title: "Quality Assurance Testing",
    desc: "Our developers implement clean, efficient code using iterative development methodologies. We conduct rigorous QA testing including unit, integration, and system testing to deliver bug-free, high-performance software solutions.",
  },
  {
    id: 4,
    icon: Icon4,
    title: "Ongoing Maintenance",
    desc: "We ensure smooth software deployment with comprehensive pre-launch testing and bug resolution. Our post-deployment support includes regular updates, performance monitoring, and maintenance services for continuous optimization of your digital solution.",
  },
];

const WorkProcess = () => {
  return (
    <div className="py-[3rem] flex justify-center relative">
      <div className="blurred-blue left-[-10%] bottom-[-10%]"></div>
      <div
        data-aos="fade-up"
        className="wrapper flex flex-col items-start sm:items-center gap-5 z-10 py-10"
      >
        <SubHeading heading="Work Process" />
        <h1
          data-aos="fade-up"
          className="heading-2 max-w-[60rem] mx-auto text-start sm:text-center"
        >
          4 Steps to Project Development
        </h1>
        <div className="z-10 grid grid-cols-1 mt-4 sm:grid-cols-2 gap-4 sm:gap-10 mx-auto max-w-6xl">
          {workflow.map((item) => (
            <div
              key={item.id}
              className="relative shadow-inner shadow-primary/40 bg-gradient-to-br from-secondary/30 via-primary/40 to-secondary/30 rounded-lg p-6 overflow-hidden hover:shadow-large hover:shadow-secondary/50 transition-all duration-300"
            >
              <div className="absolute left-3 top-3 text-[2rem] transition-all duration-300 -z-0 flex justify-center items-center h-[3rem] w-[3rem] rounded-full bg-secondary">
                <span className="text-white font-extrabold">{item.id}</span>
              </div>
              <div className="hover:scale-[95%] transition-all duration-300 flex flex-col gap-2 items-center">
                <item.icon className="z-10 w-[4rem] h-[4rem] fill-secondary" />
                <h6 className="z-10 font-medium text-2xl text-center">
                  {item.title}
                </h6>
                <p className="z-10 text-primary_text text-center desc">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
