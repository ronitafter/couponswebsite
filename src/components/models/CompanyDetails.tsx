// import CouponData from "./Coupon";

import CouponModel from "./CouponModel";

export default class CompanyDetails {

   id!: number;
   name!: string;
   email!: string;
   password!: string;
   couponModel!: CouponModel;
  coupons: any;

}