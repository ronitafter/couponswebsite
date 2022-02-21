import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";

function Footer(): JSX.Element {
   return (
      <div className="Footer">
         <div>Ronit After</div>

         <div className="social">
            <FaGithub />
            <FaTwitter />
            <FaLinkedin />
         </div>
      </div>
   );
}

export default Footer;
