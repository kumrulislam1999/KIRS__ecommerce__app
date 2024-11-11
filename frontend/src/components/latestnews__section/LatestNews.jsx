import React from 'react'
import { Link } from 'react-router-dom'

import Badge from 'react-bootstrap/Badge';

/* --=======================================
    Start Import React Icons Here 
========================================-- */
import { FaRegCalendarDays } from "react-icons/fa6"
/* --=======================================
    End Import React Icons Here 
========================================-- */


/* --=======================================
    Start Import Images Here 
========================================-- */
import product__h__img1 from "../../assets/home__page/featured-2-4h.jpg"
import product__img1 from "../../assets/home__page/blog_card_3.jpg"

import product__img2 from "../../assets/home__page/featured-2-1h.jpg"
import product__h__img2 from "../../assets/home__page/featured-2-1.jpg"

import product__img3 from "../../assets/home__page/featured-2-2h.jpg"
import product__h__img3 from "../../assets/home__page/featured-2-2.jpg"

import product__img4 from "../../assets/home__page/featured-2-5h.jpg"
import product__h__img4 from "../../assets/home__page/featured-2-5.jpg"

/* --=======================================
    End Import Images Here 
========================================-- */


const LatestNews = ({item}) => {
  return (
    <div id='latest__News'>
      <div id="latest__card">
            <div id="img__box">
                <img className='img__normal' src={product__img1} alt="product_img" />
            </div>
            <div id="text__box">
                <h6><Link to={item.p__title__link}>{item.p__title}</Link></h6>
                <p className='description'>{item.p__description}</p>

                <Badge id="badge__box" bg='none'>
                    {item.p__status}
                </Badge>
                <div id="action__box">
                  <Link to={"#"} className='detail__btn'>More Detail</Link>
                  <p><i><FaRegCalendarDays/></i><span className='date'>{item.p__date}</span></p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default LatestNews
