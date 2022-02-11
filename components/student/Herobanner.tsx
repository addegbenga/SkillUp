import { NextPage } from "next";
import NextImage from "next/image";
const Herobanner: NextPage = () => {
  return (
    <div>
      <NextImage
        src="/assets/hero-banner2.jpeg"
        alt="Picture of the author"
        width={500}
        height={350}
        layout="intrinsic"
      />
    </div>
  );
};
export default Herobanner;
