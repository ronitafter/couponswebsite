import { AccountCircle } from "@mui/icons-material";
import { Box, Button, ButtonGroup, MenuItem, Select, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ClientModel, { ClientType } from "../Coupons/ClientModel";
import Globals from "../store/Globals";
import Store from "../store/Store";
import { setClientCredentials } from "../store/StoreState";
import notify from "../utils/Notify";
import LockIcon from '@mui/icons-material/Lock';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Form } from "react-bootstrap";

function Login(): JSX.Element {

  const { register, handleSubmit, formState: { errors } } = useForm<ClientModel>();
  const navigate = useNavigate();

  async function send(clientModel: ClientModel) {
    const paramsByType = {
      ADMINISTRATOR: {
        redirectPage: '/AdminPage',
      }
      ,
      COMPANY: { redirectPage: '/companyMenu' }, CUSTOMER: {
        redirectPage: '/customerMenu'
      }

    }

    const { redirectPage } = paramsByType[clientModel.clientType];
    console.log(clientModel.clientType)
    try {
      const response = await axios.post(Globals.urls.login, clientModel);
      const { token, clientType } = response.data;
      Store.dispatch(setClientCredentials(token, clientType));
      notify.success("successfully loged in");
      navigate(redirectPage);
    } catch (e) {
      console.log(clientModel.clientType)
      notify.error('Failed to log in');
    }
  }

  return (
    <div className="Login">
      <div className="login Box">
        <form onSubmit={handleSubmit(send)}>
          <Typography variant="h4" className="HeadLine">Log in to your account</Typography><br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Email" variant="standard"
              {...register("email", {
                required: { value: true, message: "field is required" }
                , minLength: { value: 3, message: "minimum length must be 3 " }
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
              <MenuItem value={ClientType.ADMINISTRATOR}>Administrator</MenuItem>
              <MenuItem value={ClientType.COMPANY}>Company</MenuItem>
              <MenuItem value={ClientType.CUSTOMER}>Customer</MenuItem>
            </Select>
          </Box>
          <span> {errors.clientType && <p>{errors.clientType.message}</p>}</span>
          <br /><br />


          <ButtonGroup variant="contained" fullWidth>
            <Button type="submit" color="primary">Send</Button>
          </ButtonGroup><br />

        </form>
      </div>
    </div>
  );
}


export default Login;