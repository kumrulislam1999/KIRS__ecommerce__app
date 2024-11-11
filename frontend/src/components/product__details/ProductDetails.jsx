import React from 'react'
import { Link } from 'react-router-dom'


/* ====================================
    Start React Icon Here
==================================== */
import { FaCartPlus, FaRegHeart,FaRegStar, FaStar,FaStarHalfAlt,FaHeart, FaFacebookF,FaLinkedinIn } from "react-icons/fa";
import { MdOutlineRemoveRedEye, MdOutlineBarChart } from "react-icons/md";
import { FaPlus, FaMinus,FaXTwitter } from "react-icons/fa6";
import { BiSolidCartAdd } from "react-icons/bi";
import { GiNetworkBars } from "react-icons/gi";
import { AiFillInstagram } from "react-icons/ai";
import ProductRatings from '../product__ratings/ProductRatings';
/* ====================================
    End React Icon Here
==================================== */



const ProductDetails = () => {
  return (
    <div id='product__details'>
      <div id="product__details__box">
        <div className="row align-items-center justify-content-between g-0">
            <div className="col-lg-6">
                <div id="slider__box"></div>
            </div>
            <div className="col-lg-6">
                <div id="details__box">
                    <h3>Leather Jackets</h3>
                    <div className="product__rating__box">
                        <ProductRatings rating={3.5}/>
                        <div className="review">
                            <Link to={"#"}>(3 Customer Review)</Link>
                        </div>
                    </div>
                    <p className='price'>$120 <span>$40</span></p>
                    <p className='description'>Quickly productivate holistic systems after 24/365 e-commerce. Continually synthesize superior catalysts for change via high standards in leadership skills. Collaboratively evisculate distributed functionalities rather than timely methods of empowerment.</p>
                    <div id="color__size__box">
                        <div id="color__box">
                            <label htmlFor="select___color">Color : </label>
                            <select name="" id="select__color">
                                <option value="red">Red</option>
                                <option value="white">White</option>
                                <option value="blug">Blue</option>
                            </select>
                        </div>
                        <div id="size__box">
                            <label htmlFor="select___color">Size : </label>
                            <select name="" id="select__size">
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </div>
                    </div>
                    <div id="action__box">
                        <div id="count__box">
                            <button type="button" className='plus__btn icon__btn'><FaPlus/></button>
                            <input type="number" name="" id="" placeholder='0' />
                            <button type="button" className='minus__btn icon__btn'><FaMinus/></button>
                        </div>
                        <button type='button' className='add__to__cart__btn'>Add To Cart</button>
                        <button type="button" className='wishlist__btn icon__btn'><FaHeart/></button>
                        <button type="button" className='compare__btn icon__btn'><GiNetworkBars/></button>
                    </div>
                    <div id="detail__short__social__media">
                        <div className="row align-items-center justify-content-between justify-content-sm-center g-0">
                            <div className="col-12 col-sm-8">
                                <table id="short__details">
                                    <tbody>
                                        <tr>
                                            <th>SKU : </th>
                                            <td>Jacket</td>
                                        </tr>
                                        <tr>
                                            <th>Tags : </th>
                                            <td> <Link to={"#"}>New</Link> , <Link to={"#"}>Woman</Link></td>
                                        </tr>
                                        <tr>
                                            <th>Category:</th>
                                            <td> <Link to={"#"}>Dress</Link> , <Link to={"#"}>T-Shirt</Link> , <Link to={"#"}>Mini Scut</Link></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-12 col-sm-4 mtxsm__24">
                                <ul id="social__media">
                                    <li><Link className="social__item" to={"#"}><FaFacebookF/></Link></li>
                                    <li><Link className="social__item" to={"#"}><FaLinkedinIn/></Link></li>
                                    <li><Link className="social__item" to={"#"}><FaXTwitter/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
