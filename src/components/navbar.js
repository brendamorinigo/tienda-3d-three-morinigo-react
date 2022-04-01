import React from "react"; 
import { Link} from 'react-router-dom'
import Cartwidgets from './CartWidgets'

function navBar(){
return (
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      
      <Link 
          className="navbar-brand" 
          to="/"
      >
          THREE
      </Link>

      <div className="navbar-collapse">
          <div className="navbar-nav">

              <Link  
                  className="nav-item nav-link" 
                  to="/categoria/nezuko"
              >
                  NEZUKO
              </Link >

              <Link  
                  className="nav-item nav-link" 
                  to="/categoria/sukuna"
              >
                  SUKUNA
              </Link >
              <Link  
                  className="nav-item nav-link" 
                  to="/categoria/adorno"
              >
                  ADORNOS
              </Link >
          </div>
      </div>
      <Cartwidgets/>
  </nav>
)
}
export default navBar;

