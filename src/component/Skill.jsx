import { motion } from "framer-motion";

const Skill = () => {
  return (
    <div className="bg-gray-800 p-6 pt-20">
      <p className="text-white text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">SKILL</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto mt-6">
        <motion.div
          className="bg-gray-700 p-6 rounded-lg shadow-lg text-white text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }} // Delay agar muncul setelah beberapa waktu
        >
          <h3 className="text-2xl font-bold">FRAMEWORK & LANGUAGE</h3>
          <div className="relative justify-center flex flex-wrap mt-3">
            <div className="m-1 ">
              PHP <span className="text-orange-400 font-bold">|</span>
            </div>
            <div className="m-1">
              Java <span className="text-orange-400 font-bold">|</span>
            </div>
            <div className="m-1">
              Python <span className="text-orange-400 font-bold">|</span>
            </div>
            <div className="m-1">
              VB.Net <span className="text-orange-400 font-bold">|</span>
            </div>
            <div className="m-1">
              Laravel <span className="text-orange-400 font-bold">|</span>
            </div>
            <div className="m-1">
              Codeigniter <span className="text-orange-400 font-bold">|</span>
            </div>
            <div className="m-1">
              MySQL <span className="text-orange-400 font-bold">|</span>
            </div>
            <div className="m-1">
              Firebase <span className="text-orange-400 font-bold">|</span>
            </div>
            <div className="m-1">
              CSS <span className="text-orange-400 font-bold">|</span>
            </div>
            <div className="m-1">
              Bootstrap <span className="text-orange-400 font-bold">|</span>
            </div>
            <div className="m-1">
              Tailwind <span className="text-orange-400 font-bold">|</span>
            </div>
            <div className="m-1">
              Javascript <span className="text-orange-400 font-bold">|</span>
            </div>
            <div className="m-1">
              jQuery <span className="text-orange-400 font-bold">|</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-gray-700 p-6 rounded-lg shadow-lg text-white text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }} // Penundaan sedikit lebih lama untuk elemen kedua
        >
          <h3 className="text-2xl font-bold">TOOLS</h3>
          <div className="relative justify-center flex flex-wrap mt-3">
            <div className="m-1">
              Figma <span className="text-orange-400 font-bold">|</span>
            </div>
            <div className="m-1">
              Adobe Ilustrator <span className="text-orange-400 font-bold">|</span>
            </div>
            <div className="m-1">
              Canva <span className="text-orange-400 font-bold">|</span>
            </div>
            <div className="m-1">
              Jupyter Notebook <span className="text-orange-400 font-bold">|</span>
            </div>
            <div className="m-1">
              Android Studio <span className="text-orange-400 font-bold">|</span>
            </div>
            <div className="m-1">
              Git <span className="text-orange-400 font-bold">|</span>
            </div>
            <div className="m-1">
              Github <span className="text-orange-400 font-bold">|</span>
            </div>
            <div className="m-1">
              Gitlab <span className="text-orange-400 font-bold">|</span>
            </div>
            <div className="m-1">
              cPanel <span className="text-orange-400 font-bold">|</span>
            </div>
            <div className="m-1">
              Bizagi <span className="text-orange-400 font-bold">|</span>
            </div>
            <div className="m-1">
              Visual Studio Code <span className="text-orange-400 font-bold">|</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skill;
