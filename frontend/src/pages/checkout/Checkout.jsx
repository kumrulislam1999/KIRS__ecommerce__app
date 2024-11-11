import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';


/* --=======================================
    Start Import React Icons Here 
========================================-- */
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";
import { MdBusinessCenter } from "react-icons/md";
import { TbZip } from "react-icons/tb";
import { ImAddressBook } from "react-icons/im";
import { MdLocationOn } from "react-icons/md";
import { FaCity } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { BsExclamationCircle } from "react-icons/bs";
/* --=======================================
    End Import React Icons Here 
========================================-- */

/* --=======================================
Start Import Components Here 
========================================-- */
import Layout from '../../components/Layout';
import PageBannar from "../../components/page__bannar/PageBannar";
import YourOrder from '../../components/your__order/YourOrder';

/* --=======================================
    End Import Components Here 
========================================-- */
const Checkout = () => {
  /* ======== Start Accordion Here ========= */
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <button
        type="button"
        className='accordion__btn'
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }
  /* ========= End Accordion Here ========== */




  return (
    <Layout title={"Checkout"}>
      <div id="checkout__page">

        {/* ======= Start Page Bannar Here ======= */}
        <PageBannar title={"Checkout"}/>
        {/* ======= End Page Bannar Here ======= */}


        {/* ======= Start Returning Login Section Here ======= */}
        <div id='returning__login__section'>
          <div className="sec__mar">
            <div className="container">
              <div id="returning__content">
                <div id="login__heading">
                  <p><i><BsExclamationCircle/></i>Returning customer? <Link to={"#"}>click here to login</Link></p>
                </div>
                <div id="login__box">
                  <div className="row g-0">
                    <div className="col-12 col-sm-8 col-md-8 col-lg-6 col-xl-4">
                      <form action="">
                        <div className="input__group">
                          <input type="text" placeholder="Enter Your Email" />
                        </div>
                        <div className="input__group">
                          <input type="text" placeholder="Enter Your Password" />
                        </div>
                        <div className="input__group input__check">
                          <input type="checkbox" id="remember__check" />
                          <label htmlFor="remember__check">Remember Me</label>
                        </div>
                        <button className="login__btn" type="submit">Login</button>
                      </form>
                      <Link href="forget-password" className='forget__btn'>Lost yout password?</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ======= End Returning Login Section Here ======= */}


        {/* ======= Start Returning Login Section Here ======= */}
        <div id='coupon__Apply__section'>
            <div className="container">
                <div id="coupon__content">
                  <div id="coupon__heading">
                    <p><i><BsExclamationCircle/></i>Have a Coupon? <Link to={"#"}>click to entry coupon</Link></p>
                  </div>
                  <div id="coupon__apply__box">
                    <div className="row g-0">
                      <div className="col-12 col-sm-8 col-md-8 col-lg-6 col-xl-4">
                        <form action="">
                          <div className="input__group">
                            <input type="text" placeholder="Enter Your Email" />
                          </div>
                          <button className="apply__btn" type="submit">Apply Coupon</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        {/* ======= End Returning Login Section Here ======= */}



        {/* ======= Start Checkout Section Here ======= */}
        <div id="checkout__section">
            <div className="sec__mar">
              <div className="container">
                <h3>Checkout Process</h3>
                <h5>Billing Details</h5>
                <form action="" id='checkout__form__box'>
                  <div id="checkout__information">
                    <div className="row justify-content-between">
                      <div className="col-lg-6">
                        <div id="billing__address">
                            <div className="row align-items-center justify-content-between g-0">
                              <div className="col-12 col-sm-6 col-md-6">
                                <div className="input__group">
                                  <label htmlFor="fname">First Name</label>
                                  <input type="text" name="fname" id="fname" placeholder='Enter First Name' required/>
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-6">
                                <div className="input__group">
                                  <label htmlFor="lname">Last Name</label>
                                  <input type="text" name="lname" id="lname" placeholder='Enter Last Name' required/>
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-6">
                                <div className="input__group">
                                  <label htmlFor="email">Email ID</label>
                                  <input type="text" name="email" id="email" placeholder='Enter Email' required/>
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-6">
                                <div className="input__group">
                                  <label htmlFor="lname">Phone Number</label>
                                  <input type="text" name="number" id="number" placeholder='Enter Number' required/>
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-6">
                                <div className="input__group">
                                  <label htmlFor="cname">Company Name (Optional)</label>
                                  <input type="text" name="cname" id="cname" placeholder='Enter Company Name' />
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-6">
                                <div className="input__group">
                                  <label htmlFor="caddress">Company Address (Optional)</label>
                                  <input type="text" name="caddress" id="caddress" placeholder='Enter Company Address' />
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-6">
                                <div className="input__group">
                                  <label htmlFor="address">Address No 1</label>
                                  <input type="text" name="address" id="address" placeholder='Enter Address' required/>
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-6">
                                <div className="input__group">
                                  <label htmlFor="address">Address No 2</label>
                                  <input type="text" name="address" id="address" placeholder='Enter Address'/>
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-6">
                                <div className="input__group">
                                  <label htmlFor="country__name">Country Name</label>
                                  <input type="text" name="country__name" id="country__name" placeholder='Enter Country' required/>
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-6">
                                <div className="input__group">
                                  <label htmlFor="town__city">Town/City Name</label>
                                  <input type="text" name="town__city" id="town__city" placeholder='Enter Town/City' required/>
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-6">
                                <div className="input__group">
                                  <label htmlFor="state">State Name</label>
                                  <input type="text" name="state" id="state" placeholder='Enter State' required/>
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-6">
                                <div className="input__group">
                                  <label htmlFor="zip">Zip Code</label>
                                  <input type="text" name="zip" id="zip" placeholder='Enter Zip Code' required/>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-12">
                                <div className="input__group">
                                  <label htmlFor="zip">Order Notes (Optional)</label>
                                  <textarea type="text" name="order__note" id="order__note" placeholder='Note aboute Your Order'></textarea>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-12">
                                <div className="input__group check__account">
                                  <input type="checkbox" name="check" id="check" required/>
                                  <label htmlFor="check">Create An Account?</label>
                                </div>
                              </div>
                            </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div id="diffrent__address">
                            <div className="input__group check__account">
                              <input type="checkbox" name="check" id="check" required/>
                              <label htmlFor="check">Place Different Address?</label>
                            </div>   
                            <div className="row align-items-center justify-content-between g-0">
                              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="input__group">
                                  <label htmlFor="fname">First Name</label>
                                  <input type="text" name="fname" id="fname" placeholder='Enter First Name' required/>
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="input__group">
                                  <label htmlFor="lname">Last Name</label>
                                  <input type="text" name="lname" id="lname" placeholder='Enter Last Name' required/>
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="input__group">
                                  <label htmlFor="email">Email ID</label>
                                  <input type="text" name="email" id="email" placeholder='Enter Email' required/>
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="input__group">
                                  <label htmlFor="lname">Phone Number</label>
                                  <input type="text" name="number" id="number" placeholder='Enter Number' required/>
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="input__group">
                                  <label htmlFor="cname">Company Name (Optional)</label>
                                  <input type="text" name="cname" id="cname" placeholder='Enter Company Name' />
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="input__group">
                                  <label htmlFor="caddress">Company Address (Optional)</label>
                                  <input type="text" name="caddress" id="caddress" placeholder='Enter Company Address' />
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="input__group">
                                  <label htmlFor="address">Address No 1</label>
                                  <input type="text" name="address" id="address" placeholder='Enter Address' required/>
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="input__group">
                                  <label htmlFor="address">Address No 2</label>
                                  <input type="text" name="address" id="address" placeholder='Enter Address'/>
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="input__group">
                                  <label htmlFor="country__name">Country Name</label>
                                  <input type="text" name="country__name" id="country__name" placeholder='Enter Country' required/>
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="input__group">
                                  <label htmlFor="town__city">Town/City Name</label>
                                  <input type="text" name="town__city" id="town__city" placeholder='Enter Town/City' required/>
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="input__group">
                                  <label htmlFor="state">State Name</label>
                                  <input type="text" name="state" id="state" placeholder='Enter State' required/>
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="input__group">
                                  <label htmlFor="zip">Zip Code</label>
                                  <input type="text" name="zip" id="zip" placeholder='Enter Zip Code' required/>
                                </div>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="checkout__total">
                    <div className="mart__36">
                      <h5>Your Order</h5>
                      <YourOrder/>
                    </div>
                  </div>
                  <div id="checkout__payment__method">                  
                    <Accordion defaultActiveKey="0" id='accordion__box'>
                      <Card>
                        <Card.Header>
                          <CustomToggle eventKey="0">
                            <div className="input__box">
                              <input type="radio" name="payment__method" id="bank__payment" />
                              <label htmlFor="bank__payment">Direct Bank Transfer</label>
                            </div>
                          </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <CustomToggle eventKey="0">
                            <div className="input__box">
                              <input type="radio" name="payment__method" id="credit__payment" />
                              <label htmlFor="credit__payment">Credit Cart</label>
                            </div>
                          </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <CustomToggle eventKey="1">
                            <div className="input__box">
                              <input type="radio" name="payment__method" id="paypal__payment" />
                              <label htmlFor="paypal__payment">Paypal</label>
                            </div>
                          </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <CustomToggle eventKey="2">
                            <div className="input__box">
                              <input type="radio" name="payment__method" id="cheque__payment" />
                              <label htmlFor="cheque__payment">Cheque Payment</label>
                            </div>
                          </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  <button type='submit' className='proceed__btn'>Place Order</button>
                </form>
              </div>
            </div>
        </div>
        {/* ======= End Checkout Section Here ======= */}
      
      </div>

    </Layout>
  )
}

export default Checkout
