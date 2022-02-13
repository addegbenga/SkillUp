import type { NextPage } from "next";
import Navbar from "../components/student/navbar";
import Footer from "../components/student/footer";
import Herobanner from "../components/student/Herobanner";
import Courses from "../components/student/Courses";
import TopCategories from "../components/student/TopCategories";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Herobanner />
      <Courses />
      <TopCategories />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
