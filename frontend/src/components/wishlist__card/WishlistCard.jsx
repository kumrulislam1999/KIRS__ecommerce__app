import React from 'react'

/* ====================================
    Start Import React Icons Here
==================================== */
import { IoSearchOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoMdCheckmark } from "react-icons/io";

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

const WishlistCard = () => {
  return (
    <div id='wishlist__card'>
      <div id="wishlist__card__box">
        <table className='table__box__lg'>
          <thead className='table__head'>
            <tr className='row__box'>
              <th >
                <input type="checkbox" name="" id="" className='check__btn'/>
              </th>
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
                <h6>Date</h6>
              </th>
              <th>
                <h6>Status</h6>
              </th>
              <th>
              </th>
            </tr>
          </thead>
          <tbody className="table__body">
            <tr className='row__box'>
              <td >
                <input type="checkbox" name="" id="" className='check__btn'/>
              </td>
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
                <p className='date'>November 21, 2021</p>
              </td>
              <td>
                <p className='status'> <i><IoMdCheckmark/></i> In stock</p>
              </td>
              <td>
                <button type="button" className='add__to__btn'>Add To Cart</button>
              </td>
            </tr>
            <tr className='row__box'>
              <td >
                <input type="checkbox" name="" id="" className='check__btn'/>
              </td>
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
                <p className='date'>November 21, 2021</p>
              </td>
              <td>
                <p className='status'> <i><IoMdCheckmark/></i> In stock</p>
              </td>
              <td>
                <button type="button" className='add__to__btn'>Add To Cart</button>
              </td>
            </tr>
          </tbody>
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
              <td className="product__item">
                <table width="100%">
                  <tbody>
                    <tr className='row__box'>
                      <th>Select</th>
                      <td>
                        <input type="checkbox" name="" id="" className='check__btn'/>
                      </td>
                    </tr>
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
                        <h6>Date</h6>
                      </th>
                      <td>
                        <p>24 Jan, 2024</p>
                      </td>
                    </tr>
                    <tr className='row__box'>
                      <th>
                        <h6>Status</h6>
                      </th>
                      <td>
                        <p className='status'> <i><IoMdCheckmark/></i> In stock</p>
                      </td>
                    </tr>
                    <tr className='row__box'>
                      <th><h6>Add to Cart</h6></th>
                      <td>
                        <button type="button" className='add__to__btn'>Add To Cart</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr> 
              <td className="product__item">
                <table width="100%">
                  <tbody>
                    <tr className='row__box'>
                      <th>Select</th>
                      <td>
                        <input type="checkbox" name="" id="" className='check__btn'/>
                      </td>
                    </tr>
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
                        <h6>Date</h6>
                      </th>
                      <td>
                        <p>24 Jan, 2024</p>
                      </td>
                    </tr>
                    <tr className='row__box'>
                      <th>
                        <h6>Status</h6>
                      </th>
                      <td>
                        <p className='status'> <i><IoMdCheckmark/></i> In stock</p>
                      </td>
                    </tr>
                    <tr className='row__box'>
                      <th><h6>Add to Cart</h6></th>
                      <td>
                        <button type="button" className='add__to__btn'>Add To Cart</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default WishlistCard
