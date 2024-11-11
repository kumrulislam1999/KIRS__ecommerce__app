import React from 'react'


/* ===============================
   Start React Icons Here
=============================== */
import {FaRegEnvelope, FaFacebookF, FaInstagram , FaLinkedinIn, FaPhone,     } from "react-icons/fa";

import {  RiTwitterXFill  } from "react-icons/ri";
import { FaLocationDot,FaAnglesRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

/* ===============================
   End React Icons Here
=============================== */


/* ===============================
   Start Import Images Here
=============================== */
import logo__img from "../../../assets/home__page/logo.png"
import payment__img from "../../../assets/home__page/payment.png";
/* ===============================
   Start Import Images Here
=============================== */


/* ===============================
   Start Link variable Declaration Here
=============================== */
const quick__link = [
  {
    name : "Help",
    path : "/help",
  },
  {
    name : "Contact Us",
    path : "/contact",
  },
  {
    name : "Feedback",
    path : "/feedback",
  },
  {
    name : "Customer Service",
    path : "/customer-service",
  },
  {
    name : "Store Location",
    path : "/store-location"
  }
];
const social__media = [
  {
    icon : FaFacebookF,
    path : "https://www.facebook.com/"
  },
  {
    icon : RiTwitterXFill,
    path : "https://www.facebook.com/"
  },
  {
    icon : FaInstagram,
    path : "https://www.instagram.com/",
  },
  {
    icon : FaLinkedinIn,
    path : "https://www.linkedin.com/",
  }
]
/* ===============================
   End Link variable Declaration Here
=============================== */




const Footer1 = () => {
  return (
    <div id="footer__section" >
      <div className="sec__pad">
        <div className="container">
          <div id="footer__top">
            <div className="row align-items-center justify-content-between g-0">
            <div className="col-12 col-sm-4" id='footer__social__box'>
              <div id="social__box">
                <ul id="social__media">
                  {
                    social__media.map((item, i) => (
                      <li className="media__item" key={i}><Link to={item.path}>{<item.icon/>}</Link></li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-4" id='footer__logo__box'>
              <div id='logo__box'>
                <img src={logo__img} alt="footer logo" />
              </div>
            </div>
            <div className="col-12 col-sm-4" id='footer__card__box'>
              <div id="payment__box">
                <img src={payment__img} alt="payment method" />
              </div>
            </div>
          </div>
            
          </div>
          <div id="footer__middle">
            <div className="row  justify-content-between">
              <div className="col-12 col-sm-6 col-lg-2" id='footer__quick__box'>
                  <div id='quick__link__box'>
                    <h5>Quick Link</h5>
                      <ul id='quick__link'>
                        {
                          quick__link.map((item,i) => (
                            <li key={i} ><Link to={item.path} className='quick__link__item'><i><FaAnglesRight/></i><span>{item.name}</span></Link></li>
                          ))
                        }
                      </ul>
                  </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3" id='footer__opening__box'>
                <div id="opening__box">
                  <h5>Opening Time</h5>
                        <table id='opening__time'>
                          <tbody>
                            <tr className="item__box">
                              <th>Mon - Tue :</th>
                              <td>8AM - 10PM</td>
                            </tr>
                            <tr className="item__box">
                              <th>Wed :</th>
                              <td>8AM - 7PM</td>
                            </tr>
                            <tr className="item__box">
                              <th>Fri :</th>
                              <td>8AM - 12PM</td>
                            </tr>
                            <tr className="item__box">
                              <th>Sat :</th>
                              <td>9AM - 8PM</td>
                            </tr>
                            <tr className="item__box">
                              <th>Sun :</th>
                              <td>Closed</td>
                            </tr>
                          </tbody>
                        </table>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3" id='footer__contact__box'>
                <div id="contact__box">
                  <h5>Contact Us</h5>
                    <table id='contact__info'>
                        <tbody>
                          <tr className="item__box">
                            <th><i><FaPhone/></i></th>
                            <td><Link to={"callto:+8801518453737"}>+8801518453737</Link></td>
                          </tr>
                          <tr className="item__box">
                            <th><i><FaRegEnvelope/></i></th>
                            <td><Link to={"mailto:kumrulislam1999@gmail.com"}>kumrulislamr1999@gmail.com</Link></td>
                          </tr>
                          <tr className="item__box">
                            <th><i><FaLocationDot/></i></th>
                            <td><Link to={"/"}>Ujantia, Pekua, Cox's Bazar</Link></td>
                          </tr>
                        </tbody>
                    </table>
                </div>

              </div>
              <div className="col-12 col-sm-6 col-lg-4" id="footer__subscription__box">
                <div id="subscription__box">
                  <h5>News Letter</h5>
                  <p>Authoritatively morph 24/7 potentialities with error-free partnerships.</p>
                  <div id="subscription__form">
                    <form action="">
                      <div className="input__box">
                        <input type="text" name="" id="" placeholder='Enter Your Email' />
                        <button type='button' className='subscribe__btn'>Subscribe</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer__bottom">
          <div className="container">
            <div id="copywrite">
              <p>© 2022 All Rights Reserved By <Link to={"/"}>Angfuzsoft</Link> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer1
