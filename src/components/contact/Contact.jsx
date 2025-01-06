import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm
        ('service_dmsch3b', 'template_mlny9t8', form.current, {
        publicKey: 'QAJJWF5gOlV6ZCU-M',
      })
        
      .then(
        (result) => {
          console.log(result.text);
          alert('Message Sent Successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again.');
        }
      );
    e.target.reset();
  };

  const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.3549805515186!2d81.01755507498214!3d26.860460676678397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x921922aa4e79ddd%3A0x54e478f227f46594!2sDifmo%20Technologies!5e0!3m2!1sen!2sin!4v1736153834435!5m2!1sen!2sin" ;

  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map} width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>4/37 Vibhav Khand, Gomtinagar, Lucknow, Uttar Pradesh, 226010</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>ajaydhawan@gmail.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>+91 6307749532</p>
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail}>
              <div className="flexSB">
                <input type="text" name="from_name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <input type="text" name="subject" placeholder="Subject" required />
              <textarea name="message" cols="30" rows="10" placeholder="Create a message here..." required></textarea>
              <button type="submit" className="primary-btn">SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <div className="social">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f icon"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram icon"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter icon"></i>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
