import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CouponModel from "../models/CouponModel";
import Globals from "../store/Globals";
import CouponsListProps from "./CouponsListProps";


interface CouponsListState {
   couponModel: CouponModel[]
}

function CouponsList(): JSX.Element {
   const myUrl = "http://localhost:8080/guest/allCoupons";
   const [couponModel, setCouponModel] = useState([new CouponModel()]);
   const navigate = useNavigate();
   useEffect(() => {
      /*axios.get(myUrl).then((response)=>{setData(response.data)})*/
      axios.get(Globals.urls.guest + "allCoupons").then((response) => {
         console.log(response.data);
         setCouponModel(response.data)
      }).catch(error => { console.log(error) });
   }, []);
   return (
      <div className="axiosCouponsList">
         <Typography variant="h4" className="HeadLine">All Coupons</Typography><br /><hr />
         {couponModel.map(item => <CouponsListProps
            image={item.image}
            title={item.title}
            price={item.price}
            id={item.id}
            companyId={item.companyId}
            categories={item.categories}
            description={item.description}
            start_date={item.start_date}
            end_date={item.end_date}
            amount={item.amount}
         />)}
      </div>
   );
}

export default CouponsList;