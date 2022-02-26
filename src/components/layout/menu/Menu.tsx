import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {

   return (
      <div className="Menu">
         <h3>Main Page....</h3>
         <h1>Menu</h1>
         <div className="links">
            <Link to="/AdmainPage">AdmainPage</Link>
            <Link to="/CompanyPage">CompanyPage</Link>
            <Link to="/CustomerPage">CustomerPage</Link>

         </div>
      </div>
   );
}

export default Menu;