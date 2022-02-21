import axios from "axios";
import { SyntheticEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Globals from "../../store/Globals";
import Store from "../../store/Store";
import { loginClientString } from "../../store/StoreState";
import notify from "../../utils/Notify";



function DeleteCustomer(): JSX.Element {
  useEffect(() => {

    if (Store.getState().StoreState.loginClient.userType != "Administrator") {
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

  function deleteCustomer() {
    axios.delete(Globals.urls.administrator + "deleteCustomer/" + id, { headers: { "authorization": token } }).then((response) => {
      Store.dispatch(loginClientString(response.headers.Authorization = `${token}`));
      notify.success("successfully deleted");
      navigate("/adminMenu");
    }).catch(error => {
      console.log(error);
      notify.error("error while deleting a customer");
    });

  }
  return (
    <div className="deleteCustomer">
      To delete customer enter a customer ID <br /><br />
      <input type="number" placeholder="Please enter a customer ID" onChange={updateNumber} />
      <input type="button" value="Delete" onClick={deleteCustomer} /><br />
    </div>
  );
}

export default DeleteCustomer;