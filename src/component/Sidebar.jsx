const Sidebar = () => {
  return (
    <>
      <div className="fixed z-20 p-4 rounded-r-[20px] top-1/2 transform -translate-y-1/2 bg-orange-600">
        <ul className="space-y-4">
          <li className="text-white p-2 hover:border-b-4">
            <a href="#profile">
              <i className="fas fa-home"></i>
            </a>
          </li>
          <li className="text-white p-2 hover:border-b-4">
            <a href="#about">
              <i className="fas fa-user"></i>
            </a>
          </li>
          <li className="text-white p-2 hover:border-b-4">
            <a href="#project">
              <i className="fas fa-briefcase"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
