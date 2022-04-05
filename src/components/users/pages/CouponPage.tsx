import { useState, useEffect } from 'react';
import CouponModel from '../../models/CouponModel';
import { Link, useNavigate } from 'react-router-dom';
import CouponsListItem from '../../Coupons/CouponsListProps';
import Store from '../../store/Store';
import notify from '../../utils/Notify';
import { ClientType } from '../../Coupons/ClientModel';
import Globals from '../../store/Globals';
import axios from 'axios';
import { Button } from 'react-bootstrap';


export default function CouponPage({ allowedClientType }) {
	const [couponList, setCouponList] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const { clientType, token } = Store.getState().StoreState.loginClient;
		if (clientType !== allowedClientType) {
			notify.error("you are not allowed to enter!")
			navigate('/login')
			return;
		}

		const apiUrlByClientType = {
			[ClientType.ADMINISTRATOR]: Globals.urls.administrator + "coupons",
			[ClientType.COMPANY]: Globals.urls.company + "company",
			[ClientType.CUSTOMER]: Globals.urls.customer + "coupon"
		}

		axios.get(apiUrlByClientType[clientType], { headers: { authorization: token } }).then(repsonse => setCouponList(repsonse.data)).catch(console.log)
	}, [])



	return (
		<div>
			<div className="getAllCuopons Coupon-Box">
				<div className="coupons">
					<h1>Coupon Info</h1><hr />
					{couponList.map(item => <CouponsListItem
						id={item.id}
						categories={item.categories}
						description={item.description}
						start_date={item.start_date}
						end_date={item.end_date}
						image={item.image}
						amount={item.amount}
						title={item.title}
						price={item.price} companyId={0} />
					)}
				</div>
			</div>
			<><Button variant="contained">
				<Link to="/login">Go To Login Page</Link>
			</Button><Button variant="contained">
					<Link to="/Main"> Go To Home Page</Link>
				</Button></>
		</div>
	);


}