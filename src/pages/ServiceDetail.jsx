import React, { useEffect, useState, lazy, Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { services } from "../services";
import FuturisticButton from "../components/FuturisticButton";

// Lazy load components
const ReactPlayer = lazy(() => import("react-player/lazy"));
const WebsiteHeader = lazy(() => import("../components/website/WebsiteHeader"));
const WebsiteFooter = lazy(() => import("../components/website/WebsiteFooter"));
const PageBanner = lazy(() => import("../components/website/PageBanner"));
const TrustWorthySection = lazy(() => import("../components/TrustWorthySection"));
const JoinHappyCustomers = lazy(() => import("../components/JoinHappyCustomers"));

// Lazy load media assets
const serviceMedia = {
  web: {
    video: () => import("../assets/vids/services/webdev.mp4").then(module => module.default),
    image: () => import("../assets/images/services/webdev.webp").then(module => module.default)
  },
  app: {
    video: () => import("../assets/vids/services/appdev.mp4").then(module => module.default),
    image: () => import("../assets/images/services/appdev.webp").then(module => module.default)
  },
  ai: {
    video: () => import("../assets/vids/services/ai.mp4").then(module => module.default),
    image: () => import("../assets/images/services/ai.webp").then(module => module.default)
  },
  uiux: {
    video: () => import("../assets/vids/services/uiux.mp4").then(module => module.default),
    image: () => import("../assets/images/services/uiux.png").then(module => module.default)
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [serviceImage, setServiceImage] = useState(null);
  const [serviceVideo, setServiceVideo] = useState(null)

  useEffect(() => {
    // Find the service by slug
    const foundService = services.find(s => s.slug === slug);

    if (foundService) {
      setService(foundService);

      // Load media assets dynamically based on service type
      const loadMediaAssets = async () => {
        try {
          if (foundService.title.includes("Web")) {
            const [image, video] = await Promise.all([
              serviceMedia.web.image(),
              serviceMedia.web.video()
            ]);
            setServiceImage(image);
            setServiceVideo(video);
          } else if (foundService.title.includes("App")) {
            const [image, video] = await Promise.all([
              serviceMedia.app.image(),
              serviceMedia.app.video()
            ]);
            setServiceImage(image);
            setServiceVideo(video);
          } else if (foundService.title.includes("AI")) {
            const [image, video] = await Promise.all([
              serviceMedia.ai.image(),
              serviceMedia.ai.video()
            ]);
            setServiceImage(image);
            setServiceVideo(video);
          } else if (foundService.title.includes("UI/UX")) {
            const [image, video] = await Promise.all([
              serviceMedia.uiux.image(),
              serviceMedia.uiux.video()
            ]);
            setServiceImage(image);
            setServiceVideo(video);
          }
          setLoading(false);
        } catch (error) {
          console.error("Failed to load media assets:", error);
          setLoading(false);
        }
      };

      loadMediaAssets();
    } else {
      // If service not found, redirect to services page
      navigate("/services");
      setLoading(false);
    }
  }, [slug, navigate]);

  if (loading || !service) {
    return <div className="h-screen flex items-center justify-center bg-background">
      <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
    </div>;
  }

  // Loading component for Suspense fallback
  const ComponentLoader = () => (
    <div className="flex items-center justify-center h-32">
      <div className="w-8 h-8 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <>
      <Suspense fallback={<ComponentLoader />}>
        <WebsiteHeader />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <PageBanner title={service.title} />
      </Suspense>

      {/* Hero Section with Video Background */}
      <section className="relative overflow-hidden bg-background py-20">
        {/* Cyberpunk grid background */}
        <div className="absolute inset-0 cyberpunk-grid opacity-10"></div>

        {/* Neural network connections */}
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" className="opacity-10">
            <defs>
              <linearGradient id="serviceDetailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2561E6" stopOpacity="0" />
                <stop offset="50%" stopColor="#2561E6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#2561E6" stopOpacity="0" />
              </linearGradient>
            </defs>

            {[...Array(10)].map((_, i) => (
              <path
                key={i}
                d={`M${Math.random() * 100},${Math.random() * 100} Q${Math.random() * 100},${Math.random() * 100} ${Math.random() * 100},${Math.random() * 100}`}
                stroke="url(#serviceDetailGradient)"
                strokeWidth="1"
                fill="none"
                className="neural-path"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </svg>
        </div>

        <div className="wrapper relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="heading-2 holographic-text mb-6">{service.title}</h1>

              <div className="text-secondary_text space-y-6">
                <p className="desc">
                  {service.heroDescription}
                </p>
                {service.detailedDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8">
                <FuturisticButton onClick={() => navigate('/contact-us')} variant="primary">
                  Get Started
                </FuturisticButton>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative h-full w-full">
              <div className="holographic-card h-full w-full rounded-lg overflow-hidden aspect-video relative">
                {/* Service image */}
                <img
                  src={serviceImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />

                {/* Scan line effect */}
                <div className="scan-line absolute inset-0 pointer-events-none"></div>

                {/* Futuristic corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-secondary"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-secondary"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-secondary"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary"></div>

                {/* Quantum dots */}
                <div className="absolute top-1/4 left-1/4 quantum-dots w-4 h-4"></div>
                <div className="absolute bottom-1/4 right-1/4 quantum-dots w-4 h-4" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features Section */}
      <section className="bg-dark_surface py-20 relative">
        {/* Cyberpunk grid background */}
        <div className="absolute inset-0 cyberpunk-grid opacity-5"></div>

        <div className="wrapper relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-2 holographic-text mb-4">Key Features</h2>

            {/* Decorative line */}
            <div className="relative w-64 h-1 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary to-transparent pulse-glow"></div>
            </div>

            <p className="text-secondary_text max-w-3xl mx-auto">
              {service.title === "Web Development" && (
                "Our web development services are designed to deliver exceptional digital experiences that drive business growth. Here's what sets our approach apart:"
              )}
              {service.title === "App Development" && (
                "Our app development services are crafted to create mobile experiences that users love and businesses rely on. Here's what makes our approach unique:"
              )}
              {service.title === "AI Development Solutions" && (
                "Our AI development solutions are engineered to transform raw data into actionable intelligence. Here's what distinguishes our AI services:"
              )}
              {service.title === "UI/UX Design" && (
                "Our UI/UX design services are focused on creating interfaces that captivate users and drive engagement. Here's what makes our design approach special:"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="holographic-card rounded-lg p-6 relative overflow-hidden">
                <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-primary/50 to-background/80"></div>
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 min-w-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4 pulse-glow">
                    <svg className="w-8 min-w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      {feature.icon === "users" && <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>}
                      {feature.icon === "settings" && <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>}
                      {feature.icon === "code" && <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>}
                      {feature.icon === "signal" && <path fillRule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clipRule="evenodd"></path>}
                    </svg>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 holographic-text">
                    {feature.title}
                  </h3>

                  <p className="text-secondary_text">
                    {feature.description}
                  </p>
                </div>

                <div className="scan-line absolute inset-0 pointer-events-none"></div>

                {/* Futuristic corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-secondary"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-secondary"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-secondary"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-background py-20 relative">
        {/* Cyberpunk grid background */}
        <div className="absolute inset-0 cyberpunk-grid opacity-10"></div>

        <div className="wrapper relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-2 holographic-text mb-4">Our Approach</h2>

            {/* Decorative line */}
            <div className="relative w-64 h-1 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary to-transparent pulse-glow"></div>
            </div>

            <p className="text-secondary_text max-w-3xl mx-auto">
              {service.title === "Web Development" && (
                "Our web development process is designed to deliver exceptional results through a structured, collaborative approach. We work closely with you at every stage to ensure your website meets your business objectives and exceeds user expectations."
              )}
              {service.title === "App Development" && (
                "Our app development methodology combines technical expertise with user-centered design principles. We follow a proven process that ensures your app is built to the highest standards while meeting your specific business requirements."
              )}
              {service.title === "AI Development Solutions" && (
                "Our AI development approach is both systematic and innovative. We combine rigorous data science methodologies with creative problem-solving to deliver AI solutions that address real business challenges."
              )}
              {service.title === "UI/UX Design" && (
                "Our design process is iterative and user-centered. We combine creative thinking with data-driven insights to create interfaces that not only look beautiful but also deliver exceptional user experiences."
              )}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative holographic-card rounded-lg overflow-hidden aspect-video">
              <Suspense fallback={
                <div className="w-full h-full bg-dark_surface flex items-center justify-center">
                  <div className="w-10 h-10 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
                </div>
              }>
                {serviceVideo && (
                  <ReactPlayer
                    url={serviceVideo}
                    playing={true}
                    loop={true}
                    muted={true}
                    width="100%"
                    height="100%"
                    playsinline={true}
                    config={{
                      file: {
                        attributes: {
                          style: {
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%'
                          }
                        }
                      }
                    }}
                  />
                )}
              </Suspense>

              {/* Scan line effect */}
              <div className="scan-line absolute inset-0 pointer-events-none"></div>

              {/* Futuristic corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-secondary"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-secondary"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-secondary"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary"></div>
            </div>

            <div>
              <div className="space-y-8">
                {service.approach.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 pulse-glow">
                      <span className="text-secondary font-bold">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 holographic-text">
                        {step.title}
                      </h3>
                      <p className="text-secondary_text">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Services Section */}
      <section className="bg-dark_surface py-20 relative">
        {/* Cyberpunk grid background */}
        <div className="absolute inset-0 cyberpunk-grid opacity-5"></div>

        <div className="wrapper relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-2 holographic-text mb-4">Our {service.title} Services</h2>

            {/* Decorative line */}
            <div className="relative w-64 h-1 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary to-transparent pulse-glow"></div>
            </div>

            <p className="text-secondary_text max-w-3xl mx-auto">
              {service.title === "Web Development" && (
                "We offer a comprehensive range of web development services to meet your specific business needs. From e-commerce solutions to custom web applications, our team has the expertise to deliver exceptional results."
              )}
              {service.title === "App Development" && (
                "Our app development services cover the entire spectrum of mobile platforms and technologies. Whether you need a native iOS app, Android app, or cross-platform solution, we have the skills to bring your vision to life."
              )}
              {service.title === "AI Development Solutions" && (
                "Our AI development services encompass a wide range of technologies and applications. From machine learning to natural language processing, we provide tailored solutions that address your specific business challenges."
              )}
              {service.title === "UI/UX Design" && (
                "Our UI/UX design services cover every aspect of the user experience. From initial research to final implementation, we ensure your digital products are both beautiful and functional."
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.subServices.map((subService, index) => (
              <div key={subService.id} className="holographic-card rounded-lg p-6 relative overflow-hidden">
                {/* Video background with ReactPlayer */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div
                    className="w-full h-full opacity-10"
                    style={{
                      transform: index % 2 === 0 ? 'scale(1.1)' : 'scale(1.1) rotate(180deg)'
                    }}
                  >
                    <Suspense fallback={
                      <div className="w-full h-full bg-dark_surface flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    }>
                      {serviceVideo && (
                        <ReactPlayer
                          url={serviceVideo}
                          playing={true}
                          loop={true}
                          muted={true}
                          width="100%"
                          height="100%"
                          playsinline={true}
                          config={{
                            file: {
                              attributes: {
                                style: {
                                  objectFit: 'cover',
                                  width: '100%',
                                  height: '100%'
                                }
                              }
                            }
                          }}
                        />
                      )}
                    </Suspense>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-primary/50 to-background/80"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center pulse-glow backdrop-blur-sm">
                      <subService.icon className="w-8 min-w-8 h-8 fill-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold holographic-text">{subService.title}</h3>
                  </div>

                  <p className="text-secondary_text backdrop-blur-sm bg-background/30 p-3 rounded-lg">
                    {subService.description}
                  </p>
                </div>

                <div className="scan-line absolute inset-0 pointer-events-none"></div>

                {/* Futuristic corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-secondary"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-secondary"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-secondary"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-20 relative">
        {/* Cyberpunk grid background */}
        <div className="absolute inset-0 cyberpunk-grid opacity-10"></div>

        <div className="wrapper relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 holographic-text mb-6">Ready to Transform Your Business?</h2>

            <p className="text-secondary_text desc mb-8">
              {service.ctaText}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <FuturisticButton onClick={() => navigate('/contact-us')} variant="primary">
                Get Started
              </FuturisticButton>
              <FuturisticButton onClick={() => navigate('/services')} variant="neon">
                Explore More Services
              </FuturisticButton>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<ComponentLoader />}>
        <TrustWorthySection />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <JoinHappyCustomers />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <WebsiteFooter />
      </Suspense>
    </>
  );
};

export default ServiceDetail;