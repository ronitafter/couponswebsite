import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./Menu.css";


function Menu(): JSX.Element {

   return (
      <div className="Menu">
         <h3>Main Page....</h3>
         <Sidebar />


      </div>
   );
}

export default Menu;