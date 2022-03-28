import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { SyntheticEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CouponModel from "../../models/CouponModel";
import CouponsListProps from "../../Coupons/CouponsListProps";
import Globals from "../../store/Globals";
import Store from "../../store/Store";
import { loginClientString } from "../../store/StoreState";
import notify from "../../utils/Notify";




function GetCompanyCouponsByPrice(): JSX.Element {
  useEffect(() => {

    if (Store.getState().StoreState.loginClient.clientType !== "Company") {
      notify.error("you are not allowed to enter!")
      navigate("/login");
    }
  });
  const [coupons, setCoupons] = useState([new CouponModel()]);
  let price: string = "";
  const navigate = useNavigate();
  let token: string = Store.getState().StoreState.loginClient.token;

  function updateNumber(args: SyntheticEvent) {
    price = (args.target as HTMLInputElement).value.toString();
  }




  function findCouponsByCategory() {
    axios.get(Globals.urls.company + "coupon" + price, { headers: { "authorization": token } }).then((response) => {
      if (response.data.length < 1) {
        notify.error("Coupons are not found !!!");
        setCoupons([new CouponModel()]);
        return;
      }
      Store.dispatch(loginClientString(response.headers.Authorization = `${token}`));
      const { id, companyId, categories, title, description, start_date, end_date, amount, price, image } = response.data.couponModel;
      setCoupons([new CouponModel(response.data.couponModel)]);
      console.log(response.data.couponModel);
      notify.success("Coupons were found !!!");
    }).catch(error => { console.log(error) });
  }
  return (
    <div className="couponsByMaxPrice">
      <div className="add">

        <Typography variant="h4" className="HeadLine">price</Typography><br />
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <input type="number" placeholder="Please enter a coupon ID" onChange={updateNumber} />
          <input type="button" value="Find" onClick={findCouponsByCategory} /><br />
        </Box>
        {coupons.map(item => <CouponsListProps
          image={item.image}
          title={item.title}
          price={item.price} id={0}
          companyId={item.companyId}
          categories={item.categories}
          description={item.description}
          start_date={item.start_date}
          end_date={item.end_date}
          amount={item.amount}
        />)}
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

export default GetCompanyCouponsByPrice;