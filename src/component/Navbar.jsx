import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Mendapatkan path saat ini
  const navigate = useNavigate(); // Untuk navigasi antar halaman

  const isProjectDetail = location.pathname.startsWith("/project/");
  const isHome = location.pathname === "/";

  // Fungsi untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 ${isScrolled ? "bg-transparent  backdrop-blur-lg" : "bg-gray-800"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Tampilkan tombol navigasi jika bukan di halaman utama */}
            {!isHome && (
              <button
                onClick={() => navigate(isProjectDetail ? "/detail-project" : "/")} // Navigasi berdasarkan kondisi
                className="text-white font-bold text-xl flex items-center space-x-2"
              >
                <span className="text-xs">
                  <i className="fa fa-chevron-left"></i>
                </span>
                <span>Difarifaldi</span>
              </button>
            )}
            {/* Tampilkan teks jika berada di halaman utama */}
            {isHome && <span className="font-bold text-xl text-white">Difarifaldi</span>}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-300 hover:text-white focus:outline-none focus:text-white">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <a href="#home" className="block px-4 py-2 hover:bg-blue-600">
              Home
            </a>
            <a href="#about" className="block px-4 py-2 hover:bg-blue-600">
              About
            </a>
            <a href="#projects" className="block px-4 py-2 hover:bg-blue-600">
              Projects
            </a>
            <a href="#contact" className="block px-4 py-2 hover:bg-blue-600">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
