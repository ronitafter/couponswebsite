import { Box, Button, ButtonGroup, FormControl, FormHelperText, Input, TextField, Typography } from "@mui/material";
import axios from "axios";
import { SyntheticEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import CompanyDetails from "../../models/CompanyDetails";
import Globals from "../../store/Globals";
import Store from "../../store/Store";
import { setClientCredentials } from "../../store/StoreState";
import notify from "../../utils/Notify";

function UpdateCompany(): JSX.Element {
  // useEffect(() => {

  //   if (Store.getState().StoreState.loginClient.clientType != "Administrator") {
  //     notify.error("you are not allowed to enter!")
  //     navigate("/login");
  //   }
  // });
  var [companyDetails, setData] = useState(new CompanyDetails());
  let id: string = "";
  const { register, handleSubmit, setError, formState: { errors } } = useForm<CompanyDetails>();
  const navigate = useNavigate();
  let token: string = Store.getState().StoreState.loginClient.token;


  function updateNumber(args: SyntheticEvent) {
    id = (args.target as HTMLInputElement).value.toString();
    console.log(id);
  }

  function searchCompany() {

    axios.get(Globals.urls.administrator + "company/" + id, { headers: { "authorization": token } }).then((response) => {
      if (response.data.length < 1) {
        notify.error("company is not found");
        setData(new CompanyDetails());
        return;
      }
      setData(response.data)
      notify.success("Company was found !!!");
    }).catch(error => { console.log(error) });
  }

  function updateComapny(companyDetails1: CompanyDetails) {
    if (companyDetails1.id == null || companyDetails1.name == "") {
      notify.error("company wasn't choosen")
      return;
    }
    companyDetails1.id = companyDetails.id;
    companyDetails1.name = companyDetails.name;
    companyDetails1.coupons = companyDetails.coupons;

    axios.post<string>(Globals.urls.administrator + "updateCompany", companyDetails1, { headers: { "authorization": token } })
      .then((response) => {
        notify.success("successfully updated");
        navigate("/adminMenu");
      }).catch(error => {

        notify.error("error while updating a company")
      });

    new CompanyDetails();

  }
  return (

    <div className="updateCompany">
      <div className="add Box">
        <form onSubmit={handleSubmit(updateComapny)}>
          <Typography variant="h4" className="HeadLine">Enter a Company ID to change its info</Typography><br />
          <input type="number" placeholder="Please enter a company ID" onChange={updateNumber} />
          <input type="button" value="Search" onClick={searchCompany} /><br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <FormControl disabled variant="standard">
              <Input id="component-disabled" value={companyDetails.id}
                {...register("id")} />
              <FormHelperText>ID</FormHelperText>
            </FormControl>
          </Box>
          <span> {errors.id && <p>{errors.id.message}</p>}</span>
          <br /><br />

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <FormControl disabled variant="standard">
              <Input id="component-disabled" value={companyDetails.name}
                {...register("name")} />
              <FormHelperText>Name</FormHelperText>
            </FormControl>
          </Box>
          <span> {errors.name && <p>{errors.name.message}</p>}</span>
          <br /><br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <FormControl variant="standard">
              <TextField id="input-with-sx" label="enter a new email" variant="standard"
                {...register("email", {
                  required: { value: true, message: "this field is required" },
                  maxLength: { value: 50, message: "max length is 50" }
                })} />
              <FormHelperText>Current Email : {companyDetails.email}</FormHelperText>
            </FormControl>
          </Box>
          <br />
          <span> {errors.email && <p>{errors.email.message}</p>}</span>
          <br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <FormControl variant="standard">
              <TextField id="standard-helperText" label="enter a new password" variant="standard"
                {...register("password", {
                  required: { value: true, message: "this field is required" }
                })} />
              <FormHelperText>Current Password : {companyDetails.password}</FormHelperText>
            </FormControl>
          </Box>
          <br />
          <span> {errors.password && <p>{errors.password.message}</p>}</span>
          <br /> <br />

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



export default UpdateCompany;