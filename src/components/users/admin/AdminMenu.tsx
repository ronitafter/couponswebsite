import { Typography } from "@mui/material";
import { useEffect } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Store from "../../store/Store";
import notify from "../../utils/Notify";

function AdminMenu(): JSX.Element {

   // const navigate = useNavigate();

   // useEffect(() => {

   //    if (Store.getState().StoreState.loginClient.clientType != "Administrator") {
   //       notify.error("you are not allowed to enter!")
   //       navigate("/login");
   //    }
   // });
   return (
      <div>
         <div className="adminMenu Box" id="adminMenu">
            <ListGroup>
               <Button variant="contained Box2">
                  <Link to="/admin/addCompany">add Company</Link>
               </Button>
               <Button variant="contained Box2">
                  <Link to="/admin/updateCompany">Update Company</Link>
               </Button>
               <Button variant="contained Box2">
                  <Link to="/admin/deleteCompany">Delete Company</Link>
               </Button>
               <Button variant="contained Box2">
                  <Link to="/admin/getAllCompanies">Companies</Link>
               </Button>
               <Button variant="contained Box2">
                  <Link to="/admin/getOneCompany">Search companies</Link>
               </Button>
               <Button variant="contained Box2">
                  <Link to="/admin/GetAllCoupons">GetAllCoupons</Link>
               </Button>
               <Button variant="contained Box2">
                  <Link to="/admin/AddCustomer">AddCustomer</Link>
               </Button>
               <Button variant="contained Box2">
                  <Link to="/admin/deleteCustomer">DeleteCustomer</Link>
               </Button>
               <Button variant="contained Box2">
                  <Link to="/admin/UpdateCustomer">UpdateCustomer</Link>
               </Button>
            </ListGroup>
         </div>
         <Button variant="contained">
            <Link to="/Main"> Go To Home Page</Link>
         </Button>
      </div>

   );
}


export default AdminMenu;
      // <div className="adminMenu" id="adminMenu">
      //    <Typography variant="h4" className="HeadLine">Menu</Typography><br />
      //    <ul>
      //       <li><NavLink className="a" to="/addCompany">AddCompany</NavLink></li> <br />
      //       <li><NavLink className="a" to="/updateCompany">UpdateCompany</NavLink></li> <br />
      //       <li><NavLink className="a" to="/deleteCompany">DeleteCompany</NavLink></li> <br />
      //       <li><NavLink className="a" to="/getAllCompanies">Showall companies</NavLink></li><br />
      //       <li><NavLink className="a" to="/getOneCompany">Showonecompany by id</NavLink></li><br />
      //       <li><NavLink className="a" to="/addCustomer">Addcustomer</NavLink></li><br />
      //       <li><NavLink className="a" to="/updateCustomer">Updatecustomer</NavLink></li><br />
      //       <li><NavLink className="a"  to="/deleteCustomer">Deletecustomer</NavLink></li><br />
      //       <li><NavLink className="a"  to="/getAllCustomers">Showallcustomers</NavLink></li><br />
      //       <li><NavLink className="a"  to="/getOneCustomer">Showonecustomer</NavLink></li><br />
      //    </ul>