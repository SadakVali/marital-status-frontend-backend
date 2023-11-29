import React from "react";

import whyBGimage from "../../../assets/images/WhyBG.png";

const WhySection = () => {
  return (
    <div
      className="min-h-[110vh] w-full relative"
      style={{
        background: `url(${whyBGimage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 w-full h-full bg-richblack-500 bg-opacity-30"></div>

      <div
        className="min-h-[100vh] flex flex-col items-center gap-y-16 
        justify-center relative w-11/12 max-w-maxContent mx-auto"
      >
        <p
          className="font-caveat text-white leading-none z-10"
          style={{ fontSize: "clamp(1rem, 10vw, 4.5rem)" }}
        >
          why we started this startup?
        </p>
        <p
          className="font-caveat text-white text-center leading-none z-10"
          style={{ fontSize: "clamp(1rem, 10vw, 4.5rem)" }}
        >
          we are committed to preventing fraudulent activities in matrimonial
          unions, done by men on women and women on men.
        </p>
      </div>
    </div>
  );
};

export default WhySection;
