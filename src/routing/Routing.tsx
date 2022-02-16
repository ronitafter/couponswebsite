import {Navigate, Routes } from "react-router-dom";
import { Route} from "react-router-dom";
import Home from "../layout/home/Home";
import Page404 from "../layout/page404/Page404";
import Login from "../login/Login";
import AddCompany from "../users/admin/AddCompany";
import AddCustomer from "../users/admin/AddCustomer";
import deleteCompany from "../users/admin/deleteCompany";
import getAllCompanies from "../users/admin/getAllCompanies";
import GetOneCompany from "../users/admin/GetOneCompany";
import GetOneCustomer from "../users/admin/GetOneCustomer";
import UpdateCompany from "../users/admin/UpdateCompany";
import UpdateCustomer from "../users/admin/UpdateCustomer";
import GetAllCustomers from "../users/admin/getAllCustomers";
import DeleteCustomer from "../users/admin/deleteCustomer";



function Routing(): JSX.Element {
   return (
      <div className="Routing">
         <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/Login" element={Login}/>
            <Route path="/admin/AddCompany" element={AddCompany}  />
            <Route path="/admin/UpdateCompany" element={UpdateCompany} />
            <Route path="/admin/GetOneCompany" element={GetOneCompany}  />
            <Route path="/admin/deleteCompany" element={deleteCompany} />
            <Route path="/admin/getAllCompanies" element={getAllCompanies}  />
            <Route path="/admin/getOneCustomer/:customerId" element={<GetOneCustomer />} />
            <Route path="/admin/AddCustomer" element={<AddCustomer />} />
            <Route path="/admin/UpdateCustomer/:customerId" element={<UpdateCustomer />} />
            <Route path="/admin/deleteCustomer/:companyId" element={<DeleteCustomer/>} />
            <Route path="/admin/getAllCustomers/:companyId" element={<GetAllCustomers/>} />
            <Navigate to="/home" />
            <Route element={Page404} /> {/* Last */}
         </Routes>
      </div>
   );
}

export default Routing;

