import React from "react";
import { Link } from "react-router-dom";
import Cartwidgets from "./cartWidgets";
import LinkCategorias from "./linkCategorias";

function NavBar({ }) {
  const links= [{name:"nezuko", url:"/categoria/nezuko", id:1},{name:"sukuna", url:"/categoria/sukuna",id:2},{name:"adorno", url:"/categoria/adorno",id:3}]
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        THREE
      </Link>
      <Link className="navbar-brand" to="/">INICIO</Link>
      <div className="navbar-collapse">
        <div className="navbar-nav">

            {links.map((link) => (
  <LinkCategorias name={link.name}  link={link.url} key={link.id} />
))}

        </div>
      </div>
      <Cartwidgets />
    </nav>
  );
}
export default NavBar;
