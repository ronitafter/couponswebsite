import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ClientType } from '../../Coupons/ClientModel';
import CustomerDetails from '../../models/CustomerDetails';
import Globals from '../../store/Globals';
import Store from '../../store/Store';
import notify from '../../utils/Notify';


function GetCustomerDetails(): JSX.Element {

  var [customerData, setData] = useState(new CustomerDetails());
  const navigate = useNavigate();
  let token: string = Store.getState().StoreState.loginClient.token;
  let id = "";
  useEffect(() => {
    if (Store.getState().StoreState.loginClient.clientType !== ClientType.CUSTOMER) {
      notify.error("wrong user type")
      navigate("/login");
    }
    axios.get(Globals.urls.customer + "details/" + 2, { headers: { "authorization": token } }).then((response) => {
      if (response.data.length < 1) {
        notify.error("details not found");
        setData(new CustomerDetails());
        return;
      }
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