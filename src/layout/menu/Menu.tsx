import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {

   return (
      <div className="Menu">

      <h1>Menu</h1>
         <div className="links">
            <Link to="/admin">Admin</Link>
            <Link to="/customer">Customer</Link>
            <Link to="/company">Company</Link>
            
         </div>
      </div>
   );
}

export default Menu;