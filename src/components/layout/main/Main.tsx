import { FaFortAwesome } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import Routing from "../../routing/Routing";
import "./Main.css";

function Main(): JSX.Element {
   return (
      <div className="Main">
         <Routing />
         <Outlet />
         <FaFortAwesome />
         
      </div>
   );
}

export default Main;
