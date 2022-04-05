import { AccountCircle } from "@mui/icons-material";
import { Box, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Globals from "../../store/Globals";
import Store from "../../store/Store";
import notify from "../../utils/Notify";
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import CustomerDetails from "../../models/CustomerDetails";
import "./AddCustomer.css";
import { ClientType } from "../../Coupons/ClientModel";

function AddCustomer(): JSX.Element {
  useEffect(() => {

    if (Store.getState().StoreState.loginClient.clientType !== ClientType.ADMINISTRATOR) {
      notify.error("client not authorized")
      navigate("/login");
    }
  }, []);
  const { register, handleSubmit, reset: resetForm, formState: { errors } } = useForm<CustomerDetails>();
  const navigate = useNavigate();
  let token: string = Store.getState().StoreState.loginClient.token;

  async function send(customerDetails: CustomerDetails) {
    try {
      await axios.post<string>(Globals.urls.administrator + "customer", customerDetails, { headers: { "authorization": token } })
      notify.success('Successfully added customer');
      resetForm();
    } catch (e) {
      notify.error('Error while adding a customer');
    }
  }

  return (
    <div className="addCustomer">
      <div className="add">
        <form onSubmit={handleSubmit(send)}>
          <Typography variant="h4" className="HeadLine">Add Customer</Typography><br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="First name" variant="standard"
              {...register("first_name", {
                required: { value: true, message: "this field is required" },
                maxLength: { value: 20, message: "max length is 20" }
              })} />
          </Box>
          <br />
          <span> {errors.first_name && <p>{errors.first_name.message}</p>}</span>
          <br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Last name" variant="standard"
              {...register("last_name", {
                required: { value: true, message: "this field is required" },
                maxLength: { value: 20, message: "max length is 20" }
              })} />
          </Box>
          <br />
          <span> {errors.last_name && <p>{errors.last_name.message}</p>}</span>
          <br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Email" variant="standard" {...register("email", {
              required: { value: true, message: "this field is required" },
              maxLength: { value: 50, message: "max length is 50" }
            })} />
          </Box>
          <br />
          <span> {errors.email && <p>{errors.email.message}</p>}</span>
          <br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" variant="standard"
              {...register("password", {
                required: { value: true, message: "this field is required" }
              })} />
          </Box>
          <br />
          <span> {errors.password && <p>{errors.password.message}</p>}</span>
          <br />
          <br />

          <ButtonGroup>
            {/*<ButtonGroup variant="contained" fullWidth>*/}
            <Button type="submit" color="primary">Send</Button>
          </ButtonGroup>
        </form>
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

export default AddCustomer;