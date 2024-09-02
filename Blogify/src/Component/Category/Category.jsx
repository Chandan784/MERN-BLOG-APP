import React, { useState } from "react";
import CategoryCard from "./CategoryCard";

function Category() {
  let [active, setActive] = useState("All");
  let category = [
    "All",
    "Education",
    "Health",
    "Coding",
    "Business",
    "Technology",
  ];

  return (
    <div className="sticky top-[60px] md:top-[68px] px-4 py-3 z-50 bg-gray-200">
      <div className="flex scrollbar-none overflow-x-auto gap-x-4 md:gap-x-6">
        {category.map((e) => {
          return (
            <CategoryCard categoryData={e} activeData={{ active, setActive }} />
          );
        })}
      </div>
    </div>
  );
}

export default Category;
