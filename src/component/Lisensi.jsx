import arrow from "../assets/img/nj.png";
const License = () => {
  return (
    <div className="bg-gray-800 p-6 pt-4">
      <div className="flex justify-between items-center gap-6 max-w-5xl mx-auto mt-6">
        {/* Tulisan LICENSE */}
        <div>
          <p className="text-white text-left text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">LICENSE</p>
        </div>

        <img src={arrow} alt="Arrow" className="w-full h-full sm:block hidden" />

        {/* Lisensi */}
        <div className="text-white space-y-4">
          {/* Software Engineering */}
          <div
            className="relative group p-4 text-center border-2 border-transparent hover:border-white transition duration-300 hover:bg-orange-400 cursor-pointer"
            onClick={() => window.open("/path-to-file/software-engineering.pdf", "_blank")}
          >
            <i className="fa fa-laptop-code text-xl mb-2 block"></i>
            <p className="font-bold">Software Engineering (Java Technologies)</p>
            <p>DNIIT</p>
            {/* Download Text and Icon */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300">
              <i className="fa fa-download mr-2"></i>
              <span>Download</span>
            </div>
          </div>

          {/* Junior Web Developer */}
          <div
            className="relative group p-4 text-center border-2 border-transparent hover:border-white transition duration-300 hover:bg-orange-400 cursor-pointer"
            onClick={() => window.open("/path-to-file/junior-web-developer.pdf", "_blank")}
          >
            <i className="fa fa-globe text-xl mb-2 block"></i>
            <p className="font-bold">Junior Web Developer</p>
            <p>Badan Nasional Sertifikasi Profesi</p>
            {/* Download Text and Icon */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300">
              <i className="fa fa-download mr-2"></i>
              <span>Download</span>
            </div>
          </div>

          {/* Web Developer */}
          <div className="relative group p-4 text-center border-2 border-transparent hover:border-white transition duration-300 hover:bg-orange-400 cursor-pointer" onClick={() => window.open("/path-to-file/web-developer.pdf", "_blank")}>
            <i className="fa fa-globe text-xl mb-2 block"></i>
            <p className="font-bold">Web Developer</p>
            <p>Badan Nasional Sertifikasi Profesi</p>
            {/* Download Text and Icon */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300">
              <i className="fa fa-download mr-2"></i>
              <span>Download</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default License;
