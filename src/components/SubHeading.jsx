import { Minus } from "lucide-react";
import React from "react";

const SubHeading = ({ heading, className }) => {
  return (
    <div data-aos="fade-up" className={`${className} section-heading flex items-center gap-1 text-secondary`}>
      <Minus size={30} className="text-secondary" /> {heading}
    </div>
  );
};

export default SubHeading;
