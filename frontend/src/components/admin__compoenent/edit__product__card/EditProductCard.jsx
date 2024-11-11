import React from 'react'
import { Link } from 'react-router-dom'

import Badge from 'react-bootstrap/Badge';

/* ====================================
    Start React Icon Here
==================================== */
import { FaCartPlus, FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye, MdOutlineBarChart } from "react-icons/md";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
/* ====================================
    End React Icon Here
==================================== */

/* --=======================================
    Start Import Images Here 
========================================-- */
import product__h__img1 from "../../../assets/home__page/featured-2-4h.jpg"
import product__img1 from "../../../assets/home__page/featured-2-4.jpg"


/* --=======================================
    End Import Images Here 
========================================-- */


const EditProductCard = ({item}) => {
  return (
    <div id='edit__product__card'>
        <div id="card__box">
            <div id="img__box">
                <img className='img__normal' src={product__img1} alt="product_img" />
                <img className='img__hover' src={product__h__img1} alt="product hover_img" />
            </div>
            <div id="text__box">
                <p className='price'>${item.p__t__price} <span>${item.p__d__price}</span></p>
                <h6><Link to={item.p__title__link}>{item.p__title}</Link></h6>
                <div className="rating__box">
                   <p><i><FaStar/></i> <i><FaStar/></i> <i><FaStar/></i> <i><FaStar/></i><i><FaStar/></i></p> <span>({item.p__rating})</span>
                </div>
                <p className='description'>{item.p__description}</p>
                <div id="btn__box">
                    <Link to={"/update-product"} className='update__btn'>Edit Product</Link>
                    <button type="button" className='delete__btn'>Delete</button>
                </div>
            </div>
            <div id="action__box">
                <Link className='cart__btn' to={item.a__card__link}><FaCartPlus/></Link>
                <Link className='wishlist__btn' to={item.wishlist__link}><FaRegHeart/></Link>
                <Link className='view__btn' to={item.quick__view__link}><MdOutlineRemoveRedEye/></Link>
                <Link className='compare__btn' to={item.compare__link}><MdOutlineBarChart/></Link>
            </div>
            <Badge id="badge__box" bg='none'>
                    {item.p__status}
            </Badge>
        </div>
    </div>
  )
}

export default EditProductCard
