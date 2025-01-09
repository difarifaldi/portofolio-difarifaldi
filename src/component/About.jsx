import { Link } from "react-router-dom";
import wisuda from "../assets/img/wisuda.jpg";

const About = () => {
  return (
    <div className="bg-gray-800 p-6 pt-24" id="about">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 max-w-6xl mx-auto mt-6">
        {/* Bagian Gambar */}
        <div className="w-1/2 md:w-1/2 sm:w-1/3 h-auto rounded-full border-4 border-white overflow-hidden">
          <img src={wisuda} alt="Profile" className="w-full h-full object-cover" />
        </div>

        {/* Bagian Teks */}
        <div className="flex flex-col text-center sm:mt-0 sm:text-left">
          <h3 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold">About Me</h3>
          <Link to="/about">
            <button className="relative flex items-center justify-center gap-2 py-2 px-6 mt-4 rounded-lg text-white bg-transparent border border-white group hover:bg-orange-400 hover:pr-10 transition-all duration-300 ease-in-out">
              {/* Teks */}
              <span className="block transition-all duration-300 ease-in-out group-hover:mr-4">See Detail</span>
              {/* Ikon Panah */}
              <span className="absolute right-4 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:right-6">
                <i className="fa fa-arrow-right"></i>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
