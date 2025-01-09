import arrow from "../assets/img/nj.png";
import { motion } from "framer-motion";
import jwd from "../assets/file/jwd.pdf";
import wd from "../assets/file/wd.pdf";
import niit from "../assets/file/niit.pdf";

const License = () => {
  return (
    <div className="bg-gray-800 p-6 pt-4">
      <div className="flex justify-between items-center gap-6 max-w-5xl mx-auto mt-6">
        {/* Lisensi Title with Animation */}
        <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: false }}>
          <p className="text-white text-left text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">LICENSE</p>
        </motion.div>

        {/* Arrow Image with Animation */}
        <motion.img src={arrow} alt="Arrow" className="w-full h-full sm:block hidden" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: false }} />

        {/* Lisensi List with Sequential Animation */}
        <div className="text-white space-y-4">
          {[
            {
              icon: "fa-laptop-code",
              title: "Software Engineering (Java Technologies)",
              subtitle: "DNIIT",
              file: niit,
            },
            {
              icon: "fa-globe",
              title: "Junior Web Developer",
              subtitle: "Badan Nasional Sertifikasi Profesi",
              file: jwd,
            },
            {
              icon: "fa-globe",
              title: "Web Developer",
              subtitle: "Badan Nasional Sertifikasi Profesi",
              file: wd,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative group p-4 text-center border-2 border-transparent hover:border-white transition duration-300 hover:bg-orange-400 cursor-pointer"
              onClick={() => window.open(item.file, "_blank")}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              viewport={{ once: false }}
            >
              <i className={`fa ${item.icon} text-xl mb-2 block`}></i>
              <p className="font-bold">{item.title}</p>
              <p>{item.subtitle}</p>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300">
                <i className="fa fa-download mr-2"></i>
                <span>Download</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default License;
