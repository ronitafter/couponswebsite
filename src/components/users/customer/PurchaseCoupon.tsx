import { Select, MenuItem } from "@material-ui/core";
import CategoryIcon from '@mui/icons-material/Category';
import { useEffect, useState } from "react";
import notify from "../../utils/Notify";
import Store from "../../store/Store";
import { Link, useNavigate } from "react-router-dom";
import CouponModel from "../../models/CouponModel";
import axios from "axios";
import Globals from "../../store/Globals";
import CouponsListItem from "../../Coupons/CouponsListProps";
import { Box, Button, Typography } from "@mui/material";
import { ClientType } from "../../Coupons/ClientModel";

function PurchaseCoupon(): JSX.Element {
  const navigate = useNavigate();
  useEffect(() => {

    if (Store.getState().StoreState.loginClient.clientType !== ClientType.CUSTOMER) {
      notify.error("you are not allowed to enter!")
      navigate("/login");
    }
  }, [navigate]);

  const [couponModel, setCouponModel] = useState([new CouponModel()]);
  const [value, setValue] = useState<String>();
  let token: string = Store.getState().StoreState.loginClient.token;

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => { const values = event.target.value; setValue(values as string); };

  function BuyCoupons() {
    axios.get(Globals.urls.customer + "purchase" + value, { headers: { "authorization": token } }).then((response) => {
      if (response.data.length < 1) {
        notify.error("Coupons are not found");
        setCouponModel([new CouponModel()]);
        return;
      }
      setCouponModel(response.data)
      console.log(response.data);
      notify.success("Coupons were found");
    }).catch(error => { console.log(error) });
  }

  return (
    <div>
      <div className="couponsByCategory">
        <div className="add Coupon-Box">

          <Typography variant="h4" className="HeadLine">Choose category</Typography><br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <CategoryIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <Select onChange={handleChange} style={{ width: 200 }} labelId="select-helper" id="select-helper">
              <MenuItem value={"Food"}>Food</MenuItem>
              <MenuItem value={"Electricity"}>Electricity</MenuItem>
              <MenuItem value={"Restaurant"}>Restaurant</MenuItem>
              <MenuItem value={"Vacation"}>Vacation</MenuItem>
            </Select>
            <input type="button" value="Search" onClick={BuyCoupons} /><br />
          </Box>
          <br /> <br />
          {couponModel.map(item => <CouponsListItem
            image={item.image}
            title={item.title}
            price={item.price} id={0}
            companyId={item.companyId}
            categories={item.categories}
            description={item.description}
            start_date={item.start_date}
            end_date={item.end_date}
            amount={item.amount}
          />
          )}
        </div>
      </div>
      <div>
        <Button variant="contained">
          <Link to="#">Buy</Link>
        </Button>
      </div>
      <Button variant="contained">
        <Link to="/CustomerPage">Go to Customer Page</Link>
      </Button>
      <Button variant="contained">
        <Link to="/Main">Go to Home Page</Link>
      </Button>

    </div>
  );
}

export default PurchaseCoupon;