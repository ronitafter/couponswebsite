import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CustomerDetails from '../../models/CustomerDetails';
import Globals from '../../store/Globals';
import Store from '../../store/Store';
import { loginClientString } from '../../store/StoreState';
import notify from '../../utils/Notify';

  
function GetCustomerDetails(): JSX.Element {

    var [customerData, setData] = useState(new CustomerDetails());
    const navigate = useNavigate();
    let token: string = Store.getState().StoreState.loginClient.token;

    useEffect(() => {
      if (Store.getState().StoreState.loginClient.clientType != "Customer") {
        notify.error("you are not allowed to enter!")
        navigate("/login");
      }
      axios.get(Globals.urls.customer + "CustomerDetails", { headers: { "authorization": token } }).then((response) => {
        if (response.data.length < 1) {
          notify.error("details not found");
          setData(new CustomerDetails());
          return;
        }
        Store.dispatch(loginClientString(response.headers.Authorization = `${token}`));
        console.log(response.data);
        setData(response.data);
        notify.success("details was found");
      }).catch(error => { console.log(error) });
    }, []);
    return (
      <div className="customerdetails">
        My Id : {customerData.id} <br />
        My first name : {customerData.first_name} <br />
        My last_name : {customerData.last_name} <br />
        My Email : {customerData.email} <br />
        My Password : {customerData.password} <br />
      </div>
    );
  }

export default GetCustomerDetails;