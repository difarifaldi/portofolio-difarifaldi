import f4 from "../assets/img/f3.png";

const OverviewProject = () => {
  return (
    <div className="bg-gray-800 p-6 pt-24">
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 max-w-6xl mx-auto mt-6">
        {/* Bagian Teks */}
        <div className="flex flex-col  text-center sm:mt-0 sm:text-left">
          <h3 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold">MY PROJECTS</h3>
        </div>

        {/* Bagian Gambar */}
        <div className="w-1/2 md:w-1/2 sm:w-1/3 h-auto rounded-lg border-4 border-white overflow-hidden">
          <img src={f4} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default OverviewProject;
