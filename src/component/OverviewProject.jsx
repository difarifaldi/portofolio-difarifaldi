import smpl from "../assets/img/smpl.jpeg";
import { motion } from "framer-motion";

const OverviewProject = () => {
  return (
    <div className="bg-gray-800 p-6 pt-24">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 max-w-6xl mx-auto mt-6">
        {/* Bagian Teks di luar gambar (untuk layar besar) */}
        <motion.div
          className="hidden sm:flex flex-col text-center sm:text-left"
          initial={{ opacity: 0, scale: 0.8 }} // Mulai dengan transparan dan kecil
          whileInView={{ opacity: 1, scale: 1 }} // Muncul dengan opacity penuh dan ukuran normal
          transition={{ duration: 1 }} // Durasi animasi
          viewport={{ once: true }}
        >
          <h3 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold">
            <span className="mr-3">My</span> <span className="text-orange-400 absolute z-50">Projects</span>
          </h3>
        </motion.div>

        {/* Bagian Gambar */}
        <div className="relative h-full max-w-[800px] overflow-hidden rounded-lg">
          {/* Gambar */}
          <motion.img
            src={smpl}
            alt="Profile"
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }} // Mulai dengan transparan
            whileInView={{ opacity: 1 }} // Muncul dengan opacity penuh saat di-scroll
            transition={{ duration: 1 }} // Durasi animasi
            viewport={{ once: true }}
          />

          {/* Teks di dalam gambar (untuk layar kecil) */}
          <div className="absolute inset-0 flex items-center justify-center sm:hidden">
            <h3 className="text-white text-3xl font-extrabold bg-black/50 px-4 py-2 rounded-lg">
              My <span className="text-orange-400">Projects</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewProject;
