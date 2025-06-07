// Import service icons
import { ReactComponent as WebDevIcon } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as AppDevIcon } from "./assets/svgs/services/App Development.svg";
import { ReactComponent as AIDevIcon } from "./assets/svgs/services/Machine Learning Solutions.svg";
import { ReactComponent as UIUXIcon } from "./assets/svgs/services/UIUX Design.svg";

// Import sub-service icons
import { ReactComponent as EcommerceIcon } from "./assets/svgs/services/E-Commerce Development.svg";
import { ReactComponent as SocialMediaIcon } from "./assets/svgs/services/Social Media Websites.svg";
import { ReactComponent as LandingPageIcon } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as WebAppIcon } from "./assets/svgs/services/UIUX Design.svg";

import { ReactComponent as iOSIcon } from "./assets/svgs/services/iOS App Development.svg";
import { ReactComponent as AndroidIcon } from "./assets/svgs/services/Android.svg";
import { ReactComponent as FlutterIcon } from "./assets/svgs/services/Flutter.svg";
import { ReactComponent as HybridIcon } from "./assets/svgs/services/Hybrid App Development.svg";

export const services = [
  {
    id: 1,
    title: "Web Development",
    slug: "web-development",
    icon: WebDevIcon,
    shortDescription: "Your website is often the first interaction potential customers have with your brand. Our web development team focuses on building responsive, secure, and scalable websites tailored to your business needs.",
    heroDescription: "In today's digital landscape, your website serves as the cornerstone of your online presence. At NeuroraLynx AI, we specialize in creating web solutions that not only captivate visitors but also drive meaningful business results. Our web development services combine cutting-edge technology with strategic design to deliver websites that stand out in a crowded digital marketplace.",
    detailedDescription: [
      "Our web development process begins with a deep understanding of your business goals, target audience, and industry landscape. We then craft a tailored strategy that addresses your specific needs, whether you're looking to increase conversions, improve user engagement, or establish a stronger brand presence online.",
      "Our developers work with the latest technologies and frameworks to ensure your website is not only visually impressive but also technically sound. We prioritize performance, security, and scalability, creating websites that can grow with your business and adapt to changing market conditions.",
      "From responsive designs that work seamlessly across all devices to custom functionality that addresses your unique business requirements, our web development services are comprehensive and results-driven. We also implement best practices for search engine optimization (SEO), ensuring your website ranks well in search results and attracts organic traffic.",
      "Beyond the technical aspects, we focus on creating intuitive user experiences that guide visitors toward your business objectives. Whether it's making a purchase, filling out a contact form, or engaging with your content, we design user journeys that convert visitors into customers.",
      "After launch, we provide ongoing support and maintenance to ensure your website continues to perform optimally. This includes regular updates, security patches, and performance optimizations based on user behavior and analytics data."
    ],
    features: [
      {
        title: "User-Centric Design",
        description: "We create websites that prioritize user experience, ensuring intuitive navigation, fast load times, and engaging content that keeps visitors coming back.",
        icon: "users"
      },
      {
        title: "Performance Optimization",
        description: "We optimize every aspect of your website for speed and performance, ensuring fast load times, smooth interactions, and high search engine rankings.",
        icon: "settings"
      },
      {
        title: "Responsive Design",
        description: "We build websites that look and function perfectly on all devices, from desktop computers to smartphones, ensuring a consistent experience for all users.",
        icon: "code"
      },
      {
        title: "SEO Optimization",
        description: "We implement best practices for search engine optimization, ensuring your website ranks well in search results and attracts organic traffic.",
        icon: "signal"
      }
    ],
    approach: [
      {
        step: "01",
        title: "Discovery & Planning",
        description: "We begin by understanding your business goals, target audience, and competitive landscape. This phase includes defining project scope, technical requirements, and creating a detailed roadmap."
      },
      {
        step: "02",
        title: "Design & Prototyping",
        description: "Our designers create wireframes and visual designs that align with your brand identity. We develop interactive prototypes to visualize the user experience before development begins."
      },
      {
        step: "03",
        title: "Development & Testing",
        description: "Our developers build your website using clean, efficient code and modern frameworks. We conduct thorough testing across devices and browsers to ensure flawless functionality."
      },
      {
        step: "04",
        title: "Launch & Optimization",
        description: "We deploy your website and provide ongoing support and optimization. This includes performance monitoring, security updates, and continuous improvements based on user feedback and analytics."
      }
    ],
    subServices: [
      {
        id: 1,
        title: "E-commerce Website Development",
        description: "Boost sales with custom e-commerce websites featuring secure payment gateways, mobile-responsive designs, and SEO-optimized product pages. We integrate inventory management and analytics to streamline your online business operations.",
        icon: EcommerceIcon
      },
      {
        id: 2,
        title: "Custom Social Media Platform Development",
        description: "Build engaging social networking websites with user profiles, real-time interactions, and content sharing features. Our platforms enhance community engagement while ensuring scalability and data security.",
        icon: SocialMediaIcon
      },
      {
        id: 3,
        title: "High-Converting Landing Page Design",
        description: "Professionally designed landing pages with strategic CTAs, A/B testing, and conversion rate optimization. We create mobile-first designs that reduce bounce rates and increase lead capture by up to 70%.",
        icon: LandingPageIcon
      },
      {
        id: 4,
        title: "Custom Web Application Development",
        description: "Tailor-made web applications built with React, Angular, or Vue.js. From CRM systems to SaaS platforms, we deliver scalable solutions with intuitive UX/UI design and robust backend architecture.",
        icon: WebAppIcon
      }
    ],
    ctaText: "Let's create a website that not only looks great but drives real business results. Our web development team is ready to bring your vision to life."
  },
  {
    id: 2,
    title: "App Development",
    slug: "app-development",
    icon: AppDevIcon,
    shortDescription: "In a mobile-first world, having a functional and engaging app is crucial. Our app development services encompass everything from ideation to deployment, ensuring your app is intuitive, fast, and aligned with your business objectives.",
    heroDescription: "In an increasingly mobile-centric world, a well-designed app can be the difference between business success and obscurity. At NeuroraLynx AI, we craft mobile applications that seamlessly blend functionality with engaging user experiences. Our app development team leverages the latest technologies and frameworks to build solutions that resonate with users and achieve your business objectives.",
    detailedDescription: [
      "Our app development journey starts with thorough research and planning. We analyze your target audience, market trends, and competitive landscape to identify opportunities for innovation. Our development team then brings your vision to life using the most appropriate technologies and platforms for your specific needs.",
      "Throughout the process, we maintain a relentless focus on user experience, ensuring your app is intuitive, responsive, and engaging. We understand that a successful app must not only look good but also provide real value to users, solving their problems or enhancing their lives in meaningful ways.",
      "We specialize in developing apps for iOS, Android, and cross-platform solutions, allowing you to reach the widest possible audience with a single codebase. Our expertise spans various industries, from e-commerce and healthcare to finance and entertainment, giving us the versatility to tackle diverse app development challenges.",
      "Security is a top priority in all our app development projects. We implement robust security measures to protect user data and ensure compliance with relevant regulations. This includes secure authentication, data encryption, and regular security audits.",
      "After launch, we provide comprehensive support and maintenance services to keep your app running smoothly. This includes bug fixes, performance optimizations, and feature updates based on user feedback and changing market conditions."
    ],
    features: [
      {
        title: "Cross-Platform Compatibility",
        description: "We develop apps that work seamlessly across iOS, Android, and web platforms, maximizing your reach while minimizing development costs.",
        icon: "users"
      },
      {
        title: "Intuitive User Experience",
        description: "We design apps with intuitive interfaces and seamless user flows, making your application easy to navigate and enjoyable to use.",
        icon: "settings"
      },
      {
        title: "Offline Functionality",
        description: "We implement offline capabilities that allow your app to function even without an internet connection, ensuring users can access critical features anytime.",
        icon: "code"
      },
      {
        title: "Continuous Updates",
        description: "We provide ongoing support and updates to keep your app secure, compatible with the latest OS versions, and equipped with new features.",
        icon: "signal"
      }
    ],
    approach: [
      {
        step: "01",
        title: "Research & Strategy",
        description: "We analyze your target audience, market trends, and business objectives to develop a comprehensive app strategy. This phase includes defining core features, user personas, and technical specifications."
      },
      {
        step: "02",
        title: "Design & Wireframing",
        description: "We create wireframes and visual designs for your app, focusing on intuitive navigation and engaging user interfaces. This phase includes interactive prototypes for user testing."
      },
      {
        step: "03",
        title: "Development & QA",
        description: "Our developers build your app using the most appropriate technologies for your needs. We implement rigorous quality assurance testing to identify and fix any issues."
      },
      {
        step: "04",
        title: "Deployment & Maintenance",
        description: "We launch your app to the appropriate app stores and provide ongoing maintenance and updates. This includes monitoring performance, implementing new features, and addressing user feedback."
      }
    ],
    subServices: [
      {
        id: 1,
        title: "iOS App Development",
        description: "Native iOS app development with ARKit integration, CoreML, and SwiftUI. We build App Store-optimized applications featuring in-app purchases, push notifications, and Apple Pay compatibility.",
        icon: iOSIcon
      },
      {
        id: 2,
        title: "Android App Development",
        description: "Custom Android apps with Material Design 3, Jetpack Compose, and Google Play compliance. Our solutions include offline functionality, Firebase integration, and Google Maps API implementation.",
        icon: AndroidIcon
      },
      {
        id: 3,
        title: "Cross-Platform App Development with Flutter",
        description: "Cost-effective Flutter apps with 95% code reuse across iOS, Android, and web. We implement custom widgets, state management (Bloc/Riverpod), and optimize performance for smooth 60fps rendering.",
        icon: FlutterIcon
      },
      {
        id: 4,
        title: "Hybrid Mobile App Development",
        description: "Budget-friendly hybrid apps with native-like performance using Capacitor or React Native. Features include OAuth authentication, camera/geolocation access, and seamless API integrations.",
        icon: HybridIcon
      }
    ],
    ctaText: "Let's build an app that users love and that helps your business grow. Our app development team is ready to turn your idea into reality."
  },
  {
    id: 3,
    title: "AI Development Solutions",
    slug: "ai-development",
    icon: AIDevIcon,
    shortDescription: "Artificial Intelligence is revolutionizing industries, and we're at the forefront of this transformation. Our AI development solutions help businesses automate processes, gain insights from data, and enhance customer experiences.",
    heroDescription: "Artificial Intelligence is no longer a futuristic concept—it's a present-day competitive advantage. At NeuroraLynx AI, we're at the forefront of AI innovation, developing intelligent solutions that transform how businesses operate. Our AI development services harness the power of machine learning, natural language processing, and computer vision to create systems that learn, adapt, and deliver unprecedented value.",
    detailedDescription: [
      "Our approach to AI development begins with a clear understanding of the business challenge you're looking to address. We then design and implement AI solutions that directly target these challenges, whether it's automating repetitive tasks, extracting insights from complex data sets, or enhancing customer interactions.",
      "Our team stays at the cutting edge of AI research, incorporating the latest advancements into practical, business-focused applications. We have expertise in various AI domains, including machine learning, deep learning, natural language processing, computer vision, and predictive analytics.",
      "Data is the foundation of any successful AI initiative. We help you collect, clean, and structure your data to ensure it's suitable for AI applications. Our data scientists work closely with your team to identify relevant data sources and develop strategies for ongoing data collection and management.",
      "We understand that AI solutions must integrate seamlessly with your existing systems and workflows. Our development approach emphasizes interoperability, allowing our AI solutions to work alongside your current technology stack without disruption.",
      "Beyond development, we provide comprehensive training and support to ensure your team can effectively leverage our AI solutions. This includes documentation, workshops, and ongoing technical assistance to maximize the value of your AI investment."
    ],
    features: [
      {
        title: "Custom ML Models",
        description: "We build machine learning models tailored to your specific business needs, trained on your data to deliver accurate and relevant insights.",
        icon: "users"
      },
      {
        title: "Natural Language Processing",
        description: "We implement NLP capabilities that enable your systems to understand, interpret, and generate human language, enhancing customer interactions.",
        icon: "settings"
      },
      {
        title: "Computer Vision",
        description: "We develop computer vision systems that can analyze and interpret visual information, enabling applications from facial recognition to object detection.",
        icon: "code"
      },
      {
        title: "Predictive Analytics",
        description: "We build predictive models that analyze historical data to forecast future trends, helping you make proactive business decisions.",
        icon: "signal"
      }
    ],
    approach: [
      {
        step: "01",
        title: "Problem Definition",
        description: "We work with you to clearly define the business problem you're trying to solve with AI. This includes identifying key metrics, data sources, and success criteria."
      },
      {
        step: "02",
        title: "Data Collection & Preparation",
        description: "We gather and prepare the data needed to train your AI models. This includes data cleaning, normalization, and feature engineering to ensure optimal model performance."
      },
      {
        step: "03",
        title: "Model Development & Training",
        description: "We develop and train AI models using advanced algorithms and techniques. This includes iterative testing and refinement to achieve the desired accuracy and performance."
      },
      {
        step: "04",
        title: "Integration & Deployment",
        description: "We integrate AI models into your existing systems and deploy them to production. This includes setting up monitoring, establishing feedback loops, and providing ongoing optimization."
      }
    ],
    subServices: [
      {
        id: 1,
        title: "Machine Learning Solutions",
        description: "Custom machine learning models tailored to your business needs. Our ML solutions help you extract valuable insights from your data, automate decision-making processes, and improve operational efficiency.",
        icon: AIDevIcon
      },
      {
        id: 2,
        title: "Natural Language Processing",
        description: "Advanced NLP solutions that enable your applications to understand, interpret, and generate human language. From chatbots to sentiment analysis, our NLP services enhance customer interactions.",
        icon: AIDevIcon
      },
      {
        id: 3,
        title: "Computer Vision Systems",
        description: "Cutting-edge computer vision solutions that allow your applications to interpret and understand visual information. From object detection to facial recognition, our CV systems bring intelligence to visual data.",
        icon: AIDevIcon
      },
      {
        id: 4,
        title: "AI Integration Services",
        description: "Seamless integration of AI capabilities into your existing systems and workflows. We help you leverage the power of artificial intelligence without disrupting your current operations.",
        icon: AIDevIcon
      }
    ],
    ctaText: "Let's harness the power of AI to transform your business operations. Our AI development team is ready to help you leverage this game-changing technology."
  },
  {
    id: 4,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    icon: UIUXIcon,
    shortDescription: "A great user experience starts with thoughtful design. Our UX/UI design team focuses on creating intuitive interfaces that delight users and meet business goals. By understanding your audience and business objectives, we design digital experiences that are both functional and aesthetically pleasing.",
    heroDescription: "In the digital realm, exceptional design is not just about aesthetics—it's about creating meaningful connections with users. At NeuroraLynx AI, our UI/UX design services focus on crafting intuitive, engaging interfaces that delight users while achieving business goals. We combine artistic vision with data-driven insights to create designs that not only look stunning but also perform exceptionally.",
    detailedDescription: [
      "Our design process starts with comprehensive user research to understand the needs, preferences, and pain points of your target audience. We then create detailed user personas and journey maps to guide our design decisions. Our designers work iteratively, continuously refining and testing concepts to ensure the final product delivers an exceptional user experience.",
      "We pay meticulous attention to every detail, from color psychology to interaction patterns, ensuring a cohesive and intuitive design. Our approach balances creativity with functionality, resulting in interfaces that are both visually appealing and highly usable.",
      "We understand that great design must also support your business objectives. Whether you're looking to increase conversions, improve user engagement, or enhance brand perception, our design solutions are strategically crafted to achieve these goals. We use data and analytics to inform our design decisions and measure their impact.",
      "Our UI/UX design services cover the entire product lifecycle, from initial concept to final implementation. We work closely with developers to ensure our designs are accurately translated into the final product, maintaining the integrity of the user experience throughout the development process.",
      "Beyond the initial design, we provide ongoing support and optimization based on user feedback and performance data. This iterative approach ensures your digital product continues to evolve and improve over time, staying relevant in a rapidly changing digital landscape."
    ],
    features: [
      {
        title: "User Research",
        description: "We conduct comprehensive user research to understand your audience's needs, preferences, and pain points, informing design decisions that resonate with users.",
        icon: "users"
      },
      {
        title: "Interaction Design",
        description: "We craft intuitive interaction patterns that guide users through your digital product, creating a seamless and enjoyable experience.",
        icon: "settings"
      },
      {
        title: "Visual Design",
        description: "We create visually stunning interfaces that align with your brand identity while enhancing usability and user engagement.",
        icon: "code"
      },
      {
        title: "Usability Testing",
        description: "We conduct thorough usability testing to identify and address potential issues before launch, ensuring your product meets user expectations.",
        icon: "signal"
      }
    ],
    approach: [
      {
        step: "01",
        title: "User Research",
        description: "We conduct comprehensive user research to understand your audience's needs, behaviors, and pain points. This includes interviews, surveys, and competitive analysis."
      },
      {
        step: "02",
        title: "Information Architecture",
        description: "We organize content and functionality in a way that makes sense to users. This includes creating sitemaps, user flows, and wireframes to establish the foundation of the design."
      },
      {
        step: "03",
        title: "Visual Design & Prototyping",
        description: "We create high-fidelity designs and interactive prototypes that bring your digital product to life. This phase includes defining visual elements, typography, and interaction patterns."
      },
      {
        step: "04",
        title: "Testing & Implementation",
        description: "We conduct usability testing to validate design decisions and make necessary refinements. We then work closely with developers to ensure the design is implemented correctly."
      }
    ],
    subServices: [
      {
        id: 1,
        title: "User Research & Analysis",
        description: "Comprehensive user research to understand your target audience's needs, behaviors, and pain points. Our analysis informs design decisions and ensures your product resonates with users.",
        icon: UIUXIcon
      },
      {
        id: 2,
        title: "Interface Design",
        description: "Visually stunning and intuitive interface designs that align with your brand identity. Our designs balance aesthetics with functionality to create memorable user experiences.",
        icon: UIUXIcon
      },
      {
        id: 3,
        title: "Interaction Design",
        description: "Thoughtful interaction design that guides users through your application with ease. We create smooth, intuitive interactions that make your product a joy to use.",
        icon: UIUXIcon
      },
      {
        id: 4,
        title: "Usability Testing",
        description: "Rigorous usability testing to identify and address potential issues before launch. Our testing ensures your product meets user expectations and business objectives.",
        icon: UIUXIcon
      }
    ],
    ctaText: "Let's create interfaces that captivate users and drive engagement. Our UI/UX design team is ready to help you deliver exceptional digital experiences."
  }
];