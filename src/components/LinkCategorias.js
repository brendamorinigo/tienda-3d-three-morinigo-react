import React from "react";
import { Link } from "react-router-dom";

function NewCategory({ category }) {
  return (
    <Link className="nav-item nav-link" to={category.link}>
      {category.name}
    </Link>
  );
}
export default NewCategory;
