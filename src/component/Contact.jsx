import { motion } from "framer-motion";
import wisuda from "../assets/img/wisuda.jpg";

const Contact = () => {
  return (
    <div className="bg-gray-800 p-6 pt-24" id="contact">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-6xl mx-auto mt-6">
        {/* Bagian Teks */}
        <motion.div className="flex flex-col max-w-2xl md:mr-0 sm:mr-6 text-center sm:text-left" initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <p className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">Get In Touch</p>
          <p className="text-white">Feel free to reach out! I&apos;m always open to connecting and happy to assist with any inquiries.</p>
          <div className="flex flex-wrap gap-4 mt-4">
            {/* Ikon dengan efek hover */}
            <a href="https://www.instagram.com/difa_rifaldi/" target="_blank" rel="noopener noreferrer">
              <div className="bg-gray-500 px-3 py-2 rounded-full text-center text-white hover:bg-violet-900 transition-colors duration-300">
                <i className="fab fa-instagram text-xl"></i>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-difa-rifaldi-b2a5b6157/" target="_blank" rel="noopener noreferrer">
              <div className="bg-gray-500 px-3 py-2 rounded-full text-center text-white hover:bg-blue-700 transition-colors duration-300">
                <i className="fab fa-linkedin text-xl"></i>
              </div>
            </a>
            <a href="https://github.com/difarifaldi" target="_blank" rel="noopener noreferrer">
              <div className="bg-gray-500 px-3 py-2 rounded-full text-center text-white hover:bg-black transition-colors duration-300">
                <i className="fab fa-github text-xl"></i>
              </div>
            </a>
            <a href="mailto:difarifaldi0906@gmail.com">
              <div className="bg-gray-500 px-3 py-2 rounded-full text-center text-white hover:bg-red-500 transition-colors duration-300">
                <i className="fas fa-envelope text-xl"></i>
              </div>
            </a>
            <a href="https://maps.app.goo.gl/dAv4BtJcMsQYKkFn9" target="_blank" rel="noopener noreferrer">
              <div className="bg-gray-500 px-3 py-2 rounded-full text-center text-white hover:bg-green-600 transition-colors duration-300">
                <i className="fas fa-map-location text-xl"></i>
              </div>
            </a>
          </div>
        </motion.div>
        {/* Bagian Gambar */}
        <motion.div className="w-1/2 md:w-1/2 sm:w-1/3 h-auto border-4 border-white overflow-hidden" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <img src={wisuda} alt="Profile" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
