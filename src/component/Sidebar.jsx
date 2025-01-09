const Sidebar = () => {
  return (
    <>
      <div className="fixed z-20 p-4 rounded-r-[20px] top-1/2 transform -translate-y-1/2 bg-orange-600">
        <ul className="space-y-4">
          <a href="#profile">
            <li className="text-white p-2 hover:border-b-4">
              <i className="fas fa-home"></i>
            </li>
          </a>
          <a href="#about">
            <li className="text-white p-2 hover:border-b-4">
              <i className="fas fa-user"></i>
            </li>
          </a>
          <a href="#project">
            <li className="text-white p-2 hover:border-b-4">
              <i className="fas fa-briefcase"></i>
            </li>
          </a>
          <a href="#contact">
            <li className="text-white p-2 hover:border-b-4">
              <i className="fas fa-contact-book"></i>
            </li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
