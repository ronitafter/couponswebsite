import { Typography } from "@mui/material";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Store from "../../store/Store";
import notify from "../../utils/Notify";

function CustomerMenu(): JSX.Element {

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
            <li><NavLink className="a" to="/GetAllCoupons">GetAllCoupons</NavLink></li> <br />
            <li><NavLink className="a" to="/GetCustomerDetails">GetCustomerDetails</NavLink></li><br />
            <li><NavLink className="a" to="/PurchaseCoupon">PurchaseCoupon</NavLink></li><br />
            <li><NavLink className="a" to="/GetCouponsByPrice">GetCouponsByPrice</NavLink></li><br />
            <li><NavLink className="a" to="/GetCouponsByCategory">GetCouponsByCategory</NavLink></li><br />   
         </ul>
      </div>
   );
}


export default CustomerMenu;