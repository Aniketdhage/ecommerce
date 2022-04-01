import React from "react";
import CategoryItem from "../category/Category-Item";
import "./directory.scss";
const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((item) => {
        return <CategoryItem key={item.id} category={item} />;
      })}
    </div>
  );
};

export default Directory;
