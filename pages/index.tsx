import type { NextPage } from "next";
import Navbar from "../components/student/navbar";
import Footer from "../components/student/footer";
import Herobanner from "../components/student/Herobanner";
import Courses from "../components/student/Courses";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Herobanner />
      <Courses />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
