import Navbar from "../Navbar/Navbar";
import "./contact.css";

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
        <div className="ContactText">
          <h1>Contact Us</h1>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
function ContactForm() {
  return (
    <form>
      <div className="form-group">
        <input type="text" placeholder="Name" name="firstname" />
        <input type="tel" placeholder="Mobile Number" name="mobilenumber" />
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
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
export default Contact;
