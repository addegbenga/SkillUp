import type { NextPage } from "next";
import Navbar from "../components/student/navbar";
import Footer from "../components/student/footer";
import Herobanner from "../components/student/Herobanner";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Herobanner />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
