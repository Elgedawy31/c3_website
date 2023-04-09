/* eslint-disable jsx-a11y/no-distracting-elements */
import "./Contact.css";
export default function Contact() {
  return (
    <div className="container">
      <section id="from-details" className="section-p1">
        <form>
          <h2 className="contact-head">Leave An Idea</h2>
          <marquee
            style={{
              backgroundColor: "rgba(250, 122, 18, 0.918)",
              color: "#fff",
              width: "100%",
              display: "block",
              padding: "6px",
              marginBottom: "20px",
            }}
          >
            Contact With us We Will Send To You Within 24 Hours
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            quisquam accusantium sint in dolore reprehenderit deleniti quos
            voluptatibus at recusandae culpa, quibusdam perferendis tempora!
            Modi recusandae numquam similique accusantium inventore!
          </marquee>

          <input type="text" name="" id="" placeholder="Your Name" />
          <input type="text" name="" id="" placeholder="E-mail" />
          <input type="text" name="" id="" placeholder="Subject" />
          <textarea placeholder="Your Message"></textarea>
          <button>Submit</button>
        </form>
        <div class="pepole">
          <div class="box">
            <img
              src="https://cdn0.iconfinder.com/data/icons/sales-delivery/128/clock_forty_five_-512.png"
              alt=""
            />
            <div class="text">
              <h5>Save time </h5>
              <p>You Will Save Time You Will Save Time </p>
            </div>
          </div>
          <div class="box">
            <img
              src="https://thumbs.dreamstime.com/b/efficiency-vector-icon-symbol-creative-sign-quality-control-icons-collection-filled-flat-computer-illustration-mobile-150922404.jpg"
              alt=""
            />
            <div class="text">
              <h5>More Efficient </h5>
              <p>You Will Save Time You Will Save Time </p>
            </div>
          </div>
          <div class="box">
            <img
              src="https://static.thenounproject.com/png/724856-200.png"
              alt=""
            />
            <div class="text">
              <h5>More Safety</h5>
              <p>You Will Save Time You Will Save Time </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
