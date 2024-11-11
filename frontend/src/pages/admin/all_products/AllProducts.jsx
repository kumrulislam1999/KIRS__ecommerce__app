
import React from 'react'
import { Link } from 'react-router-dom';


/* --=======================================
Start Import React Icons Here 
========================================-- */
  import { FaUserEdit } from "react-icons/fa";
/* --=======================================
Start Import React Icons Here 
========================================-- */

/* --=======================================
Start Import Components Here 
========================================-- */
import Layout from '../../../components/Layout'
import PageBannar from "../../../components/page__bannar/PageBannar";
import AdminDashboardMenu from "../../../components/admin__compoenent/admin__dashboard__menu/AdminDashboardMenu"
import EditProductCard from "../../../components/admin__compoenent/edit__product__card/EditProductCard";
/* --=======================================
    End Import Components Here 
========================================-- */

/* --=======================================
    Start Import Images Here 
========================================-- */
import product__h__img1 from "../../../assets/home__page/featured-2-4h.jpg"
import product__img1 from "../../../assets/home__page/featured-2-4.jpg"

import product__img2 from "../../../assets/home__page/featured-2-1h.jpg"
import product__h__img2 from "../../../assets/home__page/featured-2-1.jpg"

import product__img3 from "../../../assets/home__page/featured-2-2h.jpg"
import product__h__img3 from "../../../assets/home__page/featured-2-2.jpg"

import product__img4 from "../../../assets/home__page/featured-2-5h.jpg"
import product__h__img4 from "../../../assets/home__page/featured-2-5.jpg"
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

const AllProducts = () => {
  return (
    <Layout title={"All Products"}>
      <div id="all__products__page">

        { /* ========= Start Page Bannar Section Here ========= */}
          <PageBannar title={"All Products"}/>
        { /* ========= End Page Bannar Section Here ========= */}



        { /* ========= Start Page Bannar Section Here ========= */}
          <div id="all__products__section">
            <div className="sec__mar">
              <div className="container">
                <div className="row justify-content-between g-0">
                  <div className="col-12 col-lg-3">
                      <AdminDashboardMenu/>
                  </div>
                  <div className="col-12 col-lg-9">
                    <div id="all__products__content__box">
                      <h4>All Products</h4>
                      <div className="row align-items-center justify-content-between g-0">
                        {
                          products.map((item,i) => (
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-4" key={i}>
                              <EditProductCard item={item}/>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        { /* ========= End Page Bannar Section Here ========= */}
      </div>
    </Layout>
  )
}

export default AllProducts

