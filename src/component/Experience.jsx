import { motion } from "framer-motion";

const Experience = () => {
  const experienceItems = [
    {
      title: "PT. ATLAS KAPITA PERKASA",
      period: "NOVEMBER 2024 - PRESENT",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
      skills: ["Laravel", "MySQL", "Bootstrap", "Javascript", "jQuery", "Google OAuth", "Google Analytics", "cPanel"],
    },
    {
      title: "UNIT PEMJAMINAN MUTU - POLITEKNIK NEGERI JAKARTA",
      period: "JULY 2024 - PRESENT",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
      skills: ["Laravel", "MySQL", "Bootstrap", "Javascript", "jQuery", "Google OAuth"],
    },
    {
      title: "FREELANCE",
      period: "JULY 2024 - PRESENT",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
      skills: ["Laravel", "MySQL", "Bootstrap", "Javascript", "jQuery"],
    },
    {
      title: "BADAN PUSAT STATISTIK RI",
      period: "AUGUST 2023 - NOVEMBER 2023",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
      skills: ["Codeigniter", "MySQL", "Bootstrap", "Javascript", "jQuery", "Google OAuth", "SSO", "cPanel"],
    },
    {
      title: "JURUSAN AKUNTANSI - POLITEKNIK NEGERI JAKARTA",
      period: "APRIL 2023 - JUNE 2023",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
      skills: ["Laravel", "MySQL", "Bootstrap", "Javascript", "jQuery"],
    },
  ];

  return (
    <div className="bg-gray-800 p-6 pt-24">
      <p className="text-white text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">EXPERIENCE</p>
      <div className="max-w-6xl mx-auto mt-6">
        {experienceItems.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }} // Efek awal: tersembunyi di sebelah kiri
            animate={{ opacity: 1, x: 0 }} // Efek selesai: muncul dengan posisi normal
            transition={{ delay: index * 0.3, duration: 0.6 }} // Setiap experience muncul satu per satu dengan delay
          >
            <div className="relative flex py-6 text-white">
              {/* Roadmap Point */}
              <div className="w-8 h-8 bg-white rounded-full absolute left-[-12px] top-[-12px]"></div>
              {/* Border and Experience */}
              <div className="border-l-8 pl-4">
                <h3 className="text-2xl font-bold">{experience.title}</h3>
                <p className="text-sm mt-2">{experience.period}</p>
                <p className="text-sm mt-2 text-justify">{experience.description}</p>
                <div className="relative flex flex-wrap mt-3">
                  {experience.skills.map((skill, idx) => (
                    <div key={idx} className="bg-gray-700 rounded-lg p-2 m-1">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
