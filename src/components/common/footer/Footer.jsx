import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"
import emailjs from "emailjs-com";


const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "your_service_id", // Your EmailJS service ID
      "your_template_id", // Your EmailJS template ID
      e.target,           // The form element
      "your_user_id"      // Your EmailJS user ID
    )
    .then(
      (result) => {
        console.log("Email sent successfully:", result.text);
      },
      (error) => {
        console.error("Error sending email:", error.text);
      }
    );
};


const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Subscribe to Our Bulletin - Stay Updated with the Latest News and Insights.</h1>
            <span>Stay informed and connected with the latest updates</span>
          </div>
          <div className='right row'>
            <input className ="text-black" type='email' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>NEXTZENI</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>Empower Your Voice, Elevate Your Impact!</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                4/37 Vibhav Khand, Gomtinagar, Lucknow, Uttar Pradesh, 226010 
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 6307749532
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                ajaydhawan@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2025 All rights reserved | This template is made with <i className='fa fa-heart'></i> by Difmo Technologies
        </p>
      </div>
    </>
  )
}

export default Footer
