import React from "react"; 

function navBar(){
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">THREE</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Trabajos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Personajes</a></li>
            <li><a className="dropdown-item" href="#">Adornos</a></li>
            <li><a className="dropdown-item" href="#">Moldes</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
export default navBar;