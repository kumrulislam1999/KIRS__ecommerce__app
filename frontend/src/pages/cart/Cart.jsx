import React from 'react'


/* --=======================================
Start Import Components Here 
========================================-- */
import Layout from '../../components/Layout'
import AddToCard from '../../components/add__to__card/AddToCard'
import PageBannar from '../../components/page__bannar/PageBannar'

/* --=======================================
    End Import Components Here 
========================================-- */


/* ====================================
    Start Import React Icons Here
==================================== */
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
/* ====================================
    End Import React Icons Here
==================================== */


const Cart = () => {
  return (
    <Layout title={"Cart"}>
      <div id="cart__page">
        {/* ======= Start Page Bannar Section ======= */}
        <PageBannar title={"Cart"}/>
        {/* ======= End Page Bannar Section ======= */}


        {/* ======= Start Cart Section Here ======== */}
        <div id="cart__section">
          <div className="sec__mar">
            <div className="container">
              <h3>Added Cart</h3>
              <div id="search__box">
                <input type="text" name="" id="" placeholder='Search Products Here'/>
                <button type="button" className='search__btn'><IoSearchOutline/></button>
              </div>
              <AddToCard/>


              <div id="cart__total">
                <div className="row align-items-center justify-content-end">
                  <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                    <div id="cart__total__box">
                      <h5>Cart Totals</h5>
                      <form action="">
                          <table width={"100%"} className='table__box'>
                            <tbody>
                              <tr>
                                <th>
                                  <h6>Cart Subtotal</h6>
                                </th>
                                <td>
                                  <p>$47</p>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <h6>Shipping and Handling</h6>
                                </th>
                                <td>
                                  <div id="shipping__info">
                                    <div className="input__group">
                                      <input type="radio" name="shipping" id="shipping__free" />
                                      <label htmlFor="shipping__free">Free Shipping</label>
                                    </div>
                                    <div className="input__group">
                                      <input type="radio" name="shipping" id="shipping__rate" />
                                      <label htmlFor="shipping__rate">Flat Rate</label>
                                    </div>
                                    <p>Shipping options will be updated during checkout </p>
                                    <Link to={"#"} className='change__address__btn'>Change Address</Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <h6 className='total'>Order Total</h6>
                                </th>
                                <td>
                                  <h6 className='total__price'>$47</h6>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <button type="submit" className='procced__btn'>Procced To Checkout</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ======= End Cart Section Here ======== */}
      </div>
    </Layout>
  )
}

export default Cart
