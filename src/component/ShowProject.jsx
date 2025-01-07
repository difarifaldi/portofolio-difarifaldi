import { useParams } from "react-router-dom"; // Import useParams untuk mengambil ID dari URL
import PropTypes from "prop-types"; // Import PropTypes untuk validasi props

const ShowProject = ({ projects }) => {
  const { id } = useParams(); // Ambil ID proyek dari URL
  const project = projects.find((proj) => proj.id === parseInt(id)); // Mengonversi id menjadi angka

  if (!project) {
    return <div>Project not found!</div>; // Jika proyek tidak ditemukan
  }

  return (
    <div className="bg-gray-800 p-6 pt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-4xl font-extrabold">{project.title}</h1>
        <p className="text-white mt-4">{project.description}</p>
        <div className="mt-6">
          <h2 className="text-white text-xl font-bold">Technologies Used:</h2>
          <ul className="list-disc pl-5 text-white">
            {project.technologies.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </ul>
        </div>
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
