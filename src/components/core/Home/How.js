import React from "react";

import HowImage from "../../../assets/images/How.jpg";
import Spouse from "../../../assets/images/Spouse.png";
import Fetched from "../../../assets/images/Fetched.png";

const How = () => {
  return (
    <div
      className="min-h-[100vh] w-full relative"
      style={{
        backgroundImage: `url(${HowImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="absolute inset-0 w-full h-full bg-richblack-500 
        bg-opacity-70"
      ></div>
      <div
        className="flex min-h-[100vh] flex-col items-center gap-y-16 
        justify-center w-11/12 max-w-maxContent mx-auto bg-fixed"
      >
        <p
          className="font-accent text-richblack-5 font-bold text-center 
          leading-normal z-10"
          style={{ fontSize: "clamp(1rem, 9vw, 4rem)" }}
        >
          How we gonna solve this Problem?
        </p>
        <div className="flex justify-center items-center gap-x-8">
          <div className="flex justify-center items-center flex-col">
            <p
              className="font-primary text-richblack-5 text-[1.5rem] text-center 
              leading-normal font-semibold z-10"
            >
              Step 1
            </p>
            <p
              className="font-primary text-richblack-5 text-[1.5rem] text-center 
              leading-normal font-semibold z-10"
            >
              Upload the image of your potential partner
            </p>
          </div>
          <img src={Spouse} className="h-[460px] w-[480px] z-10" />
        </div>
      </div>
      <div
        className="flex min-h-[100vh] flex-col items-center gap-y-16 
        justify-center w-11/12 max-w-maxContent mx-auto"
      >
        <p
          className="font-accent text-richblack-5 font-bold text-center 
          leading-normal z-10"
          style={{ fontSize: "clamp(1rem, 9vw, 4rem)" }}
        >
          How we gonna solve this Problem?
        </p>
        <div className="flex justify-center items-center flex-col">
          <p
            className="font-montserrat text-richblack-5 text-[1.5rem] text-center 
            leading-normal font-semibold z-10"
          >
            Step 2
          </p>
          <p
            className="font-montserrat text-richblack-5 text-[1.5rem] text-center 
            leading-normal font-semibold z-10"
          >
            We will use State of the Art Face Verification AI models to
            recognize the person from Government Marriage Records Database and
            Marriage Fraud Criminal Database, instantly
          </p>
        </div>
      </div>
      <div
        className="flex min-h-[100vh] flex-col items-center gap-y-16 
        justify-center w-11/12 max-w-maxContent mx-auto z-10"
      >
        <p
          className="font-accent text-richblack-5 font-bold text-center 
          leading-normal z-10"
          style={{ fontSize: "clamp(1rem, 9vw, 4rem)" }}
        >
          How we gonna solve this Problem?
        </p>
        <div className="flex justify-center items-center gap-x-8">
          <div className="flex justify-center items-center flex-col">
            <p
              className="font-primary text-richblack-5 text-[1.5rem] text-center 
              leading-normal font-semibold z-10"
            >
              Step 3
            </p>
            <p
              className="font-primary text-richblack-5 text-[1.5rem] text-center 
              leading-normal font-semibold z-10"
            >
              If we find any match we will display their picture in Government
              Marriage Records for confirmation with a question, Is this your
              Partner?
            </p>
          </div>
          <img src={Fetched} className="h-[460px] w-[480px] z-10" />
        </div>
      </div>
      <div
        className="flex min-h-[100vh] flex-col items-center gap-y-16 
        justify-center w-11/12 max-w-maxContent mx-auto"
      >
        <p
          className="font-accent text-richblack-5 font-bold text-center 
          leading-normal z-10"
          style={{ fontSize: "clamp(1rem, 9vw, 4rem)" }}
        >
          How we gonna solve this Problem?
        </p>
        <div className="flex justify-center items-center flex-col">
          <p
            className="font-montserrat text-richblack-5 text-[1.5rem] text-center 
            leading-normal font-semibold z-10"
          >
            Step 4
          </p>
          <p
            className="font-montserrat text-richblack-5 text-[1.5rem] text-center 
            leading-normal font-semibold z-10"
          >
            If you click on yes then we will display a document id corresponding
            to the personal details of the your potential partner’s spouse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default How;
