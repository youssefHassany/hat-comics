import { motion } from "framer-motion";
import spiderman from "../../assets/spiderman.png";
import superman from "../../assets/superman.png";
import batman from "../../assets/batman.png";

const Hero = () => {
  return (
    <section className="hero w-screen h-[90vh] bg-no-repeat">
      <div className="bg-black bg-opacity-90 w-full h-full flex flex-col md:flex-row-reverse justify-evenly items-center p-12">
        <motion.div
          transition={{ duration: 0.8 }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          className="text-white text-center font-bold"
        >
          <h1 className="text-[50px] my-6">هات كوميكس</h1>
          <p>بوابتك لعالم الكوميكس</p>
        </motion.div>

        {/* Superheroes icons */}
        <motion.div
          transition={{ duration: 0.8 }}
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: -40 }}
          exit={{ opacity: 0, x: 0 }}
          className="text-white font-bold md:flex hidden"
        >
          <img
            src={spiderman}
            className="w-32 hover:-translate-y-2 duration-200"
          />
          <img
            src={superman}
            className="w-32 hover:-translate-y-2 duration-200"
          />
          <img
            src={batman}
            className="w-32 hover:-translate-y-2 duration-200"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
