import React from 'react'

import { useAuth } from '../../context/auth';


/* --=======================================
Start Import Components Here 
========================================-- */
import Layout from '../../components/Layout';

import HeroBannar from '../../components/hero__section/HeroBannar';
import MiniBannar from '../../components/mini__bannar/MiniBannar';
import ProductCard from '../../components/product__card/ProductCard';
import GetUpSection from '../../components/getup__section/GetUpSection';
import DealSection from '../../components/deal__section/DealSection';
import LatestNews from '../../components/latestnews__section/LatestNews';

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
/* --=======================================
    End Import Images Here 
========================================-- */




/* --=======================================
    End Import Components Here 
========================================-- */


/* ====================================
    Start React Icon Here
==================================== */
import { FaCartPlus, FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye, MdOutlineBarChart } from "react-icons/md";
import Preloader from '../../components/preloader/Preloader';

/* ====================================
    End React Icon Here
==================================== */




const products = [
  {
    p__id : 1,
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
    p__id : 2,
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
    p__id : 3,
    p__title : "Shine Skin Cream",
    p__title__link: "localhost/shop_details",
    p__description : "Neque porro quisquam est qui dolorem ipsum ",
    p__t__price : 150,
    p__d__price : 30,
    p__rating: 1,
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
  p__id : 4,
  p__title : "Shine Skin Cream",
  p__title__link: "localhost/shop_details",
  p__description : "Neque porro quisquam est qui dolorem ipsum ",
  p__t__price : 150,
  p__d__price : 30,
  p__rating: 3.5,
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
const deals = [
  {
    p__title : "Get Up To 45% Off",
    p__sub__title : "Hi",
    p__description: "Credibly empower visionary leadership skills and 24/7 functionalities. Space then thirty Uniquely whiteboard equity invested.",
    p__t__price : 300,
    p__d__price: 40, 
    btn__link: "shop-details",
    p__bg__img : "#",
  },
  {
    p__title : "Get Up To 45% Off",
    p__sub__title : "Hello2",
    p__description: "Credibly empower visionary leadership skills and 24/7 functionalities. Space then thirty Uniquely whiteboard equity invested.",
    p__t__price : 300,
    p__d__price: 40, 
    btn__link: "shop-details",
    p__bg__img : "#",
  },
  {
    p__title : "Get Up To 45% Off",
    p__sub__title : "Hello",
    p__description: "Credibly empower visionary leadership skills and 24/7 functionalities. Space then thirty Uniquely whiteboard equity invested.",
    p__t__price : 300,
    p__d__price: 40, 
    btn__link: "shop-details",
    p__bg__img : "#",
  },
];
const latestnews = [
  {
    p__title : "Shine Skin Cream",
    p__title__link: "localhost/shop_details",
    p__description : "Neque porro quisquam est qui dolorem ipsum ",
    p__status: "avaiable",
    p__img : product__img2,
    p__date : "29-03-2024",
    btn__link : "#",
  },
  {
    p__title : "Shine Skin Cream",
    p__title__link: "localhost/shop_details",
    p__description : "Neque porro quisquam est qui dolorem ipsum ",
    p__status: "avaiable",
    p__img : product__img2,
    p__date : "29-03-2024",
    btn__link : "#",
  },
  {
    p__title : "Shine Skin Cream",
    p__title__link: "localhost/shop_details",
    p__description : "Neque porro quisquam est qui dolorem ipsum ",
    p__status: "avaiable",
    p__img : product__img2,
    p__date : "29-03-2024",
    btn__link : "#",
},
{
  p__title : "Shine Skin Cream",
  p__title__link: "localhost/shop_details",
  p__description : "Neque porro quisquam est qui dolorem ipsum ",
  p__status: "avaiable",
  p__img : product__img2,
  p__date : "29-03-2024",
  btn__link : "#",
}
]

const Home = () => {


  /* ==== Auth Context Hooq ==== */
  const [auth, setAuth] = useAuth();

  
  return (
    <Layout title={"Welcome To KIRS"}>
      <div id='home__page'>
          { /* ======= Start Hero Section Here ======= */}
          <HeroBannar/>
          { /* ======= End Hero Section Here ======= */}

          { /* ======= Start Mini Bannar Here ======= */}
          <MiniBannar/>
          { /* ======= End Mini Bannar Here ======= */}
          <h1>
            <pre>
              {JSON.stringify(auth, null, 4)}
            </pre>
          </h1>
          
          { /* ======= Start Arrival Section  Here ======= */}
          <div id="arrival__section">
            <div className="container">
              <div id="arrival__box">
                <h3>New Arrivals Products</h3>
                <div className="row align-items-center justify-content-between g-0">
                    {
                      products.map((item, i) => (
                        <div className=" col-12 col-md-6 col-lg-4 col-xl-3" key={i} >
                          <ProductCard item={item}/>
                        </div>
                      ))
                    }
                </div>
              </div>
            </div>
          </div>
          { /* ======= End Arrival Section Here ======= */}


          { /* ======= Start Getup Section Here ======= */}
          <GetUpSection/>
          { /* ======= End Getup Section Here ======= */}


          { /* ======= Start Best Seller Section  Here ======= */}
          <div id="best__sell__section">
            <div className="container">
              <div id="best__sell__box">
                <h3>Best Sell Products</h3>
                <div className="row align-items-center justify-content-between g-0">
                  {
                    products.map((item, i) => (
                      <div className=" col-12  col-md-6 col-lg-4 col-xl-3" key={i}>
                        <ProductCard key={i} item={item}/>
                      </div>
                    ))
                  }
                </div>
                <button type='button' className='see__all__btn'>See All Products</button>
              </div>
            </div>
          </div>
          { /* ======= End  Best Seller Section Here ======= */}


          { /* ======= Start  Deals Section Here ======= */}
          <div id="dealof__day__section">
              <div className="sec__mar">
                <div className="container">
                  <div id="dealof__day__box" >
                    <h3>Deal Of Days</h3>
                    <div className="row align-items-center justify-content-center">
                      <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                        <div id="time__box">
                          <div className="time__item">
                            <p>00</p>
                            <h6>Days</h6>
                          </div>
                          <span className='clone__box'>:</span>
                          <div  className="time__item">
                            <p>00</p>
                            <h6>Hours</h6>
                          </div>
                          <span className='clone__box'>:</span>
                          <div className="time__item">
                            <p>00</p>
                            <h6>Minutes</h6>
                          </div>
                          <span className='clone__box'>:</span>
                          <div className="time__item">
                            <p>00</p>
                            <h6>Seconds</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div id="dealof__box" className='pad__100'>
                      <div className="row align-items-center justify-content-center">
                        {
                          deals.map((item,i) => (
                            <div className=" col-12 col-md-6 col-xl-4 pad__12" key={i}>
                              <DealSection item={item}/>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          { /* ======= End  Deals Section Here ======= */}


          { /* ======= Start Latest News Section  Here ======= */}
          <div id="latestnew__section" className="marb__36">
            <div className="container">
              <div id="latest__box">
                <h3>Latest News</h3>
                <div className="row align-items-center justify-content-between g-0">
                    {
                      latestnews.map((item, i) => (
                        <div className=" col-12  col-md-6 col-lg-4 col-xl-3" key={i} >
                          <LatestNews item={item}/>
                        </div>
                      ))
                    }
                </div>
              </div>
            </div>
          </div>
          { /* ======= End Latest News Section Here ======= */}

      </div>
    </Layout>
  )
}

export default Home
