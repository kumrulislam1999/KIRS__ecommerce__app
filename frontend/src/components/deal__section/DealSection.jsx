import React from 'react'
import { Link } from 'react-router-dom'



/*

 p__title : "Shine Skin Cream",
    p__title__link: "localhost/shop_details",
    p__description : "Neque porro quisquam est qui dolorem ipsum ",
    p__t__price : 150,
    p__d__price : 30,
    p__status: "avaiable",
    p__img : product__img2


*/
/* --=======================================
    Start Import Images Here 
========================================-- */
import product__h__img1 from "../../assets/home__page/featured-2-4h.jpg"
import product__img1 from "../../assets/home__page/offer_banner_2_3.jpg"



const DealSection = ({item}) => {
  return (
    <div id='deal__section'>
        <div id="deal__bg" style={{backgroundImage: `url(${product__img1})`}}>
            <div id="text__box" className='pad__50'>
                <h6><Link to={item.p__title__link}>{item.p__title}</Link></h6>
                <p className='price'>${item.p__t__price} <span>${item.p__d__price}</span></p>
                <p className='description'>{item.p__description}</p>
                <Link to={"#"} className='shop__btn'>Shop Now</Link>
            </div>
        </div>
    </div>
  )
}

export default DealSection
