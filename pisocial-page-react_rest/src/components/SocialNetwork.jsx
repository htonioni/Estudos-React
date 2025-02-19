import "./SocialNetwork.css";
import fb from "../assets/icon_fb.svg";
import linkdn from "../assets/icon_linkedin.svg";
import twitter from "../assets/icon_twitter.svg";
import Pisocial from '../assets/Pisocial_logo.svg'

function SocialNetwork() {
  return (
    <div className="socialNetworkDiv">
      <img className="logo" src={Pisocial} alt="logo img" />
      <ul>
        <li>
          <img src={linkdn} alt="icon_linkedin" />
          <a href="https://www.linkedin.com/in/htonioni">Sign up with Linkedin</a>
        </li>
        <li>
          <img src={twitter} alt="twitter icon" />
          <a href="https://www.x.com">Sign up with X</a>
        </li>
        <li>
          <img src={fb} alt="facebook icon" />
          <a href="https://www.facebook.com">Sign up with Facebook</a>
        </li>
      </ul>
    </div>
  );
}
export default SocialNetwork;
