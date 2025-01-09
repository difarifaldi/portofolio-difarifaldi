import smpl from "../assets/img/smpl.jpeg";

const OverviewProject = () => {
  return (
    <div className="bg-gray-800 p-6 pt-24">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 max-w-6xl mx-auto mt-6">
        {/* Bagian Teks di luar gambar (untuk layar besar) */}
        <div className="hidden sm:flex flex-col text-center sm:text-left">
          <h3 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold">
            <span className="mr-3">My</span> <span className="text-orange-400 absolute z-50">Projects</span>
          </h3>
        </div>

        {/* Bagian Gambar */}
        <div className="relative h-full max-w-[800px] overflow-hidden rounded-lg">
          {/* Gambar */}
          <img src={smpl} alt="Profile" className="w-full h-full object-cover" />

          {/* Teks di dalam gambar (untuk layar kecil) */}
          <div className="absolute inset-0 flex items-center justify-center sm:hidden">
            <h3 className="text-white text-3xl font-extrabold bg-black/50 px-4 py-2 rounded-lg">
              My <span className="text-orange-400">Projects</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewProject;
