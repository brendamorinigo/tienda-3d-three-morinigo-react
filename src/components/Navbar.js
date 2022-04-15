import React from "react";
import { Link } from "react-router-dom";
import LinkCategorias from "./LinkCategorias";
import CartWidgets from "./CartWidgets";

function NavBar() {
  const links = [
    { name: "Coleccion", url: "/categoria/Coleccion", id: 1 },
    { name: "Cortantes", url: "/categoria/Cortante", id: 2 },
    { name: "Adornos", url: "/categoria/Adornos", id: 3 },
  ];
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        THREE
      </Link>
      <Link className="navbar-brand" to="/">
        INICIO
      </Link>
      <div className="navbar-collapse">
        <div className="navbar-nav">
          {links.map((link) => (
            <LinkCategorias name={link.name} link={link.url} key={link.id} />
          ))}
        </div>
      </div>
      <CartWidgets/>
    </nav>
  );
}
export default NavBar;

