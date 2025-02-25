import "./SocialNetwork.css";
import fb from "../assets/icon_fb.svg";
import linkdn from "../assets/icon_linkedin.svg";
import twitter from "../assets/icon_twitter.svg";
import Pisocial from "../assets/Pisocial_logo.svg";

function SocialNetwork({ text }) {
  return (
    <div className="socialNetworkDiv">
      <img className="logo" src={Pisocial} alt="logo img" />
      <ul>
        <li>
          <img src={linkdn} alt="icon_linkedin" />
          <a href="https://www.linkedin.com/in/htonioni">{text} with Linkedin</a>
        </li>
        <li>
          <img src={twitter} alt="twitter icon" />
          <a href="https://www.x.com">{text} with X</a>
        </li>
        <li>
          <img src={fb} alt="facebook icon" />
          <a href="https://www.facebook.com">{text} with Facebook</a>
        </li>
      </ul>
    </div>
  );
}
export default SocialNetwork;
