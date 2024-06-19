import React from "react";

function CategoryCard({ data }) {
  return (
    <div className="  flex-shrink-0 bg-white p-4 text-xl font-semibold rounded shadow-md  ">
      {data}
    </div>
  );
}

export default CategoryCard;
