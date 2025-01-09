import { motion } from "framer-motion";
import b3 from "../assets/img/1.jpeg";
import cv from "../assets/file/cv.pdf";

const Profile = () => {
  return (
    <div className="bg-gray-800 p-6 pt-24" id="profile">
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto">
        {/* Bagian Teks */}
        <motion.div className="flex flex-col max-w-2xl sm:mr-6 text-center sm:text-left" initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <p className="text-white text-1xl font-semibold">Muhammad Difa Rifaldi</p>

          <p className="text-orange-400 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold my-4 overflow-hidden whitespace-nowrap animate-typing">Web Developer</p>

          <p className="text-white">
            memiliki motivasi tinggi, kemampuan bekerja sama dalam tim, serta mudah beradaptasi di lingkungan baru. Saya tertarik untuk terus mengembangkan keterampilan di bidang IT, khususnya sebagai frontend developer, backend developer,
            web developer, dan UI/UX designer
          </p>
          <a href={cv} download>
            <button className="border py-1 px-4 mt-4 rounded-lg hover:bg-orange-400 text-white">
              <i className="fa fa-file-download mr-2"></i>Download CV
            </button>
          </a>
        </motion.div>

        {/* Bagian Gambar */}
        <motion.div className="w-1/2 sm:w-1/3 md:w-1/4 h-auto rounded-full border-4 border-white overflow-hidden mt-6 sm:mt-0 mx-auto sm:mx-0" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <img src={b3} alt="Profile" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
