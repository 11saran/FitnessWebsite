import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/*the best ad*/}
        <div className="the-best-ad">
          <div></div>
          <span>The best fitness clup in the town</span>
        </div>
        {/* Hero Heading*/}
        
      </div>
      <div className="right-h">Right side</div>
    </div>
  );
};

export default Hero;
