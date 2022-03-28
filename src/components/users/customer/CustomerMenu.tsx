import { Typography } from "@mui/material";
import { useEffect } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Store from "../../store/Store";
import notify from "../../utils/Notify";

function CustomerMenu(): JSX.Element {

   // const navigate = useNavigate();

   // useEffect(() => {

   //    if (Store.getState().StoreState.loginClient.clientType != "Company") {
   //       notify.error("you are not allowed to enter!")
   //       navigate("/login");
   //    }
   // });
   return (
      <div>

         <div className="customerMenu Box" id="customerMenu">
            <ListGroup>
               <Button variant="contained Box2">
                  <Link to="/customer/PurchaseCoupon">Purchase Coupons</Link>
               </Button>
               <Button variant="contained Box2">
                  <Link to="/customer/GetCouponsByPrice">Coupon Prices</Link>
               </Button>
               <Button variant="contained Box2">
                  <Link to="/customer/GetCustomerDetails">My Info</Link>
               </Button>
               <Button variant="contained Box2">
                  <Link to="customer/GetCouponsByCategory">Coupons Category</Link>
               </Button>
               <Button variant="contained Box2">
                  <Link to="/customer/GetAllCoupons"> My Coupons</Link>
               </Button>
            </ListGroup>
         </div>
         <Button variant="contained">
            <Link to="/Main"> Go To Home Page</Link>
         </Button>
      </div>

   );
}


export default CustomerMenu;