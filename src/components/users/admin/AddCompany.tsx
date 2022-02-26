import { AccountCircle } from "@mui/icons-material";
import { Box, Button, ButtonGroup, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CompanyModel from "../../models/CompanyModel";
import Globals from "../../store/Globals";
import Store from "../../store/Store";
import { loginClientString } from "../../store/StoreState";
import notify from "../../utils/Notify";
import LockIcon from '@mui/icons-material/Lock';
import BusinessIcon from '@mui/icons-material/Business';
import CompanyDetails from "../../models/CompanyDetails";
// import "./Login.css";




function AddCompany(): JSX.Element {
  useEffect(() => {

    if (Store.getState().StoreState.loginClient.clientType != "Administrator") {
      notify.error("you are not allowed to enter!")
      navigate("/login");
    }
  });

  const { register, handleSubmit, setError, formState: { errors } } = useForm<CompanyDetails>();
  const navigate = useNavigate();
  let token: string = Store.getState().StoreState.loginClient.token;

  function send(companyDetails: CompanyDetails) {
    console.log(companyDetails);
    console.log(Globals.urls.administrator + "addCompany");
    axios.post<string>(Globals.urls.administrator + "addCompany", companyDetails, { headers: { "authorization": token } })
      .then((response) => {
        console.log(response.data);
        Store.dispatch(loginClientString(response.headers.Authorization = `${token}`));
        notify.success("successfully added");
        navigate("/adminMenu");
      }).catch(error => {
        notify.error("error while adding a company")
      });
  }

  return (
    <div className="AddCompany">
      <div className="add">
        <form onSubmit={handleSubmit(send)}>
          <Typography variant="h4" className="HeadLine">Add Company</Typography><br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <BusinessIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Company name" variant="standard"
              {...register("name", {
                required: { value: true, message: "this field is required" },
                maxLength: { value: 20, message: "max length is 20" }
              })} />
          </Box>
          <br />
          <span> {errors.name && <p>{errors.name.message}</p>}</span>
          <br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Company Email" variant="standard" {...register("email", {
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
          <ButtonGroup variant="contained" fullWidth>
            <Button type="submit" color="primary">Send</Button>
          </ButtonGroup>
        </form>
      </div>
    </div>
  );
}

export default AddCompany;
