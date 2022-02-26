import { AccountCircle } from "@mui/icons-material";
import { Box, Button, ButtonGroup, MenuItem, Select, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ClientModel from "../models/ClientModel";
import Globals from "../store/Globals";
import Store from "../store/Store";
import { loginClientString } from "../store/StoreState";
import notify from "../utils/Notify";
import LockIcon from '@mui/icons-material/Lock';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

function Login(): JSX.Element {

  const { register, handleSubmit, setError, formState: { errors } } = useForm<ClientModel>();

  const [jwtToken, setToken] = useState("User has no token, bad bad user !!!");

  const navigate = useNavigate();


  function send(clientModel: ClientModel) {

    console.log(clientModel.clientType);
    console.log(Globals.urls.administrator+"Login");
    console.log(clientModel);
    if (clientModel.clientType == "Administrator") {
      axios.post(Globals.urls.administrator + "Login", clientModel)
        .then((response) => {
          console.log(response.data);
          setToken(response.data);
          Store.dispatch(loginClientString(response.data));
          notify.success("successfully loged in");
          navigate("/adminMenu");
        }).catch(error => {
          console.log(error)
          notify.error("you can't touch this !!!");
          setToken("Error in getting response from the server");
        });
    } if (clientModel.clientType == "Company") {
      axios.post<string>(Globals.urls.company + "Login", clientModel)
        .then((response) => {
          console.log(response.data);
          setToken(response.data);
          Store.dispatch(loginClientString(response.data));
          notify.success("successfully loged in");
          navigate("/companyMenu");
        }).catch(error => {
          notify.error("you can't touch this !!!");
          setToken("Error in getting response from the server");
        });
    } if (clientModel.clientType == "Customer") {
      axios.post<string>(Globals.urls.customer + "Login", clientModel)
        .then((response) => {
          console.log(response.data);
          setToken(response.data);
          Store.dispatch(loginClientString(response.data));
          notify.success("successfully loged in");
          navigate("/customerMenu");
        }).catch(error => {
          notify.error("you can't touch this !!!");
          setToken("Error in getting response from the server");
        });
    }
  }
  return (
    <div className="Login">
      <div className="login">
        <form onSubmit={handleSubmit(send)}>
          <Typography variant="h4" className="HeadLine">Log in to your Coupons account</Typography><br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Email" variant="standard"
              {...register("email", {
                required: { value: true, message: "field is required" }
                , minLength: { value: 5, message: "minimum length must be 5" }
              })} />
          </Box>
          <span> {errors.email && <p>{errors.email.message}</p>}</span>
          <br /><br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" variant="standard"
              {...register("password", {
                required: { value: true, message: "field is required" },

                maxLength: { value: 20, message: "maximum length is 20" }
              })} />
          </Box>
          <span> {errors.password && <p>{errors.password.message}</p>}</span>
          <br /><br />

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <PermIdentityIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />

            <Select style={{ width: 250 }} {...register("clientType", { required: { value: true, message: "field is required" } })}>
              <MenuItem value={"Administrator"} >Administrator</MenuItem>
              <MenuItem value={"Company"}>Company</MenuItem>
              <MenuItem value={"Customer"}>Customer</MenuItem>
            </Select>
          </Box>
          <span> {errors.clientType && <p>{errors.clientType.message}</p>}</span>
          <br /><br />


          <ButtonGroup variant="contained" fullWidth>
            <Button type="submit" color="primary">Send</Button>
          </ButtonGroup><br />

          <Typography variant="h6" className="HeadLine">Don't have account? Sign up right now</Typography><br />

          <ButtonGroup variant="contained" fullWidth>
            <Button onClick={() => { navigate("/registration"); }} color="secondary">Sign up</Button>
          </ButtonGroup><br />

        </form>
      </div>

    </div>
  );
}

export default Login;