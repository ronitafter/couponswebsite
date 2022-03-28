import "./PurchaseCoupon.css";
import { useForm } from "react-hook-form";
import CouponModel from "../../models/CouponModel";
import notify from "../../utils/Notify";
import Globals from "../../store/Globals";
import { Store } from "@mui/icons-material";
import jwtAxios from "../../login/Tokens";
import { couponsAddedAction } from "../../Coupons/CouponAction";
import { useNavigate } from "react-router-dom";


interface PurchaseCardProps {
  coupon: CouponModel;
}

function PurchaseCoupon(props: PurchaseCardProps): JSX.Element {

  let navigate = useNavigate();
  let { handleSubmit } = useForm<CouponModel>();

  async function handlePurchase(coupon: CouponModel) {
    try {

      let response = await jwtAxios.post<CouponModel>(Globals.urls.customer + "/" + props.coupon.id);
      Store.apply(couponsAddedAction(props.coupon));

      const item = "Going to add new coupon purchase... (should be changed to YES NO dialog (:";
      alert(item);
      console.log("" + response.data);
      console.log("" + props.coupon);
      notify.success("" + response.data);
      notify.success("" + props.coupon);
      navigate("/customer/getAllCustomerCoupons");
    } catch (error) {
      notify.error(error);
    }
  }

  return (
    <div className="CouponsCard">
      <div className="Row">
        <div className="Column">
          <div className="Card">

            <img className="CouponImg" src={props.coupon.image} alt="Coupon Image" />

            <div className="Container">
              <div className="CardData">
                <h1>{props.coupon.title}</h1>
                <p className="Price">${props.coupon.price}</p>
                <p className="Category">{props.coupon.category}</p>
                <p>title {props.coupon.title}</p>
                <p>id {props.coupon.id}</p>
                <p>companyId {props.coupon.companyId}</p>
                <p>description {props.coupon.description}</p>
                <p>amount {props.coupon.amount}</p>
                <p>startDate {props.coupon.start_date}</p>
                <p>endDate {props.coupon.end_date}</p>
              </div>
              <button className="Button" onClick={handleSubmit(handlePurchase)}>Purchase Customer</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseCoupon;