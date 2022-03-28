import { Outlet } from "react-router-dom";
import Routing from "../../routing/Routing";
import Home from "../home/Home";
import "./Main.css";

function Main(): JSX.Element {
   return (
      <div className="Main">
         <Routing />
         <Outlet />
      </div>
   );
}

export default Main;
