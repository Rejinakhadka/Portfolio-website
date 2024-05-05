import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas, EarthCanvas } from "./canvas";
import Rejinaa from "../assets/rejinaa.jpeg";

const Hero = () => {
  return (
    <section className="w-full h-screen mx-auto relative">
      <div className="absolute inset-0 top-36  gap-7 flex-row mx-auto items-start sm:px-16 px-6 flex justify-between">
        <div className="flex gap-[3rem]">
          {" "}
          <div className="flex flex-col  items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 h-40 violet-gradient sm:h-[350px]" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Rejina</span>
            </h1>

            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I recently graduated in Bsc.CSIT ,{" "}
              <br className="sm:block hidden" /> and I am particularly
              interested in <br className="sm:block hidden" /> front-end
              development. <br className="sm:block hidden" /> I love creating
              user-friendly designs <br className="sm:block hidden" /> and
              keeping up with the latest trends{" "}
              <br className="sm:block hidden" /> in technology.
            </p>
          </div>
        </div>
        <div>

          <ComputersCanvas/>
        </div>
      </div>
      <div className="absolute top-[550px] w-full flex justify-center items-start p-2">
      <a href="#about">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2">
          <motion.div
             animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
        </div>
        </a>
      </div>

    </section>
  );
};
export default Hero;
