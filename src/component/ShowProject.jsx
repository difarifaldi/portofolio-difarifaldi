import { useParams } from "react-router-dom"; // Import useParams untuk mengambil ID dari URL
import PropTypes from "prop-types"; // Import PropTypes untuk validasi props
import { useEffect } from "react";
import { motion } from "framer-motion";

const ShowProject = ({ projects }) => {
  const { id } = useParams(); // Ambil ID proyek dari URL
  const project = projects.find((proj) => proj.id === parseInt(id)); // Mengonversi id menjadi angka
  useEffect(() => {
    // Menggulirkan halaman ke atas saat komponen Detail dimuat
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div>Project not found!</div>; // Jika proyek tidak ditemukan
  }

  return (
    <div className="bg-gray-800  pt-16 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2  max-w-7xl mx-auto mt-6">
        <motion.div className="p-8 " initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-gray-500 text-2xl font-extrabold">PROJECT NAME</h1>
          <h1 className="text-white text-3xl font-extrabold">{project.title}</h1>
          <div className="mt-6">
            <h1 className="text-gray-500 text-2xl font-extrabold">TECHNOLOGY</h1>
            <p className="text-white text-2xl">{project.technologies.join(", ")}</p>
          </div>
          <div className="mt-6">
            <h1 className="text-gray-500 text-2xl font-extrabold">YEAR</h1>
            <p className="text-white text-2xl">{project.year}</p>
          </div>
        </motion.div>
        <motion.div className="p-8 " initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-gray-500 text-2xl font-extrabold">DESCRIPTION</h1>
          <p className="text-white text-xl text-justify">{project.full_description}</p>
        </motion.div>
      </div>
      <div className="flex flex-col items-center">
        {project.full_image.map((image, idx) => {
          return (
            <motion.div key={idx} className="w-1/2 md:w-1/2 sm:w-1/3 h-auto my-4 overflow-hidden" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
              <img src={image} alt={`Image ${idx}`} className="w-full border-4 border-gray-400 h-full object-cover" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// Menambahkan validasi PropTypes
ShowProject.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default ShowProject;
