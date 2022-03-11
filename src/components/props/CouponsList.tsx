import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import EmptyView from "../layout/emptyview/EmptyView";
import CouponModel from "../models/CouponModel";
import Globals from "../store/Globals";
import notify, { SccMsg } from "../utils/Notify";
import CouponsListProps from "./CouponsListProps";
import "./CouponsList.css";
import CouponAvatar from "../Coupons/CouponAvatar";


function CouponsList(): JSX.Element {
   const init: CouponModel[] = [];
   const [coupons, setCoupons] = useState<any>(init);


   const getCoupons = async () => {
      return await axios.get<any>('http://localhost:8080/admin/coupons');
   }


   useEffect(() => {

      const response = getCoupons();
      response
         .then((response) => {
            setCoupons(response.data);
            notify.success(SccMsg.GOT_COUPONS);
         }
         )
         .catch((err) => {
            notify.error(err)
         }
         );
   }, []);

   return (
      <div className="CouponsList">

         {coupons?.length > 0 && <h1>coupons</h1>}
         {/* {coupons?.length > 0 &&  */}
         {coupons.map((coup: any) => {
            return [
               <>  <div key={coup.id}>
                  <div id="card">
                     <img src="https://media.giphy.com/media/lSPlEENLTonvclZP44/giphy.gif" alt="coupon" />
                     <div id="headline1">
                        <h1>{coup.title}</h1>
                     </div>
                     <hr />
                     <div id="headline1">
                        <p>{coup.description}</p>
                     </div>
                     <hr />
                     <div id="price">
                        <h3>Price: {coup.price}</h3>
                        <button className="button-28">TAKE IT!</button>
                     </div>

                  </div>
               </div>
               </>
            ]
         })
      }
            <table className="mutable">

              <thead>
                <tr>
                  <th>Id</th>
                  <th>Company</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>StartDate</th>
                  <th>EndDate</th>
                  <th>Amount</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Actions <Link to="/addCoupon"><button>Add Coupon</button></Link></th>
                </tr>
              </thead>


              <tbody>

                {coupons.map((coupon: CouponModel) => {

                  return [
                    <tr key={coupon.id}>
                      <td>{coupon.id}</td>
                      <td>{coupon.companyId}</td>
                      <td>{coupon.title}</td>
                      <td>{coupon.description}</td>
                      <td>{coupon.start_date}</td>
                      <td>{coupon.end_date}</td>
                      <td>{coupon.amount}</td>
                      <td>{coupon.price}</td>
                        <td><CouponAvatar uuid={coupon.image} /></td>
                      <td><button>Delete Coupon</button>&nbsp;<button>Update Coupon</button> </td>
                    </tr>

                  ]
                })}
              </tbody>
            </table >

         {"}"}

         {coupons?.length === 0 && <EmptyView msg="No Coupons for you" />}

      </div >
   );
}
export default CouponsList;



// interface CouponsListState {

   
//    couponModel: CouponModel[]
// }

// function CouponsList(): JSX.Element {
//    const myUrl = "http://localhost:8080/admin/allCoupons";
//    const [couponModel, setCouponModel] = useState([new CouponModel()]);
//    const navigate = useNavigate();
//    useEffect(() => {
//       /*axios.get(myUrl).then((response)=>{setData(response.data)})*/
//       axios.get(Globals.urls.admin + "allCoupons").then((response) => {
//          console.log(response.data);
//          setCouponModel(response.data)
//       }).catch(error => { console.log(error) });
//    }, []);
//    return (
//       <div className="axiosCouponsList">
//          <Typography variant="h4" className="HeadLine">All Coupons</Typography><br /><hr />
//          {couponModel.map((item) => <CouponsListProps key={item.id}
//             image={item.image}
//             title={item.title}
//             price={item.price}
//             id={item.id}
//             companyId={item.companyId}
//             categories={item.categories}
//             description={item.description}
//             start_date={item.start_date}
//             end_date={item.end_date}
//             amount={item.amount}
//          />)}

//          <Carousel fade>
//             <Carousel.Item>
//                <img
//                   className="d-block w-100"
//                   src="holder.js/800x400?text=First slide&bg=373940"
//                   alt="First slide"
//                />
//                <Carousel.Caption>
//                   <h3>First slide label</h3>
//                   <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                <img
//                   className="d-block w-100"
//                   src="holder.js/800x400?text=Second slide&bg=282c34"
//                   alt="Second slide"
//                />

//                <Carousel.Caption>
//                   <h3>Second slide label</h3>
//                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                <img
//                   className="d-block w-100"
//                   src="holder.js/800x400?text=Third slide&bg=20232a"
//                   alt="Third slide"
//                />

//                <Carousel.Caption>
//                   <h3>Third slide label</h3>
//                   <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                </Carousel.Caption>
//             </Carousel.Item>
//          </Carousel>
//       </div>
//    );
// }

// export default CouponsList;