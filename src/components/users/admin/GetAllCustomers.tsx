import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CustomerDetails from '../../models/CustomerDetails';
import CustomerProps from '../../props/CustomerProps';
import Globals from '../../store/Globals';
import Store from '../../store/Store';
import { loginClientString } from '../../store/StoreState';
import notify from '../../utils/Notify';

function GetAllCustomers(): JSX.Element {
  const [customersdata, setData] = useState([new CustomerDetails()]);
  const navigate = useNavigate();
  let token: string = Store.getState().StoreState.loginClient.token;
  // useEffect(() => {
  //   if (Store.getState().StoreState.loginClient.userType !== "authorization") {
  //     notify.error("you are not allowed to enter!")
  //     navigate("/login");
  //   }
  axios.get(Globals.urls.administrator + "customers", { headers: { "authorization": token } }).then((response) => {
    // Store.dispatch(loginClientString(response.headers.Authorization = `${token}`));
    setData(response.data)
  }).catch(error => { console.log(error) });
  // }, []);

  return (
    <div className="getAllCustomers">
      <div className="companies">
        <h1>Customers info</h1><hr />
        {customersdata.map(item => <CustomerProps
          id={item.id}
          first_name={item.first_name}
          last_name={item.last_name}
          email={item.email}
          password={item.password} />
        )}
      </div>
    </div>
  );
}

export default GetAllCustomers;