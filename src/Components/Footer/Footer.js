import "./Footer.scss";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <div className="routes">
        <a href="https://google.com">Home</a>
        <a href="https://google.com">Projects</a>
        <a href="https://google.com">Certificates</a>
        <a href="https://google.com">Contact</a>
      </div>
      <div className="center">
        <div className="name">
          <p className="name-text">Vefa OZLU</p>
          <hr />
        </div>
        <div className="visitor-count">
          <p className="count-text">Visitor Count</p>
          <p className="count">4</p>
        </div>
        <p className="copyright">
          © 2023 Kadir Vefa OZLU - All rights reserved
        </p>
      </div>
      <div className="contacts">
        <a href="https://google.com">
          <AiFillLinkedin className="icon" />
        </a>
        <a href="https://google.com">
          <AiFillTwitterCircle className="icon" />
        </a>
        <a href="https://google.com">
          <AiFillGithub className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
