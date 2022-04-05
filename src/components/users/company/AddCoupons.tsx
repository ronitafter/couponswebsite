import { Typography, Box, TextField, ButtonGroup, Button, Select, MenuItem } from "@mui/material";
import PinIcon from '@mui/icons-material/Pin';
import DescriptionIcon from '@mui/icons-material/Description';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import CategoryIcon from '@mui/icons-material/Category';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ImageIcon from '@mui/icons-material/Image';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import CouponModel from "../../models/CouponModel";
import Globals from "../../store/Globals";
import Store from "../../store/Store";
import notify from "../../utils/Notify";


function AddCoupon(): JSX.Element {
  useEffect(() => {

    if (Store.getState().StoreState.loginClient.clientType != "Company") {
      notify.error("you are not allowed to enter!")
      navigate("/login");
    }
  }, []);
  const { register, handleSubmit, setError, formState: { errors } } = useForm<CouponModel>();
  const navigate = useNavigate();
  let token: string = Store.getState().StoreState.loginClient.token;

  async function send(couponModel: CouponModel) {
    try {
      couponModel.companyId = Number(Store.getState().StoreState.loginClient.userId);
      await axios.post<string>(Globals.urls.company + "coupon", couponModel,
        { headers: { "authorization": token } })
      notify.success('Successfully added coupon');
    } catch (e) {
      notify.error('Error while adding a coupon');
    }
  }
  return (
    <div className="addCoupon">
      <div className="add Box">
        <form onSubmit={handleSubmit(send)}>
          <Typography variant="h4" className="HeadLine">Add new Coupon</Typography><br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <SubtitlesIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="title" variant="standard"
              {...register("title", {
                required: { value: true, message: "this field is required" },
                maxLength: { value: 20, message: "max length is 20" }
              })} />
          </Box>
          <br />
          <span> {errors.title && <p>{errors.title.message}</p>}</span>
          <br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <CategoryIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <Select style={{ width: 200 }} label="categories" variant="standard"
              {...register("categories", {
                required: { value: true, message: "this field is required" }
              })}>
              <MenuItem value={"Food"}>Food</MenuItem> <br />
              <MenuItem value={"Electronic"}>Electronic</MenuItem>  <br />
              <MenuItem value={"House"}>House</MenuItem> <br />
              <MenuItem value={"Beauty"}>Beauty</MenuItem> <br />
              <MenuItem value={"Travel"}>Travel</MenuItem> <br />
              <MenuItem value={"Events"}>Events</MenuItem> <br />
              <MenuItem value={"Fashion"}>Fashion</MenuItem> <br />
            </Select>
          </Box>
          <br />
          <span> {errors.categories && <p>{errors.categories.message}</p>}</span>
          <br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <DescriptionIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="standard-multiline-static" label="description" variant="standard" multiline
              {...register("description", {
                required: { value: true, message: "this field is required" },
                maxLength: { value: 300, message: "max length is 300" }
              })} />
          </Box>
          <br />
          <span> {errors.description && <p>{errors.description.message}</p>}</span>
          <br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <PinIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="amount" variant="standard"
              {...register("amount", {
                required: { value: true, message: "this field is required" }
              })} />
          </Box>
          <br />
          <span> {errors.amount && <p>{errors.amount.message}</p>}</span>
          <br />

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccessTimeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="date" label="start date" type="date" InputLabelProps={{ shrink: true, }}
              {...register("start_date", {
                required: { value: true, message: "this field is required" }
              })} />
          </Box>
          <br />
          <span> {errors.start_date && <p>{errors.start_date.message}</p>}</span>
          <br />

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccessTimeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="date" label="end_date" type="date" InputLabelProps={{ shrink: true, }}
              {...register("end_date", {
                required: { value: true, message: "this field is required" }
              })} />
          </Box>
          <br />
          <span> {errors.end_date && <p>{errors.end_date.message}</p>}</span>
          <br />

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AttachMoneyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" type="number" label="price" variant="standard"
              {...register("price", {
                required: { value: true, message: "this field is required" }
              })} />
          </Box>
          <br />
          <span> {errors.price && <p>{errors.price.message}</p>}</span>
          <br />

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <ImageIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" type="link" label="image" variant="standard"
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
        <Link to="/CompanyPage">Go To Company Page</Link>
      </Button>
      <Button variant="contained">
        <Link to="/Main"> Go To Home Page</Link>
      </Button>
    </div>
  );
}

export default AddCoupon;