import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../layout/home/Home";
import Page404 from "../layout/page404/Page404";
import Login from "../login/Login";
import AddCompany from "../users/admin/AddCompany";
import AddCustomer from "../users/admin/AddCustomer";
import getAllCompanies from "../users/admin/GetAllCompanies";
import GetOneCompany from "../users/admin/GetOneCompany";
import GetOneCustomer from "../users/admin/GetOneCustomer";
import UpdateCompany from "../users/admin/UpdateCompany";
import UpdateCustomer from "../users/admin/UpdateCustomer";
import GetAllCustomers from "../users/admin/GetAllCustomers";
import DeleteCustomer from "../users/admin/DeleteCustomer";
import UpdateCoupon from "../users/company/UpdateCoupon";
import AddCoupons from "../users/company/AddCoupons";
import DeleteCoupon from "../users/company/DeleteCoupon";
import GetCompanyCoupons from "../users/company/GetCompanyCoupons";
import PurchaseCoupon from "../users/customer/PurchaseCoupon";
import GetCouponsByCategory from "../users/customer/GetCouponsByCategory";
import GetCouponsByPrice from "../users/customer/GetCouponsByPrice";
import GetCustomerDetails from "../users/customer/GetCustomerDetails";
import GetAllCoupons from "../users/customer/GetAllCoupons";
import GetCompanyCouponsByCategory from "../users/company/GetCompanyCouponsByCategory";
import GetCompanyCouponsByPrice from "../users/company/GetCompanyCouponsByPrice";
import EmptyView from "../layout/emptyview/EmptyView";
// import AdminMenu from "../layout/menu/AdminMenu";
import DeleteCompany from "../users/admin/DeleteCompany";
// import App from "../App";
import "./Routing.css";


function Routing(): JSX.Element {
   return (
      <div className="Routing">
         <Routes>
            {/* GENERAL*/}
            <Route path="/home" element={<Home />} />
            <Route path="/Login" element={Login} />
            <Navigate to="/home" />
            <Route element={Page404} /> {/* Last */}
            <Route element={EmptyView} /> {/* Last */}
            {/*ADMIN*/}
            <Route path="/admin/AddCompany" element={AddCompany} />
            <Route path="/admin/UpdateCompany" element={UpdateCompany} />
            <Route path="/admin/GetOneCompany" element={GetOneCompany} />
            <Route path="/admin/DeleteCompany" element={DeleteCompany} />
            <Route path="/admin/getAllCompanies" element={getAllCompanies} />
            <Route path="/admin/getOneCustomer/:customerId" element={<GetOneCustomer />} />
            <Route path="/admin/AddCustomer" element={<AddCustomer />} />
            <Route path="/admin/UpdateCustomer/:customerId" element={<UpdateCustomer />} />
            <Route path="/admin/DeleteCustomer/:companyId" element={<DeleteCustomer />} />
            <Route path="/admin/GetAllCustomers/:companyId" element={<GetAllCustomers />} />
            {/* COMPANY*/}
            <Route path="/company/UpdateCoupon" element={<UpdateCoupon />} />
            <Route path="/company/AddCoupons" element={<AddCoupons />} />
            <Route path="/company/DeleteCoupon" element={<DeleteCoupon />} />
            <Route path="/company/GetCompanyCoupons" element={<GetCompanyCoupons />} />
            <Route path="/company/GetCompanyCouponsByPrice" element={<GetCompanyCouponsByPrice />} />
            <Route path="/company/GetCompanyCouponsByCategory" element={<GetCompanyCouponsByCategory />} />
            {/* CUSTOMER*/}
            <Route path="/customer/PurchaseCoupon" element={<PurchaseCoupon />} />
            <Route path="/customer/GetCouponsByCategory" element={<GetCouponsByCategory />} />
            <Route path="/customer/GetCouponsByPrice" element={<GetCouponsByPrice />} />
            <Route path="/customer/GetCustomerDetails" element={<GetCustomerDetails />} />
            <Route path="/customer/GetAllCoupons" element={<GetAllCoupons />} />
         </Routes>
      </div>
   );
}

export default Routing;

