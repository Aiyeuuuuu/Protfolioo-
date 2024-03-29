import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* the header and image*/}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"  
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            <span className="text-purple-500">MY SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
          As a passionate student of data science, I'm continuously refining my skills to excel in the dynamic landscape of
           data analysis and interpretation.
          </p>
        </motion.div>

        <div className="mt-5 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-80 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-0 gap-32">
        {/* frist  */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-21">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                DATA SCIENCE 
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          Utilizing data analytics, machine learning, and statistical modeling to extract insights for informed decision-making.  
          </p>
        </motion.div>

        {/* Second */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-21">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                UI/UX DESIGN 
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          Crafting intuitive and visually appealing user interfaces,
           ensuring seamless interactions and delightful user experiences.
          </p>
        </motion.div>
        {/* Third */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-21">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                WEB DEVELOPMENT
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          Crafting responsive, user-friendly websites using HTML, CSS, React, and more to bring digital ideas to life.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
