import { useState } from "react";
import f4 from "../assets/img/f3.png";

const projects = [
  {
    title: "Customer LPG Pertamina",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut dolorem quis totam, veritatis laborum omnis explicabo quas.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "Javascript", "jQuery", "AJAX"],
    image: f4,
    category: "Web Development",
  },
  {
    title: "Brata Cerdas",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut dolorem quis totam, veritatis laborum omnis explicabo quas.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "Javascript", "jQuery", "AJAX", "Google OAuth", "Google Analytics"],
    image: f4,
    category: "Web Development",
  },
  {
    title: "Asset Management",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut dolorem quis totam, veritatis laborum omnis explicabo quas.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "Javascript", "jQuery", "AJAX"],
    image: f4,
    category: "Web Development",
  },
  {
    title: "SIAMI",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut dolorem quis totam, veritatis laborum omnis explicabo quas.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "Javascript", "jQuery", "Google OAuth"],
    image: f4,
    category: "Web Development",
  },
  {
    title: "Monitoring DC",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut dolorem quis totam, veritatis laborum omnis explicabo quas.",
    technologies: ["Codeigniter", "MySQL", "Bootstrap", "Javascript", "jQuery", "Google OAuth", "SSO"],
    image: f4,
    category: "Web Development",
  },
  {
    title: "Peminjaman Ruang",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut dolorem quis totam, veritatis laborum omnis explicabo quas.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "Javascript", "jQuery"],
    image: f4,
    category: "Web Development",
  },
  {
    title: "Predictive Maintenance",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut dolorem quis totam, veritatis laborum omnis explicabo quas.",
    technologies: ["Data Preprocessing", "Data Training", "Undersampled Data", " Optuna Optimization", "SVM", "KNN", "Random Forest", "Roc Curves"],
    image: f4,
    category: "Other",
  },
];
const AllProject = () => {
  const [selectedCategory, setSelectedCategory] = useState("Web Development");

  // Filter proyek berdasarkan kategori
  const filteredProjects = projects.filter((project) => project.category === selectedCategory);

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
      <div className="grid grid-cols-1 justify-center sm:grid-cols-2 gap-6 max-w-6xl mx-auto mt-6">
        {filteredProjects.map((project, index) => (
          <div key={index} className="group relative cursor-pointer">
            <img src={project.image} alt={project.title} className="w-full h-full" />
            <div className="absolute inset-0 flex p-4 items-center justify-center bg-gray-950 bg-opacity-70 opacity-100 group-hover:opacity-0 transition duration-300">
              <div className="text-center">
                <p className="text-white md:text-2xl font-extrabold">{project.title}</p>
                <p className="text-white font-bold">{project.description}</p>
                <div className="relative flex flex-wrap mt-3 justify-center">
                  {project.technologies.map((tech, idx) => {
                    // Tentukan ukuran font berdasarkan panjang teks
                    const textSize = tech.length > 10 ? "text-sm" : "text-md"; // Ubah logika ini sesuai kebutuhan
                    return (
                      <div key={idx} className={`bg-gray-300 rounded-lg px-2 py-2 m-2 font-bold  ${textSize}`}>
                        {tech}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProject;
