import React from "react";
import { Link } from "react-router-dom";
import Cartwidgets from "./CartWidgets";
import LinkCategorias from "./LinkCategorias";

function NavBar({ products }) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        THREE
      </Link>
      <Link className="navbar-brand" to="/">INICIO</Link>
      <div className="navbar-collapse">
        <div className="navbar-nav">
          {products.map((category) => (
            <LinkCategorias category={category} key={category.id} />
          ))}
        </div>
      </div>
      <Cartwidgets />
    </nav>
  );
}
export default NavBar;
