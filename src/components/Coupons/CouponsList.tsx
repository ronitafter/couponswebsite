import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import EmptyView from "../layout/emptyview/EmptyView";
import CouponModel from "../models/CouponModel";
import Globals from "../store/Globals";
import notify, { SccMsg } from "../utils/Notify";
import CouponsListProps from "./CouponsListProps";
import "./CouponsList.css";
import CouponAvatar from "./CouponAvatar";


function CouponsList(): JSX.Element {
   const init: CouponModel[] = [];
   const [coupons, setCoupons] = useState<any>(init);


   const getCoupons = async () => {
      return await axios.get<any>('http://localhost:8080/admin/coupons');
   }


   useEffect(() => {

      const response = getCoupons();
      response
         .then((response) => {
            setCoupons(response.data);
            notify.success(SccMsg.GOT_COUPONS);
         }
         )
         .catch((err) => {
            notify.error(err)
         }
         );
   }, []);

   return (
      <div className="CouponsList">

         {coupons?.length > 0 && <h1>coupons</h1>}
         {/* {coupons?.length > 0 &&  */}
         {coupons.map((coup: any) => {
            return [
               <>  <div key={coup.id}>
                  <div id="card">
                     <img src="https://media.giphy.com/media/lSPlEENLTonvclZP44/giphy.gif" alt="coupon" />
                     <div id="headline1">
                        <h1>{coup.title}</h1>
                     </div>
                     <hr />
                     <div id="headline1">
                        <p>{coup.description}</p>
                     </div>
                     <hr />
                     <div id="price">
                        <h3>Price: {coup.price}</h3>
                        <button className="button-28">TAKE IT!</button>
                     </div>

                  </div>
               </div>
               </>
            ]
         })
         }
         <table className="mutable">

            <thead>
               <tr>
                  <th>Id</th>
                  <th>Company</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>StartDate</th>
                  <th>EndDate</th>
                  <th>Amount</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Actions <Link to="/addCoupon"><button>Add Coupon</button></Link></th>
               </tr>
            </thead>


            <tbody>

               {coupons.map((coupon: CouponModel) => {

                  return [
                     <tr key={coupon.id}>
                        <td>{coupon.id}</td>
                        <td>{coupon.companyId}</td>
                        <td>{coupon.title}</td>
                        <td>{coupon.description}</td>
                        <td>{coupon.start_date}</td>
                        <td>{coupon.end_date}</td>
                        <td>{coupon.amount}</td>
                        <td>{coupon.price}</td>
                        <td><CouponAvatar uuid={coupon.image} /></td>
                        <td><button>Delete Coupon</button>&nbsp;<button>Update Coupon</button> </td>
                     </tr>

                  ]
               })}
            </tbody>
         </table >

         {"}"}

         {coupons?.length === 0 && <EmptyView msg="No Coupons for you" />}



      </div >
   );
}
export default CouponsList;

