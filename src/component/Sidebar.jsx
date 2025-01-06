import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="fixed z-20 p-4 rounded-r-[20px] top-1/2 transform -translate-y-1/2 bg-orange-600">
        <ul className="space-y-4">
          <li className="text-white p-2 hover:border-b-4">
            <Link to="/">
              <button>
                <i className="fas fa-home"></i>
              </button>
            </Link>
          </li>
          <li className="text-white p-2 hover:border-b-4">
            <i className="fas fa-user"></i>
          </li>
          <li className="text-white p-2 hover:border-b-4">
            <i className="fas fa-briefcase"></i>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
