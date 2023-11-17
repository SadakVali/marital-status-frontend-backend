import React from "react";

import FirstFancyBTN from "../../common/FirstFancyBTN";
import { ReactComponent as DownArrow } from "../../../assets/icons/DownArrow.svg";

const HeroSection = () => {
  return (
    <div className="min-h-[85vh] flex flex-col items-center gap-y-16 justify-center">
      <div className="flex justify-center items-center flex-col">
        <p
          className="font-accent leading-tight text-richblack-5"
          style={{ fontSize: "clamp(1rem, 9vw, 6.6rem)" }}
        >
          Transparency in Love
        </p>
        <p
          className="font-accent leading-tight text-richblack-5"
          style={{ fontSize: "clamp(1rem, 9vw, 6.6rem)" }}
        >
          Unveiling Marital Pasts
        </p>
      </div>
      <p
        className="font-caveat font-thin leading-none text-richblack-5"
        style={{ fontSize: "clamp(1rem, 2vw, 2.5rem)" }}
      >
        Ensure Marital Status of your potential partner Before Committing
      </p>
      <FirstFancyBTN text={"Check Status"} />
      <DownArrow />
    </div>
  );
};

export default HeroSection;
