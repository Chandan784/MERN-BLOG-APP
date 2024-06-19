import React from "react";
import CategoryCard from "./CategoryCard";

function Category() {
  let category = [
    "Eduaction",
    "Sports",
    "Health",
    "Software Development,",
    "Politics",
    "Eduaction",
    "Sports",
    "Health",
    "Software Development,",
    "Politics",
    "Eduaction",
    "Sports",
    "Health",
    "Software Development,",
    "Politics",
  ];

  return (
    <div className=" flex scrollbar-none overflow-x-auto  space-x-4 p-4 bg-gray-100 ">
      {category.map((e) => {
        return <CategoryCard data={e} />;
      })}
    </div>
  );
}

export default Category;
