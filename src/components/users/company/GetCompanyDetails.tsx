import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import CompanyDetails from '../../models/CompanyDetails';
import Globals from '../../store/Globals';
import Store from '../../store/Store';
import { loginClientString } from '../../store/StoreState';
import notify from '../../utils/Notify';



function GetCompanyDetails(): JSX.Element {

   var [companyData, setData] = useState(new CompanyDetails());
   const navigate = useNavigate();
   let token: string = Store.getState().StoreState.loginClient.token;
   let id: string = "";

   // useEffect(() => {
   //    if (Store.getState().StoreState.loginClient.clientType != "Company") {
   //       notify.error("you are not allowed to enter!")
   //       navigate("/login");
   //    }
   axios.get(Globals.urls.company + "details" + id, { headers: { "authorization": token } }).then((response) => {
      if (response.data.length < 1) {
         notify.error("details not found");
         setData(new CompanyDetails());
         return;
      }
      Store.dispatch(loginClientString(response.headers.Authorization = `${token}`));
      console.log(response.data);
      setData(response.data);
      notify.success("details was found");
   }).catch(error => { console.log(error) });
   // }, []);
   return (
      <div>
         <div className="companydetails">
            Id : {companyData.id} <br />
            name : {companyData.name} <br />
            Email : {companyData.email} <br />
            Password : {companyData.password} <br />
         </div>
         <Button variant="contained">
            <Link to="/CompanyPage">Go To CompanyPage</Link>
         </Button>
         <Button variant="contained">
            <Link to="/Main"> Go To Home Page</Link>
         </Button>
      </div>
   );
}

export default GetCompanyDetails;