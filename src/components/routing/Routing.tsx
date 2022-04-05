import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../layout/home/Home";
import Page404 from "../layout/page404/Page404";
import AddCompany from "../users/admin/AddCompany";
import AddCustomer from "../users/admin/AddCustomer";
import GetOneCompany from "../users/admin/GetOneCompany";
import GetOneCustomer from "../users/admin/GetOneCustomer";
import UpdateCompany from "../users/admin/UpdateCompany";
import UpdateCustomer from "../users/admin/UpdateCustomer";
import GetAllCustomers from "../users/admin/GetAllCustomers";
import DeleteCustomer from "../users/admin/DeleteCustomer";
import UpdateCoupon from "../users/company/UpdateCoupon";
import AddCoupons from "../users/company/AddCoupons";
import DeleteCoupon from "../users/company/DeleteCoupon";
import PurchaseCoupon from "../users/customer/PurchaseCoupon";
import GetCouponsByCategory from "../users/customer/GetCouponsByCategory";
import GetCouponsByPrice from "../users/customer/GetCouponsByPrice";
import GetCustomerDetails from "../users/customer/GetCustomerDetails";
import GetCompanyCouponsByCategory from "../users/company/GetCompanyCouponsByCategory";
import GetCompanyCouponsByPrice from "../users/company/GetCompanyCouponsByPrice";
import EmptyView from "../layout/emptyview/EmptyView";
import DeleteCompany from "../users/admin/DeleteCompany";
import "./Routing.css";
import GetAllCompanies from "../users/admin/GetAllCompanies";
import AdmainPage from "../users/admin/AdmainPage";
import AdminMenu from "../users/admin/AdminMenu";
import CompanyPage from "../users/company/CompanyPage";
import CompanyMenu from "../users/company/CompanyMenu";
import CustomerMenu from "../users/customer/CustomerMenu";
import CustomerPage from "../users/customer/CustomerPage";
import { ROUTES } from './constants';
import About from "../layout/About/About";
import Login from "../login/Login";
import Logout from "../logout/Logout";
import ContactUs from "../layout/ContactUs.tsx/ContactUs";
import Coupons from "../layout/Coupons/Coupons";
import GetCompanyDetails from "../users/company/GetCompanyDetails";
import CouponsList from "../Coupons/CouponList";
import CouponPage from "../users/pages/CouponPage";
import { ClientType } from "../Coupons/ClientModel";
import Coupon from "../Coupons/Coupon";
import CouponDetails from "../Coupons/CouponDetails";

function Routing(): JSX.Element {
   return (
      <div className="Routing">
         <Routes>

            {/* GENERAL*/}
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/ContactUs" element={<ContactUs />} />

            <Route path="/CouponsList" element={<CouponsList />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Logout" element={<Logout />} />

            {/*<Route to="/home" />*/}
            <Route element={<Page404 />} /> {/* Last */}
            <Route element={<EmptyView msg={""} />} /> {/* Last */}
            {/*ADMIN*/}
            <Route path="/AdminPage" element={<AdmainPage />} />
            <Route path="/AdminMenu" element={<AdminMenu />} />
            <Route path="/admin/AddCompany" element={<AddCompany />} />
            <Route path="/admin/GetAllCoupons" element={<CouponPage allowedClientType={ClientType.ADMINISTRATOR} />} />
            <Route path="/admin/UpdateCompany" element={<UpdateCompany />} />
            <Route path="/admin/UpdateCustomer" element={<UpdateCustomer />} />
            <Route path="/admin/GetOneCoupon" element={<Coupon id={0} companyId={0} categories={""} description={""} start_date={""} end_date={""} amount={0} image={""} title={""} price={0} />} />

            <Route path="/admin/GetOneCompany" element={<GetOneCompany />} />
            <Route path="/admin/DeleteCompany" element={<DeleteCompany />} />
            <Route path="/admin/DeleteCompany" element={<DeleteCompany />} />
            <Route path="/admin/GetAllCompanies" element={<GetAllCompanies />} />
            <Route path="/admin/GetAllCustomers" element={<GetAllCustomers />} />

            <Route path="/admin/getOneCustomer/:customerId" element={<GetOneCustomer />} />
            <Route path="/admin/AddCustomer" element={<AddCustomer />} />
            <Route path="/admin/UpdateCustomer/:customerId" element={<UpdateCustomer />} />
            <Route path="/admin/DeleteCustomer/:customerId" element={<DeleteCustomer />} />
            <Route path="/admin/GetAllCustomers/:companyId" element={<GetAllCustomers />} />
            {/* COMPANY*/}
            <Route path="/CompanyPage" element={<CompanyPage />} />
            <Route path="/CompanyMenu" element={<CompanyMenu />} />
            <Route path="/Coupons" element={<Coupons />} />
            <Route path="/company/UpdateCoupon" element={<UpdateCoupon />} />

            <Route path="/company/GetCompanyDetails" element={<GetCompanyDetails />} />
            <Route path="/company/AddCoupons" element={<AddCoupons />} />
            <Route path="/company/DeleteCoupon" element={<DeleteCoupon />} />
            <Route path="/customer/GetCompanyCoupons" element={<CouponPage allowedClientType={ClientType.COMPANY} />} />
            <Route path="/company/GetCompanyCouponsByPrice" element={<GetCompanyCouponsByPrice />} />
            <Route path="/company/GetCompanyCouponsByCategory" element={<GetCompanyCouponsByCategory />} />
            {/* CUSTOMER*/}
            <Route path="/CustomerPage" element={<CustomerPage />} />
            <Route path="/CustomerMenu" element={<CustomerMenu />} />
            <Route path="/customer/PurchaseCoupon" element={<PurchaseCoupon />} />
            <Route path="/customer/GetCouponsByCategory" element={<GetCouponsByCategory />} />
            <Route path="/customer/GetCouponsByPrice" element={<GetCouponsByPrice />} />
            <Route path="/customer/CouponDetails" element={<CouponDetails id={""} />} />

            <Route path="/customer/GetCustomerDetails" element={<GetCustomerDetails />} />
            <Route path="/customer/GetAllCoupons" element={<CouponPage allowedClientType={ClientType.CUSTOMER} />} />
         </Routes>
      </div>
   );
}

export default Routing;

