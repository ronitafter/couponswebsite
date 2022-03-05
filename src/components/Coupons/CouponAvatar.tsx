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
         <img src={url} ></img>
      </div>
   );
}

export default CouponAvatar;