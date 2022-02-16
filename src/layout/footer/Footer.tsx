import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";

function Footer(): JSX.Element {
   return (
      <div className="Footer">
         <div>Ofir Abraham</div>

         <div className="social">
            <FaGithub />
            <FaTwitter />
            <FaLinkedin />
         </div>
      </div>
   );
}

export default Footer;
