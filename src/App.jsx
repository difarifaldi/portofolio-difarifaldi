import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Utama from "./component/Utama";
import Detail from "./component/Detail";
import DetailProject from "./component/DetailProject";
import ShowProject from "./component/ShowProject";
import { projects } from "./data/ProjectData";

function App() {
  return (
    <Router basename="/portofolio-difarifaldi">
      {" "}
      {/* Tentukan basename */}
      <Navbar />
      <Routes>
        {/* Route untuk halaman utama */}
        <Route path="/" element={<Utama />} />

        {/* Route untuk halaman detail */}
        <Route path="/about" element={<Detail />} />

        {/* Route untuk halaman detail project */}
        <Route path="/detail-project" element={<DetailProject />} />

        <Route path="/project/:id" element={<ShowProject projects={projects} />} />
      </Routes>
    </Router>
  );
}

export default App;
