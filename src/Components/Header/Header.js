import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <>
      <div className="header">
        <p className="title">Vefa Ozlu</p>
        <div className="navbar">
            <ul className="nav-items">
                <li className="nav-item"><Link className="link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="link" to="/projects">Projects</Link></li>
                <li className="nav-item"><Link className="link" to="/">Certificates</Link></li>
                <li className="nav-item"><Link className="link" to="/">Contact</Link></li>
            </ul>
        </div>
      </div>
    </>
  );
}

export default Header;