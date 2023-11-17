import React from "react";
import HeroSection from "../components/core/Home/HeroSection";

import WhySection from "../components/core/Home/WhySection";
import FraudMen from "../components/core/Home/FraudMen";
import WhySection2 from "../components/core/Home/WhySection2";
import FraudWomen from "../components/core/Home/FraudWomen";
import How from "../components/core/Home/How";
import MoreInfo from "../components/core/Home/MoreInfo";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
      <WhySection />
      <FraudMen />
      <WhySection2 />
      <FraudWomen />
      <How />
      <MoreInfo />
      <Footer />
    </div>
  );
};

export default Home;
