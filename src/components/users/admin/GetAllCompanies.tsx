import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CompanyDetails from "../../models/CompanyDetails";
import CompanyProps from "../../props/CompanyProps";
import Globals from "../../store/Globals";
import Store from "../../store/Store";
import { loginClientString } from "../../store/StoreState";
import notify from "../../utils/Notify";

function GetAllCompanies(): JSX.Element {
  const [companyData, setData] = useState([new CompanyDetails()]);
  const navigate = useNavigate();
  let token: string = Store.getState().StoreState.loginClient.token;
  useEffect(() => {
    if (Store.getState().StoreState.loginClient.userType !== "Administrator") {
      notify.error("you are not allowed to enter!")
      navigate("/login");
    }
    axios.get(Globals.urls.administrator + "allCompanies", { headers: { "Authorization": token } })
      .then((response) => {
        // Store.dispatch(loginClientString(response.headers.Authorization = `${token}`));
        setData(response.data)
      }).catch(error => { console.log(error) });
  }, []);

  return (
    <div className="getAllCompanies">
      <div className="companies">
        <h1>Companies</h1><hr />
        {companyData.map(item => <CompanyProps
          id={item.id}
          name={item.name}
          email={item.email} />
        )}

      </div>
    </div>
  );
}

export default GetAllCompanies;