import { motion } from "framer-motion";

const Experience = () => {
  const experienceItems = [
    {
      title: "PT. ATLAS KAPITA PERKASA | FULLTIME",
      period: "NOVEMBER 2024 - PRESENT",
      description: "Developed the Bratacerdas website, designed for tutoring tests provided by the Traffic Corps of the Indonesian National Police (Korlantas Polri) for the general public",
      skills: ["Laravel", "MySQL", "Bootstrap", "Javascript", "jQuery", "Google OAuth", "Google Analytics", "cPanel"],
    },
    {
      title: "UNIT PEMJAMINAN MUTU - POLITEKNIK NEGERI JAKARTA | REMOTE",
      period: "JULY 2024 - PRESENT",
      description: "Designed system mockups, developed the SIAMI system to support internal quality audits at Politeknik Negeri Jakarta, and ensured its maintenance for optimal performance.",
      skills: ["Laravel", "MySQL", "Bootstrap", "Javascript", "jQuery", "Google OAuth"],
    },
    {
      title: "FREELANCE",
      period: "JULY 2024 - PRESENT",
      description: "Developed and maintained web-based systems tailored to client needs, ensuring functionality, user-friendly interfaces, and scalability",
      skills: ["Laravel", "MySQL", "Bootstrap", "Javascript", "jQuery"],
    },
    {
      title: "BADAN PUSAT STATISTIK RI | INTERNSHIP",
      period: "AUGUST 2023 - NOVEMBER 2023",
      description: "Developed a data center monitoring system for the JKD Division of Statistics Indonesia (BPS RI) and assisted in monitoring equipment within the data center.",
      skills: ["Codeigniter", "MySQL", "Bootstrap", "Javascript", "jQuery", "Google OAuth", "SSO", "cPanel"],
    },
    {
      title: "JURUSAN AKUNTANSI - POLITEKNIK NEGERI JAKARTA | PROJECT-BASED",
      period: "APRIL 2023 - JUNE 2023",
      description: "Designed process workflows, created mockups, and developed a room borrowing system for the Accounting Department to improve the efficiency of the borrowing process",
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
            whileInView={{ opacity: 1 }} // Efek saat elemen terlihat di layar
            initial={{ opacity: 0 }} // Efek awal: tersembunyi
            transition={{ delay: index * 0.2, duration: 0.4 }} // Durasi animasi dan delay berdasarkan urutan
            viewport={{ once: false, amount: 0.25 }} // Triggers ketika elemen 25% terlihat di layar
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
