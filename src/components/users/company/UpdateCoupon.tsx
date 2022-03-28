import { Box, Button, ButtonGroup, FormControl, FormHelperText, Input, MenuItem, Select, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import CouponModel from '../../models/CouponModel';
import globals from '../../store/Globals';
import Store from '../../store/Store';
import { loginClientString } from '../../store/StoreState';
import notify from '../../utils/Notify';
import PinIcon from '@mui/icons-material/Pin';
import CategoryIcon from '@mui/icons-material/Category';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ImageIcon from '@mui/icons-material/Image';
import DescriptionIcon from '@mui/icons-material/Description';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SubtitlesIcon from '@mui/icons-material/Subtitles';



function UpdateCoupon(): JSX.Element {
  const navigate = useNavigate();
  // useEffect(() => {

  //   if (Store.getState().StoreState.loginClient.clientType !== "Company") {
  //     notify.error("you are not allowed to enter!")
  //     navigate("/login");
  //   }
  // });
  const { register, handleSubmit, formState: { errors } } = useForm<CouponModel>();
  var [couponModel, setCouponModela] = useState(new CouponModel());
  let id: string = "";
  let token: string = Store.getState().StoreState.loginClient.token;

  function updateNumber(args: SyntheticEvent) {
    id = (args.target as HTMLInputElement).value.toString();
    console.log(id);
  }

  function updateCoupon(couponModel1: CouponModel) {
    couponModel1.id = couponModel.id;
    couponModel1.companyId = couponModel.companyId;
    if (couponModel1.id == null || couponModel1.companyId == null) {
      notify.error("No coupon was selected")
      return;
    }
    console.log(couponModel1);
    console.log(globals.urls.company + "coupon");
    axios.post<string>(globals.urls.company + "coupon", couponModel1, { headers: { "Authorization": token } }).then((response) => {
      Store.dispatch(loginClientString(response.headers.Authorization = `${token}`));
      console.log(response.data);
      notify.success("successfully updated");
      navigate("/companyMenu");
    }).catch(error => {

      notify.error("error while updating a coupon")
    });

    new CouponModel();

  }

  function searchCoupon() {

    axios.get(globals.urls.company + "getOneCouponById/" + id, { headers: { "authorization": token } }).then((response) => {
      if (response.data.length < 1) {
        notify.error("Coupon is not found !!!");
        setCouponModela(new CouponModel());
        return;
      }
      Store.dispatch(loginClientString(response.headers.Authorization = `${token}`));
      setCouponModela(response.data)
      console.log(response.data);
      notify.success("Coupon was found !!!");
    }).catch(error => { console.log(error) });

  }
  return (
    <div className="updateCoupon Box">
      <div className="add">
        <form onSubmit={handleSubmit(updateCoupon)}>
          <Typography variant="h4" className="HeadLine">Enter a Coupon ID to update</Typography><br />
          <input type="number" placeholder="Please enter a coupon ID" onChange={updateNumber} />
          <input type="button" value="Search" onClick={searchCoupon} /><br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <FormControl disabled variant="standard">
              <Input id="component-disabled" value={couponModel.id}
                {...register("id")} />
              <FormHelperText>ID</FormHelperText>
            </FormControl>
          </Box>

          <span> {errors.id && <p>{errors.id.message}</p>}</span>
          <br /><br />

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <FormControl disabled variant="standard">
              <Input id="component-disabled" value={couponModel.companyId}
                {...register("companyId")} />
              <FormHelperText>Company ID</FormHelperText>
            </FormControl>
          </Box>

          <span> {errors.companyId && <p>{errors.companyId.message}</p>}</span>
          <br /><br />

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <FormControl variant="standard">
              <DescriptionIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField id="standard-multiline-static" value={couponModel.description} label="description" variant="standard" multiline
                {...register("description", {
                  required: { value: true, message: "this field is required" },
                  maxLength: { value: 300, message: "max length is 300" }
                })} />
              <FormHelperText>Current first name : {couponModel.description}</FormHelperText>
            </FormControl>
          </Box>
          <span> {errors.description && <p>{errors.description.message}</p>}</span>
          <br /><br />

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <CategoryIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <Select style={{ width: 200 }} label="categories" variant="standard"
              {...register("categories", {
                required: { value: true, message: "this field is required" }
              })}>
              <MenuItem value={"Food"}>Food</MenuItem>
              <MenuItem value={"Electronic"}>Electronic</MenuItem>
              <MenuItem value={"House"}>House</MenuItem>
              <MenuItem value={"Beauty"}>Beauty</MenuItem>
              <MenuItem value={"Travel"}>Travel</MenuItem>
              <MenuItem value={"Events"}>Events</MenuItem>
              <MenuItem value={"Fashion"}>Fashion</MenuItem>
            </Select>
          </Box>
          <span> {errors.categories && <p>{errors.categories.message}</p>}</span>
          <br /><br />

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <SubtitlesIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" value={couponModel.title} label="title" variant="standard"
              {...register("title", {
                required: { value: true, message: "this field is required" },
                maxLength: { value: 20, message: "max length is 20" }
              })} />
          </Box>
          <br />
          <span> {errors.title && <p>{errors.title.message}</p>}</span>
          <br />

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <PinIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" value={couponModel.amount} type="number" label="amount" variant="standard"
              {...register("amount", {
                required: { value: true, message: "this field is required" }
              })} />
          </Box>
          <br />
          <span> {errors.amount && <p>{errors.amount.message}</p>}</span>
          <br />

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccessTimeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="date" label="start date" value={couponModel.start_date} type="date" InputLabelProps={{ shrink: true, }}
              {...register("start_date", {
                required: { value: true, message: "this field is required" }
              })} />
          </Box>
          <br />
          <span> {errors.start_date && <p>{errors.start_date.message}</p>}</span>
          <br />

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccessTimeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="date" value={couponModel.end_date} label="end_date" type="date" InputLabelProps={{ shrink: true, }}
              {...register("end_date", {
                required: { value: true, message: "this field is required" }
              })} />
          </Box>
          <br />
          <span> {errors.end_date && <p>{errors.end_date.message}</p>}</span>
          <br />

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AttachMoneyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" value={couponModel.price} type="number" label="price" variant="standard"
              {...register("price", {
                required: { value: true, message: "this field is required" }
              })} />
          </Box>
          <br />
          <span> {errors.price && <p>{errors.price.message}</p>}</span>
          <br />

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <ImageIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" value={couponModel.image} type="link" label="image" variant="standard"
              {...register("image", {
                required: { value: true, message: "this field is required" }
              })} />
          </Box>
          <br />
          <span> {errors.image && <p>{errors.image.message}</p>}</span>
          <br />
          <ButtonGroup variant="contained" fullWidth>
            <Button type="submit" color="primary">Send</Button>
          </ButtonGroup>
        </form>
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

export default UpdateCoupon;