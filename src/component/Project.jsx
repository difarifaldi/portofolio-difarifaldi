import { Link } from "react-router-dom";
import f1 from "../assets/img/pinjam.png";
import f2 from "../assets/img/bps.png";
import f3 from "../assets/img/siami.png";
import f4 from "../assets/img/bc.png";

const Project = () => {
  return (
    <div className="bg-gray-800 pt-24" id="project">
      <h3 className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold">My Project</h3>
      {/* Container */}
      <Link to="/detail-project">
        <div className="relative mt-12 grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto md:gap-0 sm:gap-6 group">
          {/* Overlay untuk tulisan "Show All Projects" */}
          <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">Show All Projects</div>
          {/* Project 1 */}
          <div className="flex flex-col p-4 md:p-0 md:flex-row">
            <div className="w-full md:w-1/2">
              <img src={f1} alt="Project 1" className="w-full h-full object-cover" />
            </div>
            <div className="text-white text-sm w-full md:w-1/2 text-justify p-2">
              <h4 className="font-bold">Sistem Peminjaman Ruang</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut dolorem quis totam, veritatis laborum omnis explicabo quas.</p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col p-4 md:p-0 md:flex-row">
            <div className="w-full md:w-1/2">
              <img src={f2} alt="Project 2" className="w-full h-full object-cover" />
            </div>
            <div className="text-white text-sm w-full md:w-1/2 text-justify p-2">
              <h4 className="font-bold">Monitoring DC</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut dolorem quis totam, veritatis laborum omnis explicabo quas.</p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col p-4 md:p-0 md:flex-row-reverse">
            <div className="w-full md:w-1/2">
              <img src={f3} alt="Project 3" className="w-full h-full object-cover" />
            </div>
            <div className="text-white text-sm w-full md:w-1/2 text-justify p-2">
              <h4 className="font-bold">SIAMI</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut dolorem quis totam, veritatis laborum omnis explicabo quas.</p>
            </div>
          </div>

          {/* Project 4 */}
          <div className="flex flex-col p-4 md:p-0 md:flex-row-reverse">
            <div className="w-full md:w-1/2">
              <img src={f4} alt="Project 4" className="w-full h-full object-cover" />
            </div>
            <div className="text-white text-sm w-full md:w-1/2 text-justify p-2">
              <h4 className="font-bold">Brata Cerdas</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut dolorem quis totam, veritatis laborum omnis explicabo quas.</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Project;
