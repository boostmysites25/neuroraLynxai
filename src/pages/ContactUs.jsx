import React, { lazy } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { companyDetails } from "../constant";
import { Link } from "react-router-dom";
const WebsiteHeader = lazy(() => import("../components/website/WebsiteHeader"));
const PageBanner = lazy(() => import("../components/website/PageBanner"));
const WebsiteFooter = lazy(() => import("../components/website/WebsiteFooter"));
const LeadForm = lazy(() => import("../components/LeadForm"));

// const MapComponent = lazy(() => import("../components/website/MapComponent"));

const ContactUs = () => {
  return (
    <>
      <WebsiteHeader />
      <PageBanner title="Contact Us" />
      <div className="pt-[3rem]">
        <div className="wrapper">
          <div className="grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto mb-[3rem]">
            <div
              data-aos="fade-up"
              className="bg-accent/15 flex flex-col gap-3 items-center justify-center rounded-xl p-5"
            >
              <MapPin strokeWidth={2} size={40} className="inline" />
              <span className="text-center desc">
                {companyDetails.address}
              </span>
            </div>
            <Link
              to={`mailto:${companyDetails.email}`}
              data-aos="fade-up"
              className="bg-accent/15 flex flex-col gap-3 items-center justify-center rounded-xl p-5"
            >
              <Mail strokeWidth={2} size={40} className="inline" />
              <span className="text-center desc">
                {companyDetails.email}
              </span>
            </Link>
            <Link
              to={`tel:${companyDetails.phone}`}
              data-aos="fade-up"
              className="bg-accent/15 flex flex-col gap-3 items-center justify-center rounded-xl p-5"
            >
              <Phone strokeWidth={2} size={40} className="inline" />
              <span className="text-center desc">
                {companyDetails.phone}
              </span>
            </Link>
          </div>
        </div>
        <LeadForm />
      </div>
      {/* <div className="relative">
        <div
          data-aos="fade-up"
          className="p-7 flex gap-2 bg-white absolute rounded-t-xl sm:rounded-t-none sm:rounded-b-xl right-1 sm:right-[1rem] bottom-0 sm:bottom-auto sm:top-0 z-10_text min-w-[22rem] max-w-[22rem]"
        >
          <MapPin strokeWidth={1.5} size={20} className="inline min-w-5 mt-1" />{" "}
          <span className="">{companyDetails.address}</span>
        </div>
        <MapComponent />
      </div> */}
      <WebsiteFooter />
    </>
  );
};

export default ContactUs;
