import axios from "axios";
import { SyntheticEvent, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Globals from "../../store/Globals";
import Store from "../../store/Store";
import { loginClientString } from "../../store/StoreState";
import notify from "../../utils/Notify";

function DeleteCoupon(): JSX.Element {
  useEffect(() => {

    if (Store.getState().StoreState.loginClient.clientType != "Company") {
      notify.error("you are not allowed to enter!")
      navigate("/login");
    }
  });
  let id: string = "";
  const navigate = useNavigate();
  let token: string = Store.getState().StoreState.loginClient.token;

  function updateNumber(args: SyntheticEvent) {
    id = (args.target as HTMLInputElement).value.toString();
    console.log(id);
  }

  function deleteCompany() {
    axios.delete(Globals.urls.company + "coupon" + id, { headers: { "authorization": token } }).then((response) => {
      Store.dispatch(loginClientString(response.headers.Authorization = `${token}`));
      notify.success("successfully deleted");
      navigate("/companyMenu");
    }).catch(error => {
      console.log(error);
      notify.error("error while deleting coupon");
    });

  }
  return (
    <div>
      <div className="deleteCoupon Box">
        enter a coupon ID <br /><br />
        <input type="number" placeholder="enter a coupon ID" onChange={updateNumber} />
        <input type="button" value="Delete" onClick={deleteCompany} /><br />
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

export default DeleteCoupon;