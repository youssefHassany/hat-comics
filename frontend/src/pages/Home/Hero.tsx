import { motion } from "framer-motion";
// import spiderman from "../../assets/spiderman.png";
// import superman from "../../assets/superman.png";
// import batman from "../../assets/batman.png";

const Hero = () => {
  return (
    <motion.section
      transition={{ duration: 0.8 }}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -40 }}
      exit={{ opacity: 0, y: 0 }}
      className="hero min-h-screen bg-base-200"
    >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Hat
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-600 to-red-700">
              Comics
            </span>
          </h1>
          <div className="py-8 font-medium text-lg">
            <p>بوابتك لعالم و مجتمع الكوميكس</p>
            <p>نوفر لك إقتراحات , مقالات , محتوى و المزيد</p>
          </div>
          <div className="w-full flex justify-center gap-2">
            <button className="btn btn-primary bg-gray-700 border-none hover:bg-gray-700 hover:bg-opacity-70 text-white">
              تصفح كزائر
            </button>
            <button className="btn btn-primary bg-orange-500 border-none hover:bg-orange-700 text-white">
              تسجيل الدخول
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
