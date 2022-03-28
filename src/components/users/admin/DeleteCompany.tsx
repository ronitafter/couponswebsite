import axios from 'axios';
import React, { SyntheticEvent, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Globals from '../../store/Globals';
import Store from '../../store/Store';
import { loginClientString } from '../../store/StoreState';
import notify from '../../utils/Notify';


function DeleteCompany(): JSX.Element {
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

  async function deleteCompany() {
    try {
      await axios.delete(Globals.urls.administrator + "company" + id,
        { headers: { "authorization": token } });
      notify.success('Successfully deleted company');
    } catch (e) {
      notify.error('Error while deleting a company');
    }
  }
  return (
    <div>

      <div className="deleteCompany Box">
        To delete company enter a company ID <br /><br />
        <input type="number" placeholder="Please enter a company ID" onChange={updateNumber} />
        <input type="button" value="Delete" onClick={deleteCompany} /><br />
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

export default DeleteCompany;