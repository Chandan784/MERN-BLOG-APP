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
    <div className=" flex scrollbar-none overflow-x-auto  space-x-4 p-4 bg-gray-200 ">
      {category.map((e) => {
        return (
          <CategoryCard categoryData={e} activeData={{ active, setActive }} />
        );
      })}
    </div>
  );
}

export default Category;
