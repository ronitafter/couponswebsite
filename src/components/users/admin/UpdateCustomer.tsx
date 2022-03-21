import { Box, Button, ButtonGroup, FormControl, FormHelperText, Input, TextField, Typography } from "@mui/material";
import axios from "axios";
import { SyntheticEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CustomerDetails from "../../models/CustomerDetails";
import Globals from "../../store/Globals";
import Store from "../../store/Store";
import { loginClientString } from "../../store/StoreState";
import notify from "../../utils/Notify";

function UpdateCustomer(): JSX.Element {
  useEffect(() => {

    if (Store.getState().StoreState.loginClient.clientType != "Administrator") {
      notify.error("you are not allowed to enter!")
      navigate("/login");
    }
  });
  var [customerDetails, setData] = useState(new CustomerDetails());
  let id: string = "";
  let token: string = Store.getState().StoreState.loginClient.token;

  const { register, handleSubmit, setError, formState: { errors } } = useForm<CustomerDetails>();
  const navigate = useNavigate();


  function updateNumber(args: SyntheticEvent) {
    id = (args.target as HTMLInputElement).value.toString();
  }

  function searchCustomer() {

    axios.get(Globals.urls.administrator + "customer" + id, { headers: { "authorization": token } }).then((response) => {
      if (response.data.length < 1) {
        notify.error("Customer is not found !!!");
        setData(new CustomerDetails());
        return;
      }
      setData(response.data)
      notify.success("Customer was found !!!");
    }).catch(error => { console.log(error) });

  }

  function updateComp(customerDetails1: CustomerDetails) {
    customerDetails1.id = customerDetails.id;

    console.log(customerDetails1);
    console.log(Globals.urls.administrator + "updateCompany");
    axios.post<string>(Globals.urls.administrator + "updateCustomer", customerDetails1, { headers: { "authorization": token } })
      .then((response) => {
        notify.success("successfully updated");
        navigate("/adminMenu");
      }).catch(error => {

        notify.error("error while updating a customer")
      });

    new CustomerDetails();

  }
  return (
    <div className="updateCustomer">
      <div className="add">
        <form onSubmit={handleSubmit(updateComp)}>
          <Typography variant="h4" className="HeadLine">for updating,  enter customerId</Typography><br />
          <input type="number" placeholder="Please enter a customer ID" onChange={updateNumber} />
          <input type="button" value="Search" onClick={searchCustomer} /><br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <FormControl disabled variant="standard">
              <Input id="component-disabled" value={customerDetails.id}
                {...register("id")} />
              <FormHelperText>ID</FormHelperText>
            </FormControl>
          </Box>

          <span> {errors.id && <p>{errors.id.message}</p>}</span>
          <br /><br />

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <FormControl variant="standard">
              <TextField id="input-with-sx" label="enter a new last name" variant="standard"
                {...register("last_name", {
                  required: { value: true, message: "this field is required" },
                  maxLength: { value: 20, message: "max length is 20" }
                })} />
              <FormHelperText> Last Name : {customerDetails.last_name}</FormHelperText>
            </FormControl>
          </Box>
          <span> {errors.last_name && <p>{errors.last_name.message}</p>}</span>
          <br /><br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <FormControl variant="standard">
              <TextField id="input-with-sx" label="enter a new email" variant="standard"
                {...register("email", {
                  required: { value: true, message: "this field is required" },
                  maxLength: { value: 50, message: "max length is 50" }
                })} />
              <FormHelperText> Email : {customerDetails.email}</FormHelperText>
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
              <FormHelperText> Password : {customerDetails.password}</FormHelperText>
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
    </div>
  );
}

export default UpdateCustomer;