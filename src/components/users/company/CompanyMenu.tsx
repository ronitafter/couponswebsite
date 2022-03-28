import { Typography } from "@mui/material";
import { useEffect } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
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
      <div>
         <div className="companyMenu Box" id="companyMenu">
            <ListGroup>
               <Button variant="contained Box2">
                  <Link to="/company/addCoupons">add Coupons</Link>
               </Button>
               <Button variant="contained Box2">
                  <Link to="/company/deleteCoupon Box2">delete Coupons</Link>
               </Button>
               <Button variant="contained Box2">
                  <Link to="/company/getCompanyCoupons">My Coupons</Link>
               </Button>
               <Button variant="contained Box2">
                  <Link to="/company/UpdateCoupon">Update Coupons</Link>
               </Button>
               <Button variant="contained Box2">
                  <Link to="/company/GetCompanyCouponsByCategory">Coupons Categorirs</Link>
               </Button>
               <Button variant="contained Box2">
                  <Link to="/company/GetCompanyDetails">Company Info</Link>
               </Button>
            </ListGroup>
         </div>
         <Button variant="contained">
            <Link to="/Main"> Go To Home Page</Link>
         </Button>
      </div>
   );
}

export default CompanyMenu;