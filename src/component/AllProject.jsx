import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/ProjectData";
import { motion } from "framer-motion";

const AllProject = () => {
  const [selectedCategory, setSelectedCategory] = useState("Web Development");
  const navigate = useNavigate();

  // Filter proyek berdasarkan kategori
  const filteredProjects = projects.filter((project) => project.category === selectedCategory);

  const handleProjectClick = (id) => {
    navigate(`/project/${id}`); // Mengarahkan ke halaman detail proyek
  };

  return (
    <div className="bg-gray-800 p-6 pt-24">
      {/* Tombol Kategori */}
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 max-w-6xl mx-auto mt-6">
        <div className="flex items-center justify-center text-center text-white w-full h-24">
          <button onClick={() => setSelectedCategory("Web Development")} className={`mx-2 px-4 py-2 ${selectedCategory === "Web Development" ? "bg-orange-700" : "bg-orange-600"} rounded-lg hover:bg-orange-700`}>
            Web Development
          </button>
          <button onClick={() => setSelectedCategory("Other")} className={`mx-2 px-4 py-2 ${selectedCategory === "Other" ? "bg-orange-700" : "bg-orange-600"} rounded-lg hover:bg-orange-700`}>
            Other
          </button>
        </div>
      </div>

      {/* Grid Proyek */}
      <motion.div
        className="grid grid-cols-1 justify-center sm:grid-cols-2 gap-6 max-w-6xl mx-auto mt-6"
        initial={{ opacity: 0, y: 50 }} // Animasi awal: redup dan bergeser ke bawah
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }} // Durasi animasi
      >
        {filteredProjects.map((project, index) => (
          <motion.div key={index} className="group relative cursor-pointer flex flex-col  h-full min-h-[300px]" onClick={() => handleProjectClick(project.id)} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <div className="relative flex-grow">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 flex p-4 items-center justify-center bg-gray-950 bg-opacity-70 opacity-100 group-hover:opacity-0 transition duration-300">
              <div className="absolute top-0 left-0 bg-orange-500 rounded-br-lg px-1">
                <p className="text-white font-bold m-2">{project.year}</p>
              </div>
              <div className="text-center">
                <p className="text-white md:text-2xl font-extrabold">{project.title}</p>
                <p className="text-white font-bold">{project.description}</p>
                <div className="relative flex flex-wrap mt-3 justify-center">
                  {project.technologies.map((tech, idx) => {
                    // Tentukan ukuran font berdasarkan panjang teks dan tampilan layar
                    const textSize = tech.length > 10 ? "text-sm" : "text-base"; // Logika berdasarkan panjang teks
                    return (
                      <div key={idx} className={`bg-gray-300 rounded-lg md:px-3 md:py-2 px-2 py-1 m-1 font-bold ${textSize} sm:px-2 sm:py-1`}>
                        {tech}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AllProject;
