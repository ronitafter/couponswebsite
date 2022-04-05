import axios from "axios";
import { SyntheticEvent, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CompanyDetails from "../../models/CompanyDetails";
import Globals from "../../store/Globals";
import Store from "../../store/Store";
import store from "../../store/Store";
import notify from "../../utils/Notify";

function GetOneCompany(): JSX.Element {
  // useEffect(() => {

  //   if (Store.getState().StoreState.loginClient.userType != "Administrator") {
  //     notify.error("you are not allowed to enter!")
  //     navigate("/login");
  //   }
  // });

  var [companyDetails, setData] = useState(new CompanyDetails());
  let id: string = "";
  const navigate = useNavigate();
  let token: string = store.getState().StoreState.loginClient.token;

  function updateNumber(args: SyntheticEvent) {
    id = (args.target as HTMLInputElement).value.toString();
    console.log(id);
  }

  function searchCompany() {
    /*axios.get(myUrl).then((response)=>{setData(response.data)})*/
    axios.get(Globals.urls.administrator + "company/" + id, { headers: { "authorization": token } }).then((response) => {
      if (response.data.length < 1) {
        notify.error("company is not found !!!");
        setData(new CompanyDetails());
        return;
      }
      setData(response.data)
      console.log(response.data);
      notify.success("Company was found !!!");
    }).catch(error => { console.log(error) });
  }

  return (
    <div>
      <div className="getOneCompany Box">
        <input type="number" placeholder="Please enter a company ID" onChange={updateNumber} />
        <input type="button" value="Search" onClick={searchCompany} /><br />
        Company id : {companyDetails.id} <br />
        Company name : {companyDetails.name} <br />
        Company email : {companyDetails.email} <br />
        Company password : {companyDetails.password} <br />
      </div>
      <Button variant="contained">
        <Link to="/AdminPage">Go To AdminPage</Link>
      </Button>
      <Button variant="contained">
        <Link to="/Main"> Go To Home Page</Link>
      </Button>
    </div>
  );
}

export default GetOneCompany;