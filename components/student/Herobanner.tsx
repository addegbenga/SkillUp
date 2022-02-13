import { NextPage } from "next";
import NextImage from "next/image";
const Herobanner: NextPage = () => {
  return (
    <div>
      <NextImage
        src="/assets/hero-banner2.jpeg"
        alt="Picture of the author"
        width={500}
        height={300}
        layout="intrinsic"
      />
      <div className="px-4 my-3">
        <h1 className="text-3xl font-medium">Learning that gets you</h1>
        <p className="text-lg text-black text-opacity-60 my-3">
          Skills for your personal (and your future). Get atarted
        </p>
        <div>
          <input
            className="grid border-black p-3 w-full border"
            type="search"
            placeholder="What do you want to learn ?"
          />
        </div>
      </div>
    </div>
  );
};
export default Herobanner;
