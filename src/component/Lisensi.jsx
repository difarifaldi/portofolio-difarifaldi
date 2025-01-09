import arrow from "../assets/img/nj.png";
import { motion } from "framer-motion";

const License = () => {
  return (
    <div className="bg-gray-800 p-6 pt-4">
      <div className="flex justify-between items-center gap-6 max-w-5xl mx-auto mt-6">
        {/* Lisensi Title with Animation */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }} // Triggers when the element enters the viewport
        >
          <p className="text-white text-left text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">LICENSE</p>
        </motion.div>

        {/* Arrow Image with Animation (first hidden, then centered with a scale effect) */}
        <motion.img
          src={arrow}
          alt="Arrow"
          className="w-full h-full sm:block hidden"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }} // Keeps the animation active while in view
        />

        {/* Lisensi List with Animation (appear from right side one by one) */}
        <motion.div
          className="text-white space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }} // Keeps the animation active while in view
        >
          {/* Software Engineering */}
          <motion.div
            className="relative group p-4 text-center border-2 border-transparent hover:border-white transition duration-300 hover:bg-orange-400 cursor-pointer"
            onClick={() => window.open("/path-to-file/software-engineering.pdf", "_blank")}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }} // Triggers animation when this element enters the viewport
          >
            <i className="fa fa-laptop-code text-xl mb-2 block"></i>
            <p className="font-bold">Software Engineering (Java Technologies)</p>
            <p>DNIIT</p>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300">
              <i className="fa fa-download mr-2"></i>
              <span>Download</span>
            </div>
          </motion.div>

          {/* Junior Web Developer */}
          <motion.div
            className="relative group p-4 text-center border-2 border-transparent hover:border-white transition duration-300 hover:bg-orange-400 cursor-pointer"
            onClick={() => window.open("/path-to-file/junior-web-developer.pdf", "_blank")}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }} // Triggers animation when this element enters the viewport
          >
            <i className="fa fa-globe text-xl mb-2 block"></i>
            <p className="font-bold">Junior Web Developer</p>
            <p>Badan Nasional Sertifikasi Profesi</p>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300">
              <i className="fa fa-download mr-2"></i>
              <span>Download</span>
            </div>
          </motion.div>

          {/* Web Developer */}
          <motion.div
            className="relative group p-4 text-center border-2 border-transparent hover:border-white transition duration-300 hover:bg-orange-400 cursor-pointer"
            onClick={() => window.open("/path-to-file/web-developer.pdf", "_blank")}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }} // Triggers animation when this element enters the viewport
          >
            <i className="fa fa-globe text-xl mb-2 block"></i>
            <p className="font-bold">Web Developer</p>
            <p>Badan Nasional Sertifikasi Profesi</p>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300">
              <i className="fa fa-download mr-2"></i>
              <span>Download</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default License;
