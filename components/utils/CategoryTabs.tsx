import { Tab } from "@headlessui/react";
import { useState } from "react";
import { NextPage } from "next";
import { FaChevronDown } from "react-icons/fa";

type CategoryTypes = {
  categories: Object;
};
type State = Array<Number | null | boolean>;

const CategoryTabs: NextPage<CategoryTypes> = ({ categories }) => {
  const [isOpenArrayState, setOpenArrayState] = useState<State>([]);

  return (
    <div className="w-full">
      {Object.keys(categories).map((category, index) => (
        <div key={index}>
          <div className="border-b py-3">
            <div className="flex justify-between items-center">
              <h1 key={index}>{category}</h1>

              <button
                className={`${isOpenArrayState.map((item) =>
                  isOpenArrayState.includes(index)
                    ? "transform -rotate-180 ease-out transition duration-150 ease-in-out"
                    : " transform ease-out transition duration-150 ease-in-out"
                )} transform ease-out transition duration-150 ease-in-out  `}
                onClick={() =>
                  setOpenArrayState(
                    isOpenArrayState.includes(index)
                      ? [...isOpenArrayState.filter((item) => item !== index)]
                      : [...isOpenArrayState, index]
                  )
                }
              >
                <FaChevronDown size={13} />
              </button>
            </div>
            {isOpenArrayState.includes(index) ? (
              <div>show mejwkjdbjhbjwhb</div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryTabs;
