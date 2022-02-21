import { Typography } from "@mui/material";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Store from "../../store/Store";
import notify from "../../utils/Notify";

function CompanyMenu(): JSX.Element {

   const navigate = useNavigate();

   useEffect(() => {

      if (Store.getState().StoreState.loginClient.clientType != "Company") {
         notify.error("you are not allowed to enter!")
         navigate("/login");
      }
   });
   return (
      <div className="companyMenu" id="companyMenu">
         <Typography variant="h4" className="HeadLine">Menu</Typography><br />
         <ul>
            <li><NavLink className="a" to="/addCoupon">AddCoupon</NavLink></li> <br />
            <li><NavLink className="a" to="/deleteCoupon">DeleteCoupon</NavLink></li> <br />
            <li><NavLink className="a" to="/getCompanyCoupons">GetCompanyCoupons</NavLink></li> <br />
            <li><NavLink className="a" to="/getAllCompanies">Showall companies</NavLink></li><br />
            <li><NavLink className="a" to="/getOneCompany">Showonecompany by id</NavLink></li><br />
            <li><NavLink className="a" to="/addCustomer">Addcustomer</NavLink></li><br />
            <li><NavLink className="a" to="/updateCustomer">Updatecustomer</NavLink></li><br />
            <li><NavLink className="a" to="/deleteCustomer">Deletecustomer</NavLink></li><br />
            <li><NavLink className="a" to="/getAllCustomers">Showallcustomers</NavLink></li><br />
            <li><NavLink className="a" to="/getOneCustomer">Showonecustomer</NavLink></li><br />
         </ul>
      </div>
   );
}


export default CompanyMenu;