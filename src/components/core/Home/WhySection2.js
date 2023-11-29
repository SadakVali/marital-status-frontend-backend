import React from "react";

import whyBGimage from "../../../assets/images/WhyBG2.png";

const WhySection2 = () => {
  return (
    <div
      className="min-h-[100vh] w-full relative"
      style={{
        background: `url(${whyBGimage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 w-full h-full bg-richblack-500 bg-opacity-30"></div>
      <div
        className="flex min-h-[110vh] flex-col items-center gap-y-16 
        justify-center w-11/12 max-w-maxContent mx-auto"
      >
        <p
          className="font-caveat text-white text-center 
          leading-normal z-10"
          style={{ fontSize: "clamp(1rem, 9vw, 4.2rem)" }}
        >
          Women are also not exempted from such cases, as they too engage in
          instances of marital frauds for financial gain
        </p>
      </div>
    </div>
  );
};

export default WhySection2;
