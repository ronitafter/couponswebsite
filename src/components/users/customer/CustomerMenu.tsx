import { Typography } from "@mui/material";
import { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
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
      <div className="customerMenu" id="customerMenu">
         <Typography variant="h4" className="HeadLine"></Typography><br />
         <ListGroup className='d'>
            <ListGroup.Item><NavLink className="a" to="/PurchaseCoupon">PurchaseCoupon</NavLink></ListGroup.Item>
            <ListGroup.Item><NavLink className="a" to="/GetCouponsByPrice">GetCouponsByPrice</NavLink></ListGroup.Item>
            <ListGroup.Item><NavLink className="a" to="/GetCustomerDetails">GetCustomerDetails</NavLink></ListGroup.Item>
            <ListGroup.Item><NavLink className="a" to="/findCouponsByCategory">findCouponsByCategory</NavLink></ListGroup.Item>
            <ListGroup.Item><NavLink className="a" to="/GetAllCoupons">GetAllCoupons</NavLink></ListGroup.Item>
         </ListGroup>
      </div>
   );
}


export default CustomerMenu;