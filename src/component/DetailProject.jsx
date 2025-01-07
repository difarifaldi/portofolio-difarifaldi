import { useEffect } from "react";
import AllProject from "./AllProject";
import OverviewProject from "./OverviewProject";

const DetailProject = () => {
  useEffect(() => {
    // Menggulirkan halaman ke atas saat komponen Detail dimuat
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <OverviewProject />
      <AllProject />
    </>
  );
};

export default DetailProject;
