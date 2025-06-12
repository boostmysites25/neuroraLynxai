import { Link } from "react-router-dom";
import logo from "../assets/images/headerlogo.png";
import { useTheme } from "../Context/ThemeContext";
import { companyDetails } from "../util/constant";

const Footer = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className="relative bg-primary/20 dark:bg-darkblack z-20 overflow-hidden">
      <div
        className={`absolute ${
          isDarkMode ? `flex` : "hidden"
        } -bottom-[15rem] blur-3xl left-0 w-full h-full bg-footerBackground -z-10 `}
      />
      <footer className="w-full   py-16  z-10">
        <div className="wrapper">
          <div className="grid grid-cols-1 md:grid-cols-3  xl:grid-cols-4 gap-8 items-start">
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="logo" className="w-[15rem]" />
              </div>
              <p className="text-white text-sm max-w-xs">
                At NeuroraLynx AI, we're dedicated to driving your business
                forward with innovative software solutions. With a passion for
                technology and a commitment to excellence, we specialize in
                delivering tailored software products and services to meet your
                unique needs.
              </p>
            </div>

            <div className="col-span-1">
              <h3 className="text-white font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about-us"
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    Services
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="text-white font-medium mb-4">Information</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/blog"
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    Contact US
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <div className="flex space-x-4 mt-8">
                {companyDetails.socialLinks.map((obj, index) => (
                  <Link
                    key={index}
                    to={obj.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white  text-2xl transition-colors"
                  >
                    <obj.icon className="hover:text-darkblack dark:hover:text-primary cursor-ponter" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white text-sm">
              ©{Math.floor(new Date().getFullYear())} NeuroraLynx AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
