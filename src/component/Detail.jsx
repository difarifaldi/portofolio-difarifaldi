import { useEffect } from "react";
import Education from "./Education";
import Experience from "./Experience";
import Organization from "./Organization";
import Skill from "./Skill";
import Lisensi from "./Lisensi";

function Detail() {
  useEffect(() => {
    // Menggulirkan halaman ke atas saat komponen Detail dimuat
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Experience />
      <Skill />
      <Lisensi />
      <Education />
      <Organization />
    </>
  );
}

export default Detail;
