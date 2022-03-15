import Globals from "../store/Globals";
import "./CouponAvatar.css";

interface AvatarProps {
   uuid: any;
}
function CouponAvatar(props: AvatarProps): JSX.Element {

   const url = Globals.urls.images + props.uuid;
   console.log(url);
   return (
      <div className="Avatar">
      <h3>testing</h3>
         <img src={url} alt='hghg' ></img>
      </div>
   );
}

export default CouponAvatar;