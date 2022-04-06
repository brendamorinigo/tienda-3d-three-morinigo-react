import React from "react";
import { Link } from "react-router-dom";

function NewCategory({ name, link}) {
  return (
    <Link className="nav-item nav-link" to={link}>
      {name}
    </Link>
  );
}
export default NewCategory;
