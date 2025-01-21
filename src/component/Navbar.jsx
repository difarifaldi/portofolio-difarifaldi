import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import b3 from "../assets/img/dlogo.png"; // Pastikan path logo benar

const Navbar = () => {
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
    <nav className={`fixed w-full top-0 left-0 z-50 ${isScrolled ? "bg-transparent backdrop-blur-lg" : "bg-gray-800"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Logo dan Teks */}
            <img src={b3} alt="Logo" className="w-8 h-8 mr-2" /> {/* Logo */}
            {/* Tampilkan tombol navigasi jika bukan di halaman utama */}
            {!isHome && (
              <button onClick={() => navigate(isProjectDetail ? "/detail-project" : "/")} className="text-white font-bold text-xl flex items-center space-x-2">
                <span className="text-xs">
                  <i className="fa fa-chevron-left"></i>
                </span>
                <span>Difarifaldi</span>
              </button>
            )}
            {/* Tampilkan teks jika berada di halaman utama */}
            {isHome && <span className="font-bold text-xl text-white">Difarifaldi</span>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
