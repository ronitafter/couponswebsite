import { AccountCircle } from "@mui/icons-material";
import { Box, Button, ButtonGroup, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Globals from "../../store/Globals";
import Store from "../../store/Store";
import notify from "../../utils/Notify";
import LockIcon from '@mui/icons-material/Lock';
import BusinessIcon from '@mui/icons-material/Business';
import CompanyDetails from "../../models/CompanyDetails";
import { useEffect } from "react";
import { send } from "process";
import { ClientType } from "../../Coupons/ClientModel";
// import "./Login.css";


function AddCompany(): JSX.Element {
  const navigate = useNavigate();
  useEffect(() => {
    if (Store.getState().StoreState.loginClient.clientType !== ClientType.ADMINISTRATOR) {
      notify.error("you are not allowed to enter!")
      navigate("/login");
    }
  }, []);

  const { register, handleSubmit, reset: resetForm, formState: { errors } } = useForm<CompanyDetails>();
  let token: string = Store.getState().StoreState.loginClient.token;


  async function send(companyDetails: CompanyDetails) {
    try {
      await axios.post<string>(Globals.urls.administrator + "company", companyDetails, { headers: { "authorization": token } })
      notify.success('Successfully added company');
      resetForm();
    } catch (errors) {
      notify.error('Error while adding a company')
    };
  }

  return (
    <div className="AddCompany Box">
      <div className="add">
        <form onSubmit={handleSubmit(send)}>
          <Typography variant="h4" className="HeadLine">Add Company</Typography><br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <BusinessIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Company name" variant="standard"
              {...register("name", {
                required: { value: true, message: "this field is required" },
                maxLength: { value: 20, message: "max length is 20" }
              })}
            />
          </Box>
          <br />
          <span> {errors.name && <p>{errors.name.message}</p>}</span>
          <br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Company Email" variant="standard"
              {...register("email", {
                required: { value: true, message: "this field is required" },
                maxLength: { value: 50, message: "max length is 50" }
              })}
            />
          </Box>
          <br />
          <span> {errors.email && <p>{errors.email.message}</p>}</span>
          <br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" variant="standard"
              {...register("password", {
                required: { value: true, message: "this field is required" }
              })}
            />
          </Box>
          <br />
          <span> {errors.password && <p>{errors.password.message}</p>}</span>
          <br />
          <br />
          <ButtonGroup variant="contained" fullWidth>
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
export default AddCompany;

