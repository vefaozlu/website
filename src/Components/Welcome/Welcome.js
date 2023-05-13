import "./Welcome.css";
import image from "../../me.jpg";
//import {ReactComponent as Logo} from "../../logo.svg";

function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-text">
        <p className="welcome-title">Hello!</p>
        <p className="welcome-content">I am Vefa Ozlu, Front-end Developer and Deep Learning Enthusiast.</p>
      </div>
      <img className="welcome-image" src={image} alt="iamge"/>
    </div>
  );
}

export default Welcome;
