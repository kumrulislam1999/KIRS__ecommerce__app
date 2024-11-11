import React, { useState } from 'react'
import { Link } from 'react-router-dom';
/* --=======================================
      Start Import React Icons Here 
========================================-- */
import { MdCall } from "react-icons/md";
import { FaEnvelope, FaFacebookF } from "react-icons/fa";
import { GiVanillaFlower } from "react-icons/gi";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
/* --=======================================
      End Import React Icons Here 
========================================-- */



/* --=======================================
    Start Import Components Here 
========================================-- */
import Layout from '../../components/Layout'
import PageBannar from '../../components/page__bannar/PageBannar'

/* --=======================================
    End Import Components Here 
========================================-- */

/* --=======================================
    Start Import Images Here 
========================================-- */
import contact__img from "../../assets/contact__page/contact__img.webp";
/* --=======================================
    End Import Images Here 
========================================-- */


/* --=======================================
    Start Import Declearation Here 
========================================-- */
const social__media = [
  {
    icon : FaFacebookF,
    path : "https://www.facebook.com/",
  },
  {
    icon : FaXTwitter,
    path : "https://www.twitter.com/",
  },
  {
    icon :  AiFillInstagram,
    path : "https://www.facebook.com/",
  },
  {
    icon : FaLinkedinIn,
    path : "https://www.linkedin.com/",
  }
];
/* --=======================================
    End Import Declearation Here 
========================================-- */




const Contact = () => {
  /* ==== Start useState Declear Here ==== */
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  /* ==== End useState Declear Here ==== */


  /* ==== Start Handle Contact Submit ==== */
 const handleContactSubmit = (e) =>{
  e.preventDefault();
  console.log(name, email, phone, subject, message);
  }

  return (
    <Layout title={"Contact Us"}>
      <div id="contact__page">
        <PageBannar title={"Contact Us"}/>
        <div id="contact__section">
          <div className="sec__pad">
            <div className="container">
              <div className="row justify-content-center g-0 ">
                <div className="col-12 col-md-6 col-lg-4  pad__12">
                  <div id="content__box">
                      <div className="flex__box">
                        <div className="icon__box">
                          <i><MdCall/></i>
                        </div>
                        <div className="text__content">
                          <h5>Call to Us</h5>
                          <p className='text__paragraph'>We’re available from 08 am – 10 pm USA, 7 days a week.</p>
                          <p className='title__text'>Customer Support:</p>
                          <p className='text'>+8801518453737</p>
                          <p className='title__text'>Head Office Support:</p>
                          <p className='text'>+8801518453737</p>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4  pad__12">
                  <div id="content__box">
                      <div className="flex__box">
                        <div className="icon__box">
                          <i><FaEnvelope/></i>
                        </div>
                        <div className="text__content">
                          <h5>Call to Us</h5>
                          <p className='text__paragraph'>Fill out our form and we will contact you within 24 hours.</p>
                          <p className='title__text'>Customer Support:</p>
                          <p className='text'>kumrulislam1999@gmail.com</p>
                          <p className='title__text'>Head Office Support:</p>
                          <p className='text'>kumrulislam1999@gmail.com</p>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4  pad__12">
                  <div id="content__box">
                      <div className="flex__box">
                        <div className="icon__box">
                          <i><GiVanillaFlower/></i>
                        </div>
                        <div className="text__content">
                          <h5>Call to Us</h5>
                          <p className='text__paragraph'>Visit specific sites to find us online innovate materials.</p>
                          <p className='title__text'>Customer Support:</p>
                            <ul className="social__media">
                              {
                                social__media.map((item,i) => (
                                  <li  key={i}><Link to={item.path} className="social__item">{<item.icon/>}</Link></li>
                                ))
                              }
                            </ul>
                          <p className='title__text'>Head Office Support:</p>
                            <ul className="social__media">
                              {
                                social__media.map((item,i) => (
                                  <li  key={i}><Link to={item.path} className="social__item">{<item.icon/>}</Link></li>
                                ))
                              }
                            </ul>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="get__touch__section">
            <div className="container">
              <div className="row g-0">
                <div className="col-md-12 col-lg-7 pad__12" id="touch__form__box">
                  
                <h3>Get In Touch</h3>
                  <form action="" onSubmit={handleContactSubmit}>
                    <div className='row align-items-center justify-content-between g-0' id="form__box">
                        <div className="col-12 col-sm-6 pad__12 input__box">
                          <input type="text" name="name" placeholder='Your Name*'required onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="col-12 col-sm-6 pad__12 input__box">
                          <input type="text" name="email" placeholder='Your Email*'required onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="col-12 col-sm-6 pad__12 input__box">
                          <input type="text" name="phone"  placeholder='Your Phone*'required onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                        <div className="col-12 col-sm-6 pad__12 input__box">
                          <input type="text" name="subject" placeholder='Subject*'required onChange={(e) => setSubject(e.target.value)}/>
                        </div>
                        <div className="col-12  pad__12 input__box">
                          <textarea name="message" placeholder='Message' required onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                    </div>
                    <button type='submit' className='submit__btn'>Send Message</button>
                  </form>
                  
                </div>
                <div className="col-md-12 col-lg-5 pad__12" id="touch__img__box">
                    <img src={contact__img} alt="contacting image" />
                </div>
              </div>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
