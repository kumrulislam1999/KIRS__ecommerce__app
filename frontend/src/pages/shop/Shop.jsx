import React from 'react'




/* --=======================================
Start Import Components Here 
========================================-- */
import Layout from '../../components/Layout'
import PageBannar from '../../components/page__bannar/PageBannar'
import ProductCardLine from '../../components/product__card__line/ProductCardLine';
import ProductCard from '../../components/product__card/ProductCard';
import PagiNation from '../../components/pagi__nation/Pagination';
/* --=======================================
    End Import Components Here 
========================================-- */

/* --=======================================
    End Import React Icons Here 
========================================-- */
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { IoListOutline } from "react-icons/io5";
/* --=======================================
    End Import React Icons Here 
========================================-- */



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



const products = [
  {
      p__title : "Shine Skin Cream",
      p__title__link: "localhost/shop_details",
      p__description : "Neque porro quisquam est qui dolorem ipsum ",
      p__t__price : 150,
      p__d__price : 30,
      p__rating: 4.5,
      p__status: "avaiable",
      a__card__link : "#",
      compare__link : "#",
      quick__view__link : "#",
      wishlist__link : "#",
      p__img : product__img2,
      p__h__img : product__h__img2,
      p__date : "29-03-2024",
  },
  {
      p__title : "Shine Skin Cream",
      p__title__link: "localhost/shop_details",
      p__description : "Neque porro quisquam est qui dolorem ipsum ",
      p__t__price : 150,
      p__d__price : 30,
      p__rating: 4.5,
      p__status: "30%",
      a__card__link : "#",
      compare__link : "#",
      quick__view__link : "#",
      wishlist__link : "#",
      p__img : product__img3,
      p__h__img : product__h__img3,
      p__date : "29-03-2024",
  },
  {
    p__title : "Shine Skin Cream",
    p__title__link: "localhost/shop_details",
    p__description : "Neque porro quisquam est qui dolorem ipsum ",
    p__t__price : 150,
    p__d__price : 30,
    p__rating: 4.5,
    p__status: "New",
    a__card__link : "#",
    compare__link : "#",
    quick__view__link : "#",
    wishlist__link : "#",
    p__img : product__img4,
    p__h__img : product__h__img4,
    p__date : "29-03-2024",
},
{
  p__title : "Shine Skin Cream",
  p__title__link: "localhost/shop_details",
  p__description : "Neque porro quisquam est qui dolorem ipsum ",
  p__t__price : 150,
  p__d__price : 30,
  p__rating: 4.5,
  p__status: "Avaiable",
  a__card__link : "#",
  compare__link : "#",
  quick__view__link : "#",
  wishlist__link : "#",
  p__img : product__img1,
  p__h__img : product__h__img1,
  p__date : "29-03-2024",
}
]



const Shop = () => {
  return (
    <Layout title={"Shop"}>
      <div id="shop__page">
        <PageBannar title={"Shop"}/>

        <div id="shop__section">
          <div className="sec__mar">
            <div className="container">
              <div id="filter__bar">
                <div className="row align-items-center justify-content-between justify-content-sm-center row__box">
                  <div className="col-12 col-md-6">
                    <div id="result__box">
                      <div className="btn__box">
                        <button type="button" className='toggle__btn'><BsFillGrid3X3GapFill/></button>
                        <button type="button" className='toggle__btn'><IoListOutline/></button>
                      </div>
                      <p>Showing <span className='showing__product__number'>12</span>of <span className='total__product__number'>16</span> Products</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 mtsm__24 mtxsm__24">
                    <div id="filter__box">
                      <select id="filter">
                        <optgroup label="Sort By dated" className="option__group">
                          <option className='option__item' value="latest-products">Sort By Latest</option>
                          <option className='option__item' value="oldest-products">Sort By Oldest</option>
                          <option className='option__item' value="accending-products">Sort By Accending</option>
                          <option className='option__item' value="decending-products">Sort By Decending</option>
                        </optgroup>
                        <optgroup label="Sort By Category" className="option__group">
                          <option className='option__item' value="man's-collection">Man's Collection</option>
                          <option className='option__item' value="women's-collection">Women's Collection</option>
                          <option className='option__item' value="kid's-collection">Kid's Collection</option>
                          <option className='option__item' value="kid's-collection">Girl's Collection</option>
                          <option className='option__item' value="boy's-collection">Boy's Collection</option>
                        </optgroup>
                      </select>
                      

                    </div>
                  </div>
                </div>
              </div>

              <div id="content__box">
                <div className="row justify-content-center g-0">
                  {
                    products.map((item,i) => (
                      <div className="col-12 col-md-6 col-lg-4 col-xxl-3" key={i}>
                        <ProductCard item={item}/>
                      </div>
                    ))
                  }
                </div>

                <div className="row justify-content-center g-0">
                  {
                    products.map((item,i) => (
                      <div className="col-12" key={i}>
                        <ProductCardLine item={item}/>
                      </div>
                    ))
                  }
                </div>

                <PagiNation/>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default Shop
