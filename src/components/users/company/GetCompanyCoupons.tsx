import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CouponModel from '../../models/CouponModel';
import CouponsListProps from '../../Coupons/CouponsListProps';
import Globals from '../../store/Globals';
import Store from '../../store/Store';
import { loginClientString } from '../../store/StoreState';
import notify from '../../utils/Notify';

function GetCompanyCoupons(): JSX.Element {
  const [couponModel, setCouponModel] = useState([new CouponModel()]);
    const navigate = useNavigate();
    let token: string = Store.getState().StoreState.loginClient.token;
    useEffect(() => {
      if (Store.getState().StoreState.loginClient.clientType !== "Company") {
        notify.error("you are not allowed to enter!")
        navigate("/login");
      }
      axios.get(Globals.urls.company + "getCoupons", { headers: { "authorization": token } }).then((response) => {
        Store.dispatch(loginClientString(response.headers.Authorization = `${token}`));
        console.log(response.data);
        setCouponModel(response.data)
      }).catch(error => { console.log(error) });
    }, []);
    return (
      <div className="allCoupons">
        {couponModel.map(item => <CouponsListProps
          image={item.image}
          title={item.title}
          price={item.price} id={0}
          companyId={item.companyId}
          categories={item.categories}
          description={item.description}
          start_date={item.start_date}
          end_date={item.end_date}
          amount={item.amount}
        />)};
      </div>
    );
  }

export default GetCompanyCoupons;