import { NextPage } from "next";
import { dummytopcategory } from "../utils/data";

const TopCategories: NextPage = () => {
  return (
    <div className="px-4 my-10">
      <h1 className="text-2xl font-medium">Top Category</h1>
      <div className="flex gap-3 items-center my-5 flex-wrap  ">
        {dummytopcategory.map((item, idx) => (
          <div className=" border border-black p-3 rounded-full" key={idx}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};
export default TopCategories;
