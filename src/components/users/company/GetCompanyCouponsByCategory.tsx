// import { Box, MenuItem, Select, Typography } from "@mui/material";
import { Select, MenuItem } from "@material-ui/core";
import CategoryIcon from '@mui/icons-material/Category';
import { useEffect, useState } from "react";
import notify from "../../utils/Notify";
import Store from "../../store/Store";
import { useNavigate } from "react-router-dom";
import CouponModel from "../../models/CouponModel";
import axios from "axios";
import Globals from "../../store/Globals";
import { loginClientString } from "../../store/StoreState";
import CouponsListProps from "../../props/CouponsListProps";
import { Box, Typography } from "@mui/material";




  function GetCompanyCouponsByCategory(): JSX.Element {
    useEffect(() => {

      if (Store.getState().StoreState.loginClient.clientType != "Company") {
        notify.error("you are not allowed to enter!")
       navigate("/login");
      }
    });
    const [couponModel, setCouponModel] = useState([new CouponModel()]);
    const navigate = useNavigate();
    const [value, setValue] = useState<String>();
    let token: string = Store.getState().StoreState.loginClient.token;

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => { const values = event.target.value; setValue(values as string); };




    function findCouponsByCategory() {
      axios.get(Globals.urls.company + "findByCategories/" + value, { headers: { "authorization": token } }).then((response) => {
        if (response.data.length < 1) {
          notify.error("Coupons are not found !!!");
          setCouponModel([new CouponModel()]);
          return;
        }
        Store.dispatch(loginClientString(response.headers.Authorization = `${token}`));
        setCouponModel(response.data)
        console.log(response.data);
        notify.success("Coupons were found !!!");
      }).catch(error => { console.log(error) });
    }

    return (
      <div className="couponsByCategory">
        <div className="add">

          <Typography variant="h4" className="HeadLine">Choose category</Typography><br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <CategoryIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <Select onChange={handleChange} style={{ width: 200 }} labelId="select-helper" id="select-helper">
              <MenuItem value={"Food"}>Food</MenuItem>
              <MenuItem value={"Electronic"}>Electronic</MenuItem>
              <MenuItem value={"House"}>House</MenuItem>
              <MenuItem value={"Beauty"}>Beauty</MenuItem>
              <MenuItem value={"Travel"}>Travel</MenuItem>
              <MenuItem value={"Events"}>Events</MenuItem>
              <MenuItem value={"Fashion"}>Fashion</MenuItem>
            </Select>

      

            <input type="button" value="Find" onClick={findCouponsByCategory} /><br />
          </Box>
          <br /> <br />

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
          />
          )}
        </div>
      </div>
    );
  }

  export default GetCompanyCouponsByCategory;