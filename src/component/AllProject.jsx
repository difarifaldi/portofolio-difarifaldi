import f4 from "../assets/img/f3.png";
const AllProject = () => {
  return (
    <div className="bg-gray-800 p-6 pt-24">
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 max-w-6xl mx-auto mt-6">
        <div className="flex items-center justify-center text-center text-white  w-full h-24">
          <button className="mx-2 px-4 py-2 bg-orange-600 rounded-lg hover:bg-orange-700">Web Development</button>
          <button className="mx-2 px-4 py-2 bg-orange-600 rounded-lg hover:bg-orange-700">Other</button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto mt-4 ">
        {/* Customer LPG Pertamina */}
        <div className="group relative cursor-pointer">
          <img src={f4} alt="project1" className="w-full h-full " />
          <div className="absolute inset-0 flex p-4 items-center justify-center bg-gray-950 bg-opacity-70 opacity-100 group-hover:opacity-0 transition duration-300 ">
            <div className="text-center">
              <p className="text-white md:text-2xl font-extrabold">Customer LPG Pertamina</p>
              <p className="text-white font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut dolorem quis totam, veritatis laborum omnis explicabo quas.</p>
              <div className="relative flex flex-wrap mt-3 justify-center">
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Laravel</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">MySQL</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Bootstrap</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Javascript</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">jQuery</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Google OAuth</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Google Analytics</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">cPanel</div>
              </div>
            </div>
          </div>
        </div>

        {/* Brata Cerdas */}
        <div className="group relative cursor-pointer">
          <img src={f4} alt="project1" className="w-full h-full " />
          <div className="absolute inset-0 flex p-4 items-center justify-center bg-gray-950 bg-opacity-70 opacity-100 group-hover:opacity-0 transition duration-300 ">
            <div className="text-center">
              <p className="text-white md:text-2xl font-extrabold">Brata Cerdas</p>
              <p className="text-white font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut dolorem quis totam, veritatis laborum omnis explicabo quas.</p>
              <div className="relative flex flex-wrap mt-3 justify-center">
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Laravel</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">MySQL</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Bootstrap</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Javascript</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">jQuery</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Google OAuth</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Google Analytics</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">cPanel</div>
              </div>
            </div>
          </div>
        </div>

        {/* SIAMI */}
        <div className="group relative cursor-pointer">
          <img src={f4} alt="project2" className="w-full h-full " />
          <div className="absolute inset-0 flex p-4 items-center justify-center bg-gray-950 bg-opacity-70 opacity-100 group-hover:opacity-0 transition duration-300 ">
            <div className="text-center">
              <p className="text-white md:text-2xl font-extrabold">SIAMI</p>
              <p className="text-white font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut dolorem quis totam, veritatis laborum omnis explicabo quas.</p>
              <div className="relative flex flex-wrap mt-3 justify-center">
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Laravel</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">MySQL</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Bootstrap</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Javascript</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">jQuery</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Google OAuth</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Google Analytics</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">cPanel</div>
              </div>
            </div>
          </div>
        </div>

        {/* Asset Management */}
        <div className="group relative cursor-pointer">
          <img src={f4} alt="project3" className="w-full h-full " />
          <div className="absolute inset-0 flex p-4 items-center justify-center bg-gray-950 bg-opacity-70 opacity-100 group-hover:opacity-0 transition duration-300 ">
            <div className="text-center">
              <p className="text-white md:text-2xl font-extrabold">Asset Management</p>
              <p className="text-white font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut dolorem quis totam, veritatis laborum omnis explicabo quas.</p>
              <div className="relative flex flex-wrap mt-3 justify-center">
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Laravel</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">MySQL</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Bootstrap</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Javascript</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">jQuery</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Google OAuth</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Google Analytics</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">cPanel</div>
              </div>
            </div>
          </div>
        </div>
        {/* Monitoring DC */}
        <div className="group relative cursor-pointer">
          <img src={f4} alt="project4" className="w-full h-full " />
          <div className="absolute inset-0 flex p-4 items-center justify-center bg-gray-950 bg-opacity-70 opacity-100 group-hover:opacity-0 transition duration-300 ">
            <div className="text-center">
              <p className="text-white md:text-2xl font-extrabold">Monitoring DC</p>
              <p className="text-white font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut dolorem quis totam, veritatis laborum omnis explicabo quas.</p>
              <div className="relative flex flex-wrap mt-3 justify-center">
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Laravel</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">MySQL</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Bootstrap</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Javascript</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">jQuery</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Google OAuth</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Google Analytics</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">cPanel</div>
              </div>
            </div>
          </div>
        </div>

        {/* Peminjaman Ruang */}
        <div className="group relative cursor-pointer">
          <img src={f4} alt="project4" className="w-full h-full " />
          <div className="absolute inset-0 flex p-4 items-center justify-center bg-gray-950 bg-opacity-70 opacity-100 group-hover:opacity-0 transition duration-300 ">
            <div className="text-center">
              <p className="text-white md:text-2xl font-extrabold">Peminjaman Ruang</p>
              <p className="text-white font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut dolorem quis totam, veritatis laborum omnis explicabo quas.</p>
              <div className="relative flex flex-wrap mt-3 justify-center">
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Laravel</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">MySQL</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Bootstrap</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Javascript</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">jQuery</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Google OAuth</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Google Analytics</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">cPanel</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decision Supporting System */}
        <div className="group relative cursor-pointer">
          <img src={f4} alt="project4" className="w-full h-full " />
          <div className="absolute inset-0 flex p-4 items-center justify-center bg-gray-950 bg-opacity-70 opacity-100 group-hover:opacity-0 transition duration-300 ">
            <div className="text-center">
              <p className="text-white md:text-2xl font-extrabold">Decision Supporting System</p>
              <p className="text-white font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut dolorem quis totam, veritatis laborum omnis explicabo quas.</p>
              <div className="relative flex flex-wrap mt-3 justify-center">
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Laravel</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">MySQL</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Bootstrap</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Javascript</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">jQuery</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Google OAuth</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">Google Analytics</div>
                <div className="bg-gray-300 rounded-lg px-2 py-2 m-2 text-sm font-bold">cPanel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProject;
