import { Typography } from "@mui/material";
import { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Store from "../../store/Store";
import notify from "../../utils/Notify";

function CompanyMenu(): JSX.Element {

   // const navigate = useNavigate();

   // useEffect(() => {

   //    if (Store.getState().StoreState.loginClient.clientType != "Company") {
   //       notify.error("you are not allowed to enter!")
   //       navigate("/login");
   //    }
   // });
   return (
      <div className="companyMenu" id="companyMenu">
         <Typography variant="h4" className="HeadLine"></Typography><br />    
         <ListGroup className='d'>
            <ListGroup.Item><NavLink className="a" to="/addCoupon">addCoupon</NavLink></ListGroup.Item>
            <ListGroup.Item><NavLink className="a" to="/deleteCoupon">deleteCoupon</NavLink></ListGroup.Item>
            <ListGroup.Item><NavLink className="a" to="/getCompanyCoupons">getCompanyCoupons</NavLink></ListGroup.Item>
            <ListGroup.Item><NavLink className="a" to="/UpdateCoupon">UpdateCoupon</NavLink></ListGroup.Item>
            <ListGroup.Item><NavLink className="a" to="/GetCompanyCouponsByCategory">GetCompanyCouponsByCategory</NavLink></ListGroup.Item>
            <ListGroup.Item><NavLink className="a" to="/findCouponsByCategory">findCouponsByCategory</NavLink></ListGroup.Item>
            <ListGroup.Item><NavLink className="a" to="/GetCompanyDetails">GetCompanyDetails</NavLink></ListGroup.Item>
         </ListGroup>
      </div>
   );
}


export default CompanyMenu;