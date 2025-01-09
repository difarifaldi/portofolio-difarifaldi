import { useEffect } from "react";
import AllProject from "./AllProject";
import OverviewProject from "./OverviewProject";

const DetailProject = () => {
  useEffect(() => {
    // Menunggu 0ms agar halaman dapat sepenuhnya dirender
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);
  return (
    <>
      <OverviewProject />
      <AllProject />
    </>
  );
};

export default DetailProject;
