import { Link } from "react-router-dom";
import "./navbar.css";
export default function Navbar() {
  return (
    <nav>
      <Menu />
      <Head />
    </nav>
  );
}
function Menu() {
  return (
    <div className="nav-menu">
      <div className="close-menu">
        <i className="uil uil-times"></i>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/search">Search now</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/about">About us</Link>
      </div>
    </div>
  );
}
function Head() {
  return (
    <div className="head">
      <div className="container">
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="whereTo">
              <span>Where To</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="none"
                viewBox="0 0 48 48"
                id="question-mark"
              >
                <path
                  fill="#333"
                  fillRule="evenodd"
                  d="M24 14.0001C26.222 14.0173 28 15.8114 28 18 28 20.1991 26.2048 22 23.9679 22 22.8633 22 21.9679 22.8954 21.9679 24V30C21.9679 31.1046 22.8633 32 23.9679 32 25.0725 32 25.9679 31.1046 25.9679 30V25.7498C29.4308 24.8653 32 21.7378 32 18 32 13.6144 28.4631 10.069 24.0959 10.001 24.0747 10.0003 24.0535 10 24.0321 10H23.9679C23.9466 10 23.9253 10.0003 23.9042 10.001 19.5369 10.069 16 13.6144 16 18 16 19.1046 16.8955 20 18 20 19.1046 20 20 19.1046 20 18 20 15.8114 21.778 14.0173 24 14.0001zM24 38C25.1046 38 26 37.1046 26 36 26 34.8954 25.1046 34 24 34 22.8954 34 22 34.8954 22 36 22 37.1046 22.8954 38 24 38z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </Link>
        </div>
        <div className="links">
          <ul className="ul-links">
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/search">Search now</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </div>

        <span className="menu-icon">
          <i className="uil uil-bars"></i>
        </span>
      </div>
    </div>
  );
}
