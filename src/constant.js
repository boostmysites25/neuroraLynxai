import { lazy } from "react";
import logoImg from "./assets/logo/logo.png";

// all services
import { ReactComponent as allServiceIcon1 } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as allServiceIcon2 } from "./assets/svgs/services/App Development.svg";
import { ReactComponent as allServiceIcon3 } from "./assets/svgs/services/Machine Learning Solutions.svg";
import { ReactComponent as allServiceIcon4 } from "./assets/svgs/services/UIUX Design.svg";

// app development services
import { ReactComponent as appServiceIcon1 } from "./assets/svgs/services/iOS App Development.svg";
import { ReactComponent as appServiceIcon2 } from "./assets/svgs/services/Android.svg";
import { ReactComponent as appServiceIcon3 } from "./assets/svgs/services/Flutter.svg";
import { ReactComponent as appServiceIcon4 } from "./assets/svgs/services/Hybrid App Development.svg";

// web development services
import { ReactComponent as webServiceIcon1 } from "./assets/svgs/services/E-Commerce Development.svg";
import { ReactComponent as webServiceIcon2 } from "./assets/svgs/services/Social Media Websites.svg";
import { ReactComponent as webServiceIcon3 } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as webServiceIcon4 } from "./assets/svgs/services/UIUX Design.svg";

// Lazy load all page components
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Services = lazy(() => import("./pages/Services"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));

export { logoImg };

export const companyDetails = {
  phone: "+917846815456",
  address:
    "Ground floor, 51, 3rd B Cross, Doddanekundi, Rd Gururaja La yout Vibhutipura Extension Doddanekk, Bangalore, Karnataka, 560037",
  email: "abc@xyz.com",
  linkedin: "",
  instagram: "",
  twitter: "",
};

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  {
    path: "/blogs",
    name: "Blogs",
    element: <Blogs />,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
  {
    path: "/blogs/:id",
    name: "Blog Details",
    element: <BlogDetails />,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Website Development",
    icon: webServiceIcon1,
    description:
      "Boost sales with custom e-commerce websites featuring secure payment gateways, mobile-responsive designs, and SEO-optimized product pages. We integrate inventory management and analytics to streamline your online business operations.",
  },
  {
    id: 2,
    title: "Custom Social Media Platform Development",
    icon: webServiceIcon2,
    description:
      "Build engaging social networking websites with user profiles, real-time interactions, and content sharing features. Our platforms enhance community engagement while ensuring scalability and data security.",
  },
  {
    id: 3,
    title: "High-Converting Landing Page Design",
    icon: webServiceIcon3,
    description:
      "Professionally designed landing pages with strategic CTAs, A/B testing, and conversion rate optimization. We create mobile-first designs that reduce bounce rates and increase lead capture by up to 70%.",
  },
  {
    id: 4,
    title: "Custom Web Application Development",
    icon: webServiceIcon4,
    description:
      "Tailor-made web applications built with React, Angular, or Vue.js. From CRM systems to SaaS platforms, we deliver scalable solutions with intuitive UX/UI design and robust backend architecture.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development Company",
    icon: appServiceIcon1,
    description:
      "Native iOS app development with ARKit integration, CoreML, and SwiftUI. We build App Store-optimized applications featuring in-app purchases, push notifications, and Apple Pay compatibility.",
  },
  {
    id: 2,
    title: "Android App Development Services",
    icon: appServiceIcon2,
    description:
      "Custom Android apps with Material Design 3, Jetpack Compose, and Google Play compliance. Our solutions include offline functionality, Firebase integration, and Google Maps API implementation.",
  },
  {
    id: 3,
    title: "Cross-Platform App Development with Flutter",
    icon: appServiceIcon3,
    description:
      "Cost-effective Flutter apps with 95% code reuse across iOS, Android, and web. We implement custom widgets, state management (Bloc/Riverpod), and optimize performance for smooth 60fps rendering.",
  },
  {
    id: 4,
    title: "Hybrid Mobile App Development",
    icon: appServiceIcon4,
    description:
      "Budget-friendly hybrid apps with native-like performance using Capacitor or React Native. Features include OAuth authentication, camera/geolocation access, and seamless API integrations.",
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "Samiksha Sharma",
    position: "CEO of Tech Innovations",
    img: require("./assets/images/testimonial3.png"),
    desc: "“From day one, the team truly understood our brand and translated that into a sleek, responsive website. Their attention to detail and SEO knowledge helped us increase visibility and engagement. We couldn’t be happier.”",
  },
  {
    id: 2,
    name: "Anubhav J.",
    position: "Marketing Director at ",
    img: require("./assets/images/testimonial1.png"),
    desc: "“We approached them with a rough idea and walked away with a polished, high-performing mobile app that’s getting great reviews. Their process was smooth, and they kept us involved at every step.”",
  },
  {
    id: 3,
    name: "Emily T",
    position: "Operations Manager at Health Innovations Group",
    img: require("./assets/images/testimonial2.png"),
    desc: "“Integrating AI felt overwhelming until we started working with this team. They developed smart solutions that streamlined operations and gave us better insights into our customer behavior. Real value, real results.”",
  },
  {
    id: 4,
    name: "Aarav Kapoor",
    position: "Product Manager of Nexus Tech",
    img: require("./assets/images/testimonial4.jpg"),
    desc: "“They didn’t just make our platform look good—they made it feel right. The interface is intuitive, the experience seamless. Our user retention has gone up significantly since the redesign.”",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    title: "Web Development",
    link: "/web-development",
    description:
      "Your website is often the first interaction potential customers have with your brand. Our web development team focuses on building responsive, secure, and scalable websites tailored to your business needs. Whether you're looking to launch a new site or revamp an existing one, we ensure a seamless user experience across all devices.",
    icon: allServiceIcon1,
  },
  {
    id: 2,
    title: "App Development",
    link: "/app-development",
    description:
      "In a mobile-first world, having a functional and engaging app is crucial. Our app development services encompass everything from ideation to deployment, ensuring your app is intuitive, fast, and aligned with your business objectives. We work closely with you to transform your ideas into a reality, delivering apps that users love.",
    icon: allServiceIcon2,
  },
  {
    id: 3,
    title: "AI Development Solutions",
    description:
      "Artificial Intelligence is revolutionizing industries, and we're at the forefront of this transformation. Our AI development solutions help businesses automate processes, gain insights from data, and enhance customer experiences. From machine learning models to natural language processing, we provide AI solutions that drive innovation and efficiency.",
    icon: allServiceIcon3,
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "A great user experience starts with thoughtful design. Our UX/UI design team focuses on creating intuitive interfaces that delight users and meet business goals. By understanding your audience and business objectives, we design digital experiences that are both functional and aesthetically pleasing.",
    icon: allServiceIcon4,
  },
];


// portfolio images (web development)
export const webPortfolio = [
  // {
  //   id: 1,
  //   img: require('./assets/images/portfolio/web-development/5ghomes.webp'),
  //   title: "5g Homes",
  //   link: "https://5ghighspeedinternet.co",
  // },
  {
    id: 2,
    img: require('./assets/images/portfolio/web-development/cold-creekcap.webp'),
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 3,
    img: require('./assets/images/portfolio/web-development/think-reality.webp'),
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 4,
    img: require('./assets/images/portfolio/web-development/akash-mega-mart.webp'),
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 5,
    img: require('./assets/images/portfolio/web-development/midwam.webp'),
    title: "Midwam – Immersive Experience Design Company",
    link: "https://www.midwam.com/en/about",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require('./assets/images/portfolio/app-development/akash_mega_mart-app.webp'),
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: require('./assets/images/portfolio/app-development/feelit_app.webp'),
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: require('./assets/images/portfolio/app-development/klikomics.webp'),
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: require('./assets/images/portfolio/app-development/autosnap-app.webp'),
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 5,
    img: require('./assets/images/portfolio/app-development/rentop.webp'),
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];