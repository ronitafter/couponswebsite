import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
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

   useEffect(() => {
      if (Store.getState().StoreState.loginClient.clientType != "Customer") {
         notify.error("you are not allowed to enter!")
         navigate("/login");
      }
      axios.get(Globals.urls.company + "id" + id, { headers: { "authorization": token } }).then((response) => {
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
   }, []);
   return (
      <div className="companydetails">
         Id : {companyData.id} <br />
         name : {companyData.name} <br />
         Email : {companyData.email} <br />
         Password : {companyData.password} <br />
      </div>
   );
}

export default GetCompanyDetails;