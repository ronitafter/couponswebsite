import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CouponModel from '../../models/CouponModel';
import CouponsListProps from '../../props/CouponsListProps';
import Globals from '../../store/Globals';
import Store from '../../store/Store';
import { loginClientString } from '../../store/StoreState';
import notify from '../../utils/Notify';



  function GetAllCoupons(): JSX.Element {
    const [couponData, setData] = useState([new CouponModel()]);
    const navigate = useNavigate();
    let token: string = Store.getState().StoreState.loginClient.token;
    useEffect(() => {
      if (Store.getState().StoreState.loginClient.clientType != "Customer") {
        notify.error("you are not allowed to enter!")
        navigate("/login");
      }
      axios.get(Globals.urls.customer + "getMyCoupons", { headers: { "authorization": token } }).then((response) => {
        Store.dispatch(loginClientString(response.headers.Authorization = `${token}`));
        console.log(response.data);
        setData(response.data)
      }).catch(error => { console.log(error) });
    }, []);
    return (
      <div className="showMyCoupons">
        {couponData.map(item => <CouponsListProps
          image={item.image}
          title={item.title}
          price={item.price} id={0}
          companyId={item.companyId}
          categories={item.categories}
          description={item.description}
          start_date={item.start_date}
          end_date={item.end_date}
          amount={item.amount} />
        )};
      </div>
    );
  }

export default GetAllCoupons;