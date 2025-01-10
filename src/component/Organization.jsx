import "swiper/css"; // Import gaya dasar Swiper
import "swiper/css/pagination"; // Import gaya untuk pagination (opsional)
import "swiper/css/navigation"; // Import gaya untuk navigasi (opsional)

import { motion } from "framer-motion";

const Organization = () => {
  return (
    <div className="bg-gray-800 p-6 pt-24">
      <p className="text-white text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">ORGANIZATION</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto mt-6">
        <motion.div className="bg-gray-700 p-6 rounded-lg shadow-lg text-white" initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: false }}>
          <h3 className="text-2xl font-bold">Departemen Kerohanian - HIMATIK</h3>
          <p className="text-sm mt-2">2021</p>
          <p className="text-sm mt-2 text-justify">Responsible for producing weekly lecture video content, managing necessary equipment, and coordinating with the team to conduct on-site video shoots at the speakers&apos; locations.</p>
        </motion.div>

        <motion.div className="bg-gray-700 p-6 rounded-lg shadow-lg text-white" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: false }}>
          <h3 className="text-2xl font-bold">Komunitas Android</h3>
          <p className="text-sm mt-2">2019</p>
          <p className="text-sm mt-2 text-justify">Participated in weekly community activities to learn and develop Android-based applications using the Java programming language and Android Studio tools.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Organization;
