import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter"
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="hero" id="home">
      <div className="blur blur-hero"></div>
      <div className="left-h">
        <Header />
        {/*the best ad*/}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The best fitness clup in the town</span>
        </div>
        {/* Hero Heading*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* Figures*/}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay="4" preFix="+" />
            </span>
            <span>Members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={20} delay="4" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        {/*Hero Buttons*/}
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          transition={transition}
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          className="heart-rate"
        >
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* Hero Image */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          transition={transition}
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />
        {/* Calories*/}
        <motion.div
          transition={transition}
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          className="calories"
        >
          <img src={calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
