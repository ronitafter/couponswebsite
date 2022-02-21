import "./Header.css";
import { FaCloudSun, FaFileInvoiceDollar } from "react-icons/fa";
function Header(): JSX.Element {
   return (
      <div className="Header">
         <FaFileInvoiceDollar />
         <h1>Coupon System</h1>
         <FaCloudSun />
      </div>
   );
}

export default Header;
