import React from 'react'


/* --=======================================
Start Import Components Here 
========================================-- */
import Layout from '../../components/Layout'
import PageBannar from '../../components/page__bannar/PageBannar'
import ProductCard from '../../components/product__card/ProductCard'

/* --=======================================
    End Import Components Here 
========================================-- */


/* ====================================
    Start Import React Icons Here
==================================== */
import { IoSearchOutline } from "react-icons/io5";
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


const Search = () => {
  return (
    <Layout title={"Search Content"}>
      <div id="search__page">

        {/* ======= Start Page Bannar Section ======= */}
        <PageBannar title={"Search"}/>
        {/* ======= End Page Bannar Section ======= */}


        {/* ======= Start Cart Section Here ======== */}
        <div id="search__section">
          <div className="sec__mar">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                  <div id="search__box">
                    <input type="text" name="" id="" placeholder='Search Products Here'/>
                    <button type="button" className='search__btn'><IoSearchOutline/></button>
                  </div>
                </div>
              </div>
              
              <div className="row align-items-center justify-content-center g-0">
                  {
                    products.map((item,i) => (
                      <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={i}>
                        <ProductCard item={item}/>
                      </div>
                    ))
                  }
              </div>
            </div>
          </div>
        </div>
        {/* ======= End Cart Section Here ======== */}

      </div>
    </Layout>
  )
}

export default Search
