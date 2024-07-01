import React from "react";

function CategoryCard({ data }) {
  return (
    <div className="  flex-shrink-0 bg-white p-2 lg:p-4 text-sm lg:text-xl  font-medium  lg:font-semibold rounded shadow-md  ">
      {data}
    </div>
  );
}

export default CategoryCard;
