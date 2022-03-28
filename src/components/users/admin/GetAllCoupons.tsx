import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CouponsListProps from '../../Coupons/CouponsListProps';
import CouponDetails from '../../models/CouponDetails';
import { CouponModel } from '../../models/CouponModel2';
import Globals from '../../store/Globals';
import Store from '../../store/Store';


function GetAllCoupons(): JSX.Element {
	const [customersdata, setData] = useState([new CouponModel()]);
	const navigate = useNavigate();
	let token: string = Store.getState().StoreState.loginClient.token;
	// useEffect(() => {
	//   if (Store.getState().StoreState.loginClient.userType !== "authorization") {
	//     notify.error("you are not allowed to enter!")
	//     navigate("/login");
	//   }
	axios.get(Globals.urls.administrator + "coupons", { headers: { "authorization": token } }).then((response) => {
		// Store.dispatch(loginClientString(response.headers.Authorization = `${token}`));
		setData(response.data)
	}).catch(error => { console.log(error) });
	// }, []);

	return (
		<div className="getAllCuopons">
			<div className="coupons">
				<h1>Customers info</h1><hr />
				{customersdata.map(item => <CouponsListProps
					id={item.id}
					categories={item.categories}
					description={item.description}
					start_date={item.start_date}
					end_date={item.first_name}
					image={item.image}
					amount={item.amount}
					title={item.title}
					price={item.price} companyId={0} />

				)}
			</div>
		</div>
	);
}

export default GetAllCoupons;