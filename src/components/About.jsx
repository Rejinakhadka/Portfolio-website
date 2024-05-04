import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import StarWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { FaReact } from "react-icons/fa";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className=" green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src="https://cdn.sanity.io/images/dn908w7j/production/45c7b8345cbf35abd1e4216bda5c0e9e6bee66f4-500x500.png"
          alt="web-development"
          className="w-16 h-16 object-contain"
        />
   

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[18px] leading-8"
      >
        I am an enthusiastic and motivated software developer with a passion for
        learning and growth in the field. I stay updated with the latest trends
        and technologies, constantly seeking to leverage new tools and
        methodologies to enhance my skills. My expertise lies in React.js, and I
        find immense joy in what I do.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default StarWrapper(About, "about");
