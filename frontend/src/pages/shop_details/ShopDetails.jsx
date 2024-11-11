import React from 'react'


/* --=======================================
Start Import Components Here 
========================================-- */
import Layout from '../../components/Layout'
import PageBannar from '../../components/page__bannar/PageBannar'
import ProductDetails from '../../components/product__details/ProductDetails'
import ProductCard from "../../components/product__card/ProductCard";
import ProductCardLine from "../../components/product__card__line/ProductCardLine";
/* --=======================================
    End Import Components Here 
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
import CustomerReview from '../../components/customer__review/CustomerReview';
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
      p__rating: 2.5,
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
    p__rating: 3,
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
  p__rating: 1.5,
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


const ShopDetails = () => {
  return (
    <Layout title={"Shop Details"}>
      <div id="shop__details__page">
          <PageBannar title={"Shop Details"}/>
          {/* ====== Start Shop Details Section ======= */}
          <div id="product__details__section">
            <div className="sec__mar">
              <div className="container">
                <ProductDetails/>
              </div>
            </div>
          </div>
          {/* ====== End Shop Details Section ======= */}

          {/* ====== Start Relative Product Section ======= */}
          <div id="relative__product__section">
            <div className="sec__mar">
              <div className="container">
                <div id="relative__product__box">
                  <h3>Relative Products</h3>
                  <div className="row align-items-center justify-content-center g-0">
                    {
                      products.map((item,i) => (
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={i}>
                          <ProductCard item={item}/>
                        </div>
                      ))
                    }
                  </div>
                  <div className="row align-items-center justify-content-center g-0">
                    {
                      products.map((item,i) => (
                        <div className="col-12" key={i}>
                          <ProductCardLine item={item}/>
                        </div>
                      ))
                    }
                  </div>
                  <CustomerReview/>
                </div>
              </div>
            </div>
          </div>
          {/* ====== End Relative Product Section ======= */}
      </div>
    </Layout>
  )
}

export default ShopDetails
