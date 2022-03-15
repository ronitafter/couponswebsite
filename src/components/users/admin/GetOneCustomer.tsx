import axios from "axios";
import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerDetails from "../../models/CustomerDetails";
import Globals from "../../store/Globals";
import Store from "../../store/Store";
import { loginClientString } from "../../store/StoreState";
import notify from "../../utils/Notify";

function GetOneCustomer(): JSX.Element {
  useEffect(() => {

    if (Store.getState().StoreState.loginClient.userType != "Administrator") {
      notify.error("you are not allowed to enter!")
      navigate("/login");
    }
  });
  var [customerDetails, setData] = useState(new CustomerDetails());
  let id: string = "";
  const navigate = useNavigate();
  let token: string = Store.getState().StoreState.loginClient.token;

  function updateNumber(args: SyntheticEvent) {
    id = (args.target as HTMLInputElement).value.toString();
    console.log(id);
  }

  function searchCompany() {
    /*axios.get(myUrl).then((response)=>{setData(response.data)})*/
    axios.get(Globals.urls.administrator + "/customer/" + id, { headers: { "authorization": token } }).then((response) => {
      if (response.data.length < 1) {
        notify.error("Customer is not found");
        setData(new CustomerDetails());
        return;
      }
      Store.dispatch(loginClientString(response.headers.Authorization = `${token}`));
      setData(response.data)
      console.log(response.data);
      notify.success("Customer was found !!!");
    }).catch(error => { console.log(error) });
  }
  return (
    <div className="getOneCustomer">
      <input type="number" placeholder="Please enter a company ID" onChange={updateNumber} />
      <input type="button" value="Search" onClick={searchCompany} /><hr /><br />
      Customer id : {customerDetails.id} <br />
      Customer first name : {customerDetails.first_name} <br />
      Customer last name : {customerDetails.last_name} <br />
      Customer email : {customerDetails.email} <br />

    </div>
  );
}

export default GetOneCustomer;