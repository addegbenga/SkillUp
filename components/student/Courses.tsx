import { NextPage } from "next";
import { useState } from "react";
import CategoryTabs from "../utils/CategoryTabs";
import { dummycategories } from "../utils/data";

const Courses: NextPage = () => {
  return (
    <div className="px-4">
      <div>
        <CategoryTabs categories={dummycategories} />
      </div>
    </div>
  );
};

export default Courses;
