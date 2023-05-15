import "./Welcome.scss";
import image from "../../assets/me.jpg";

function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-text">
        <p className="welcome-title">Hello!</p>
        <p className="welcome-content">I am Vefa Ozlu and this is my webpage. There's a lot here, so thanks for stopping by!</p>
      </div>
      <img className="welcome-image" src={image} alt="iamge"/>
    </div>
  );
}

export default Welcome;
