import axios from "axios";
import { useEffect, useState } from "react";
import Globals from "../store/Globals";
import Store from "../store/Store";
import { loginClientString } from "../store/StoreState";
import notify from "../utils/Notify";
import CouponModel from "./CouponModel";

interface CouponDetailsProps {
   id: string;
}

function CouponDetails(props: CouponDetailsProps): JSX.Element {
   const [couponModel, setCouponModel] = useState(new CouponModel());
   let token: string = Store.getState().StoreState.loginClient.token;


   useEffect(() => {
      axios.get(Globals.urls.administrator + "oneCouponById/" + props.id).then((response) => {
         setCouponModel(response.data)
         console.log(response.data);
      }).catch(error => { console.log(error) });
   }, []);

   function purchaseCoupon() {
      if (Store.getState().StoreState.loginClient.userType != "Customer") {
         notify.error("Log in to purchase coupons");
      }
      axios.post<string>(Globals.urls.customer + "purchaseCoupon", couponModel, { headers: { "authorization": token } })
         .then((response) => {
            console.log(response.data);
            Store.dispatch(loginClientString(response.headers.Authorization = `${token}`));
            notify.success("successfully purchased");
         }).catch(error => {
            notify.error("error while purchasing coupon")
            console.log(error)
         });
   }

   return (
      <div className="couponInfo">
         <img src={couponModel.image} width="30%" alt="main" className="imgCoupon" />
         <div className="smallBox">
            <h2>{couponModel.title}</h2> <br /> <br />
            <h2> Category: </h2>{couponModel.categories} <br />
            <h2> Description: </h2>{couponModel.description} <br />
            <h2>Amaunt: </h2>{couponModel.amount} <br />
            <h2> Available from: </h2>{couponModel.start_date} till {couponModel.end_date} <br />
            <h2> Price: </h2>{couponModel.price} NIS<br /> <br />
            <button className="couponBTN" onClick={purchaseCoupon}>Purchase</button>
         </div>

      </div>
   );
}

export default CouponDetails;