import { motion } from "framer-motion";
import wisuda2 from "../assets/img/wisuda2.jpg";

const Education = () => {
  return (
    <div className="bg-gray-800 p-6 pt-12">
      <p className="text-white text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">EDUCATION</p>
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 max-w-6xl mx-auto mt-6">
        {/* Bagian Gambar */}
        <motion.div className="w-1/2 md:w-1/2 sm:w-1/3 h-auto rounded-full border-4 border-white overflow-hidden" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          <img src={wisuda2} alt="Profile" className="w-full h-full object-cover" />
        </motion.div>

        {/* Bagian Teks */}
        <motion.div className="flex flex-col text-center sm:mt-0 sm:text-left " initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.11 }} viewport={{ once: false }}>
          {/* SMA */}
          <motion.div className="bg-orange-400 rounded-lg p-4 mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: false }}>
            <h3 className="font-bold text-white md:text-lg">SMA IPA, SMA Negeri 8 Depok</h3>
            <p className="text-white">Nilai Rata-rata: 88.40</p>
          </motion.div>

          {/* D2 */}
          <motion.div className="bg-orange-400 rounded-lg p-4 mb-4 ml-0 sm:ml-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: false }}>
            <h3 className="font-bold text-white md:text-lg">D2 Software Engineer, CEP-CCIT FT Universitas Indonesia</h3>
            <p className="text-white">IPK: 3.4</p>
          </motion.div>

          {/* D4 */}
          <motion.div className="bg-orange-400 rounded-lg p-4 ml-0 sm:ml-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }} viewport={{ once: false }}>
            <h3 className="font-bold text-white md:text-lg">D4 Teknik Informatika, Politeknik Negeri Jakarta</h3>
            <p className="text-white">IPK: 3.4</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
