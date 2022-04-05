import axios from "axios";
import { useEffect, useState } from "react";
import Globals from "../store/Globals";
import Store from "../store/Store";
import { setClientCredentials } from "../store/StoreState";
import notify from "../utils/Notify";
import CouponModel from "../models/CouponModel";
import { ClientType } from "./ClientModel";

interface CouponDetailsProps {
   id: string;
}

function CouponDetails(props: CouponDetailsProps): JSX.Element {
   const [couponModel, setCouponModel] = useState(new CouponModel());
   let token: string = Store.getState().StoreState.loginClient.token;


   useEffect(() => {
      axios.get(Globals.urls.administrator + "Coupon/" + props.id).then((response) => {
         setCouponModel(response.data)
         console.log(response.data);
      }).catch(error => { console.log(error) });
   }, []);

   async function purchaseCoupon() {
      if (Store.getState().StoreState.loginClient.userType !== ClientType.CUSTOMER) {
         notify.error("Log in to Buy coupons");
      }
      try {
         await axios.post<string>(Globals.urls.customer + "purchase", couponModel, { headers: { "authorization": token } })
         notify.success("successfully purchased");
      } catch (e) {
         notify.error("error while purchasing coupon")
         console.log(e)

      }


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