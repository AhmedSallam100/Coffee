import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./cafe-details.css";
import { Star } from "../search/Search";

const CafeDetails = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          "https://coffee-backend-phi.vercel.app/cafes"
        );
        let data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <section className="cafe-details">
        <div className="container">
          <div className="cafe-imgs">
            <CoffeImgsBox>
              https://media-cdn.tripadvisor.com/media/photo-s/25/a8/76/f4/saheel-lobby-lounge-at.jpg
            </CoffeImgsBox>
            <CoffeImgsBox>
              https://media-cdn.tripadvisor.com/media/photo-m/1280/25/a8/6f/05/saheel-lobby-lounge-at.jpg
            </CoffeImgsBox>
            <CoffeImgsBox>
              https://media-cdn.tripadvisor.com/media/photo-m/1280/2a/fa/2f/a2/caption.jpg
            </CoffeImgsBox>
          </div>
          <DetailsBox />
          <button>Take Place</button>
        </div>
      </section>
    </>
  );
};

function DetailsBox() {
  return (
    <div className="details-boxes">
      <RatingBox />
      <LocationBox />
    </div>
  );
}
function RatingBox() {
  return (
    <div className="box rating-box">
      <h2>Rating</h2>
      <div className="rate-num">
        <span className="rate">5.0</span>
        <Star />
      </div>
      <p>21 from 485 Cafes in Kuwit</p>
      <hr />
      <div className="rating-row">
        <div className="text">
          <span>Food</span>
          <i class="uil uil-crockery"></i>
        </div>
        <Star />
      </div>
      <div className="rating-row">
        <div className="text">
          <span>Service</span>
          <i class="uil uil-tag-alt"></i>
        </div>
        <Star />
      </div>
      <div className="rating-row">
        <div className="text">
          <span>Price</span>
          <i class="uil uil-wallet"></i>
        </div>
        <Star />
      </div>
      <div className="rating-row">
        <div className="text">
          <span>Weather</span>
          <i class="uil uil-cloud"></i>
        </div>
        <Star />
      </div>
    </div>
  );
}
function LocationBox() {
  return (
    <>
      <div className="box location-box">
        <h2>Location & Phone</h2>
        <div className="location-details">
          <div className="location">
            <i class="uil uil-map-marker"></i>
            <span>360 Mall 6th Ring Rd Al Zahra</span>
          </div>
          <div className="location">
            <i class="uil uil-phone"></i>
            <span>+965 2221 1234</span>
          </div>
          <div className="location">
            <i class="uil uil-clock-eight"></i>
            <span>10 AM - 12 AM</span>
          </div>
        </div>
      </div>
      <div className="box location-box">
        <h2>Desrciption</h2>
        <p>
          The Chocolate Bar is a restaurant located in Kuwait, serving a
          selection of Desserts, Breakfast, Chocolate that delivers across
          Abdullah Al-Mubarak - West Jeleeb, Abdullah Al-Salem, Abu Ftaira, Abu
          Halifa and Abu Hasaniya. Their best selling dishes are Almost Pizza,
          Melted Nutella Cake, Mediterranean Tuna Sandwich and Pain au Chocolate
          Bread Pudding, although they have a variety of dishes and meals to
          choose from like Desserts, Breakfast, Chocolate .They have been
          reviewed 13813 times by talabat users, witharatingof4.
        </p>
      </div>
    </>
  );
}
function CoffeImgsBox({ children }) {
  return (
    <div className="img-box">
      <img src={children} alt="" />
    </div>
  );
}
export default CafeDetails;
