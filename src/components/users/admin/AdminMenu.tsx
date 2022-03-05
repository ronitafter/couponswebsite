import { Typography } from "@mui/material";
import { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
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
      <div className="adminMenu" id="adminMenu">
        <ListGroup className='d'>
         <ListGroup.Item><NavLink className="a" to="/addCompany">AddCompany</NavLink></ListGroup.Item>
            <ListGroup.Item><NavLink className="a" to="/updateCompany">UpdateCompany</NavLink></ListGroup.Item>
            <ListGroup.Item><NavLink className="a" to="/deleteCompany">DeleteCompany</NavLink></ListGroup.Item>
            <ListGroup.Item><NavLink className="a" to="/getAllCompanies">Showall companies</NavLink></ListGroup.Item>
            <ListGroup.Item><NavLink className="a" to="/getOneCompany">Showonecompany by id</NavLink></ListGroup.Item>
        </ListGroup>
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