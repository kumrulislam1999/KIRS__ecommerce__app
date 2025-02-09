import React from 'react'

/* ====================================
    Start Import React Icons Here
==================================== */
import { IoSearchOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoMdCheckmark } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

/* ====================================
    End Import React Icons Here
==================================== */



/* --=======================================
    Start Import Images Here 
========================================-- */
import product__h__img1 from "../../assets/home__page/featured-2-4h.jpg"
import product__img1 from "../../assets/home__page/featured-2-4.jpg"

import product__img2 from "../../assets/home__page/featured-2-1h.jpg"
import product__h__img2 from "../../assets/home__page/featured-2-1.jpg"

import product__img3 from "../../assets/home__page/featured-2-2h.jpg"
import product__h__img3 from "../../assets/home__page/featured-2-2.jpg"

import product__img4 from "../../assets/home__page/featured-2-5h.jpg"
import product__h__img4 from "../../assets/home__page/featured-2-5.jpg"

/* --=======================================
    End Import Images Here 
========================================-- */

const YourOrder = () => {
  return (
    <div id='your__order'>
      <div id="your__order__box">
        <table className='table__box__lg' width="100%">
          <thead className='table__head'>
            <tr className='row__box'>
              <th >
              </th>
              <th >
                <h6>Image</h6>
              </th>
              <th>
                <h6>Name</h6>
              </th>
              <th>
                <h6>Price</h6>
              </th>
              <th>
                <h6>Quantity</h6>
              </th>
              <th>
                <h6>Total</h6>
              </th>
            </tr>
          </thead>
          <tbody className="table__body">
            <tr className='row__box'>
              <td>
                <button type='button' className='close__btn'><IoMdClose/></button>
              </td>
              <td>
                <img src={product__img2} alt="" />
              </td>
              <td>
                <h6><Link className='title' to={"#"}>Jacket Hoodie</Link></h6>
              </td>
              <td>
                <p className='unit__price'>40$</p>
              </td>
              <td>
                <div className="quantity">
                    <button type="button"><FaMinus/></button>
                    <input type="number" name="" id="" placeholder='0'/>
                    <button type="button"><FaPlus/></button>
                </div>
              </td>
              <td>
                <p className='total__price'>$80</p>
              </td>
            </tr>
            <tr className='row__box'>
              <td >
                <button type='button' className='close__btn'><IoMdClose/></button>
              </td>
              <td >
                <img src={product__img2} alt="" />
              </td>
              <td>
                <h6><Link className='title' to={"#"}>Jacket Hoodie</Link></h6>
              </td>
              <td>
                <p className='price'>40$</p>
              </td>
              <td>
                <div className="quantity">
                    <button type="button"><FaMinus/></button>
                    <input type="number" name="" id="" placeholder='0'/>
                    <button type="button"><FaPlus/></button>
                </div>
              </td>
              <td>
                <p className='total__price'>$80</p>
              </td>
            </tr>
          </tbody>
          <tfoot className='table__foot'>
            <tr>
                <th colSpan="3">
                    <h6>SubTotal</h6>
                </th>
                <td colSpan="3">
                    <h6>$800</h6>
                </td>
            </tr>
            <tr>
                <th colSpan="3">
                    <h6>Shipping Fee</h6>
                </th>
                <td colSpan="3">
                    <h6>$120</h6>
                </td>
            </tr>
            <tr>
                <th colSpan="3">
                    <h6>Total</h6>
                </th>
                <td colSpan="3">
                    <h6>$920</h6>
                </td>
            </tr>
          </tfoot>
        </table>
        <table className='table__box__sm' width="100%">
          <thead className='table__head'>
            <tr>
              <th colSpan={2}>
                <h6>Products</h6>
              </th>
            </tr>
          </thead>
          <tbody className='table__body' width="100%">
            <tr> 
              <td className="product__item" colSpan={2}>
                <table width="100%">
                  <tbody>
                    
                    <tr className='row__box'>
                      <th><h6>Remove</h6></th>
                      <td>
                        <button type='button' className='close__btn'><IoMdClose/></button>
                      </td>
                    </tr>
                    <tr className='row__box'>
                      <th><h6>Image</h6></th>
                      <td>
                        <img src={product__img2} className='img__btn' alt="" />
                      </td>
                    </tr>
                    <tr className='row__box'>
                      <th>
                        <h6>Name</h6>
                      </th>
                      <td>
                        <h6><Link className='title' to={"#"}>Jacket Hoodie</Link></h6>
                      </td>
                    </tr>
                    <tr className='row__box'>
                      <th>
                        <h6>Unit Price</h6>
                      </th>
                      <td>
                        <p className='status'>$40</p>
                      </td>
                    </tr>
                    <tr className='row__box'>
                      <th>
                        <h6>Quantity</h6>
                      </th>
                      <td>
                        <div className="quantity">
                            <button type="button"><FaMinus/></button>
                            <input type="number" name="" id="" placeholder='0'/>
                            <button type="button"><FaPlus/></button>
                        </div>
                      </td>
                    </tr>
                    <tr className='row__box'>
                      <th><h6>Total Price</h6></th>
                      <td>
                        <p className='total__price'>$80</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr> 
              <td className="product__item" colSpan={2}>
              <table width="100%">
                  <tbody>
                    <tr className='row__box'>
                      <th><h6>Remove</h6></th>
                      <td>
                        <button type='button' className='close__btn'><IoMdClose/></button>
                      </td>
                    </tr>
                    <tr className='row__box'>
                      <th><h6>Image</h6></th>
                      <td>
                        <img src={product__img2} className='img__btn' alt="" />
                      </td>
                    </tr>
                    <tr className='row__box'>
                      <th>
                        <h6>Name</h6>
                      </th>
                      <td>
                        <h6><Link className='title' to={"#"}>Jacket Hoodie</Link></h6>
                      </td>
                    </tr>
                    <tr className='row__box'>
                      <th>
                        <h6>Unit Price</h6>
                      </th>
                      <td>
                        <p className='status'>$40</p>
                      </td>
                    </tr>
                    <tr className='row__box'>
                      <th>
                        <h6>Quantity</h6>
                      </th>
                      <td>
                        <div className="quantity">
                            <button type="button"><FaMinus/></button>
                            <input type="number" name="" id="" placeholder='0'/>
                            <button type="button"><FaPlus/></button>
                        </div>
                      </td>
                    </tr>
                    <tr className='row__box'>
                      <th><h6>Total Price</h6></th>
                      <td>
                        <p className='total__price'>$80</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
          <tfoot className='table__foot'>
            <tr>
                <th>
                    <h6>SubTotal</h6>
                </th>
                <td>
                    <h6>$800</h6>
                </td>
            </tr>
            <tr>
                <th>
                    <h6>Shipping Fee</h6>
                </th>
                <td>
                    <h6>$120</h6>
                </td>
            </tr>
            <tr>
                <th>
                    <h6>Total</h6>
                </th>
                <td>
                    <h6>$920</h6>
                </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default YourOrder
