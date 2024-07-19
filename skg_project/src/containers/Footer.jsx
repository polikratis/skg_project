import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "./footer.css";
import skg2 from "../assets/skg2.jpg";

const Footer = () => {
  return (
    <div className="app__footer">
      {/* <div className="app__footer-links_logo"> */}
      <p className="p__opensans">
        &quot;You don't need magic to disappear, all you need is a
        destination!&quot;
      </p>
      <div className="app__footer-links_icons">
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
      </div>
      {/* </div> */}
      <div className="footer__copyright">
        <p className="p__opensans">2024 lala. All Rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
