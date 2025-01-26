import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import rightArrow from "../../assets/rightArrow.png";
import leftArrow from "../../assets/leftArrow.png";
import { motion } from "framer-motion";
import { type } from "@testing-library/user-event/dist/type";
function Testimonials() {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  const transition = {type:"spring", duration:3}
  return (
    <div className="Testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>

      <div className="right-t">
        <motion.div
          transition={{ ...transition, duration: 2 }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          transition={{ ...transition, duration: 2 }}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
        />
        <div className="arrows">
          <img
            onClick={() =>
              setSelected((prev) => (prev === 0 ? tLength - 1 : prev - 1))
            }
            src={leftArrow}
            alt="Left Arrow"
          />
          <img
            onClick={() =>
              setSelected((prev) => (prev === tLength - 1 ? 0 : prev + 1))
            }
            src={rightArrow}
            alt="Right Arrow"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
