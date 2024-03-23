import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

import "./home.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Discovery />
    </>
  );
};
function Header() {
  return (
    <section className="header">
      <div className="container">
        <div className="homeBackground">
          <div className="header-title">
            <h1>
              Refresh your day and yourself with the <span>Where To</span>{" "}
              platform
            </h1>
            <p>
              My Qahwati platform helps users discover cafés and locate them in
              their area or around the world. It serves as a comprehensive guide
              to cafes, providing detailed information about each store. Such as
              location, opening hours, contact details, menus and customer
              ratings
            </p>
            <ul>
              <Link to="/search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 101 101"
                  id="search"
                >
                  <path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z"></path>
                </svg>
              </Link>
              <Link to="/contact">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 70 70"
                  viewBox="0 0 70 70"
                  id="phone"
                >
                  <path d="M30.5 22.1c.4-.4.4-1 0-1.4l-9.4-9.4c-.4-.4-1-.4-1.4 0l-3.2 3.2 10.8 10.8L30.5 22.1zM30.9 39.1c-4.9-4.9-7.2-9.9-5.5-11.8L14.5 16.5l-2 2c-1.5 1.5-1.8 3.7-1.1 6.6 3 11.1 22.4 30.5 33.5 33.5 1 .3 1.9.4 2.7.4 1.6 0 2.9-.5 3.8-1.5l2.1-2.1L42.7 44.7C40.8 46.3 35.7 44 30.9 39.1zM58.7 48.9l-9.4-9.4c-.4-.4-1-.4-1.4 0l-3.2 3.2 10.8 10.8 3.2-3.2C59.1 49.9 59.1 49.3 58.7 48.9z"></path>
                </svg>
              </Link>
              <Link to="/about">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 6.35 6.35"
                  id="about"
                >
                  <path
                    d="M 3.175 0 A 3.175 3.175 0 0 0 0 3.175 A 3.175 3.175 0 0 0 3.175 6.35 A 3.175 3.175 0 0 0 6.35 3.175 A 3.175 3.175 0 0 0 3.175 0 z M 3.175 1.3229167 A 0.26458332 0.26458332 0 0 1 3.4395833 1.5875 A 0.26458332 0.26458332 0 0 1 3.175 1.8520833 A 0.26458332 0.26458332 0 0 1 2.9104167 1.5875 A 0.26458332 0.26458332 0 0 1 3.175 1.3229167 z M 3.1760335 2.3807332 A 0.2645835 0.2645835 0 0 1 3.4395833 2.6463501 L 3.4395833 4.7619832 A 0.2645835 0.2645835 0 0 1 3.1760335 5.0276001 A 0.2645835 0.2645835 0 0 1 2.9104167 4.7619832 L 2.9104167 2.6463501 A 0.2645835 0.2645835 0 0 1 3.1760335 2.3807332 z "
                    paint-order="markers fill stroke"
                  ></path>
                </svg>
              </Link>
            </ul>
          </div>
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/Pumpkin-Spice-Latte-Coffee-vector-Graphics-77529071-1-removebg-preview-removebg-preview.png"
            }
            alt="coffe"
          />
        </div>
      </div>
    </section>
  );
}
function Discovery() {
  return (
    <section className="discovery">
      <h1 className="main-title">discovery</h1>
    </section>
  );
}
export default Home;
