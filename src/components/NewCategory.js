import { Link } from "react-router-dom";


function NewCategory(cate) {

    return(
        <div className="navbar-collapse">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/categoria/">
              agregado desde comp
          </Link>
        </div>
      </div>
    )
    }
    
    export default NewCategory;