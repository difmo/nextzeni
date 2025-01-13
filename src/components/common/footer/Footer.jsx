import React from "react";
import { blog } from "../../../dummydata";
import "./footer.css";
import { Link } from "react-router-dom";

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
            <input className='text-black' type='email' placeholder='Enter email address' />
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

            <a href="https://www.facebook.com/profile.php?id=61571258289396" target="_blank"><i className='fab fa-facebook-f icon'></i></a>
            <a href="https://x.com/next_zeni" target="_blank"><i className='fab fa-twitter icon'></i></a>
            <a href="https://www.instagram.com/nextzeni/" target="_blank"><i className='fab fa-instagram icon'></i></a>
            <a href="https://www.youtube.com/@NextZeni" target="_blank"><i className='fab fa-youtube icon'></i></a>

          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li><Link to='/about'>About Us</Link></li>
              <li><Link to='/courses'>Services</Link></li>
              <li><Link to='/courses'>Courses</Link></li>
              <li><Link to='/journal'>Blog</Link></li>
              <li><Link to='/contact'>Contact Us</Link></li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to='/contact'>Contact Us</Link></li>
              <li><Link to='/pricing'>Pricing</Link></li>
              <li><Link to='/'>Terms & Conditions</Link></li>
              <li><Link to='/'>Privacy</Link></li>
              <li><Link to='/'>Feedbacks</Link></li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val, index) => (
              <div className='items flexSB' key={index}>
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
                E-3/44, Vijayipur, Vishesh Khand 3, Gomti Nagar, Lucknow, Uttar Pradesh 226010
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                <Link to='tel:+916307749532'>+91 630 774 9532</Link>
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                <Link to='mailto:yournextzeni@gmail.com'>yournextzeni@gmail.com</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©{new Date().getFullYear()} All rights reserved | This template is made with <i className='fa fa-heart'></i> by Difmo Technologies
        </p>
      </div>
    </>
  )
}

export default Footer;
