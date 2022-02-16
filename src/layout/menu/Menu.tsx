import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
   return (
      <div className="Menu">
         {/* <Link to="moshe">Admin Management</Link>
			<Link to="moshe">Compnay Management</Link>
			<Link to="moshe">Customer Management</Link> */}

         <div className="links">
            <a href="#">Admin</a>
            <a href="#">Customer</a>
            <a href="#">Company</a>
         </div>
      </div>
   );
}

export default Menu;