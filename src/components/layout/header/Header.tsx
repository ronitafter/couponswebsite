import "./Header.css";
import { FaCloudSun, FaFileInvoiceDollar } from "react-icons/fa";
import NavBar from "../navbar/Nav";
function Header(): JSX.Element {
   return (
      <div className="Header">
         <NavBar/>
         <FaFileInvoiceDollar />
         <h1>Coupon System</h1>
         <FaCloudSun />
      </div>
   );
}
export default Header;
