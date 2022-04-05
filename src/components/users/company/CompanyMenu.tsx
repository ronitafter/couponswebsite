import { Typography } from "@mui/material";
import { useEffect } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

function CompanyMenu(): JSX.Element {
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