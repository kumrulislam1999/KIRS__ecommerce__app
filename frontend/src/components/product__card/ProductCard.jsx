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
import product__h__img1 from "../../assets/home__page/featured-2-4h.jpg"
import product__img1 from "../../assets/home__page/featured-2-4.jpg"

import product__img2 from "../../assets/home__page/featured-2-1h.jpg"
import product__h__img2 from "../../assets/home__page/featured-2-1.jpg"

import product__img3 from "../../assets/home__page/featured-2-2h.jpg"
import product__h__img3 from "../../assets/home__page/featured-2-2.jpg"

import product__img4 from "../../assets/home__page/featured-2-5h.jpg"
import product__h__img4 from "../../assets/home__page/featured-2-5.jpg"
import ProductRatings from '../product__ratings/ProductRatings';

/* --=======================================
    End Import Images Here 
========================================-- */


const ProductCard = ({item}) => {
  return (
    <div id='product__card'>
        <div id="card__box">
            <div id="img__box">
                <img className='img__normal' src={product__img1} alt="product_img" />
                <img className='img__hover' src={product__h__img1} alt="product hover_img" />
            </div>
            <div id="text__box">
                <p className='price'>${item.p__t__price} <span>${item.p__d__price}</span></p>
                <h6><Link to={`/shop-details/${item.p__id}`}>{item.p__title}</Link></h6>
                <ProductRatings rating={item.p__rating}/>
                <p className='description'>{item.p__description}</p>
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

export default ProductCard
