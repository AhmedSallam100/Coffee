import Navbar from "../Navbar/Navbar";
import {TextHeader} from '../../staticComponent/headerText'
import "./contact.css";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactDetails />
    </>
  );
};
function ContactDetails() {
  return (
    <section className="contact-us">
      <div className="container">
       <TextHeader>Contact us</TextHeader>
        <ContactForm />
      </div>
    </section>
  );
}
function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Form submit handler
  let formSubmitHandler = (e) => {
    e.preventDefault();
    if (name.trim() === "") return toast.error("Your Name is Required..!");
    if (phone.trim() === "") return toast.error("Your Phone is Required..!");
    if (message.trim() === "") return toast.error("Message is Required..!");
    console.log({ name, phone, message });
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Name"
          name="firstname"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          name="mobilenumber"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          className="EmailInput"
          type="email"
          placeholder="Email"
          name="Email"
        />
      </div>
      <div className="form-group">
        <textarea
          type="text"
          className="PlaceInput"
          placeholder="Message"
          name="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
export default Contact;