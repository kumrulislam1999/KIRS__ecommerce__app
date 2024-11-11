import React from 'react'
import { Link } from 'react-router-dom'

/* --=======================================
Start Import Components Here 
========================================-- */
import Layout from '../../components/Layout'
import WishlistCard from '../../components/wishlist__card/WishlistCard'
import PageBannar from '../../components/page__bannar/PageBannar'

/* --=======================================
    End Import Components Here 
========================================-- */






/* ====================================
    Start Import React Icons Here
==================================== */
import { IoSearchOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
/* ====================================
    End Import React Icons Here
==================================== */




const Wishlist = () => {
  return (
    <Layout title={"Wishlist"}>
      <div id="wishlist__page">
        {/* ======= Start Page Bannar Section Here ======== */}
          <PageBannar title={"Wishlist"}/>
        {/* ======= End Page Bannar Section Here ======== */}


        {/* ======= Start WishList Section Here ======== */}
        <div id="wishlisth__section">
          <div className="sec__mar">
            <div className="container">
              <h3>Added Wishlist</h3>
              <div id="search__box">
                <input type="text" name="" id="" placeholder='Search Products Here'/>
                <button type="button" className='search__btn'><IoSearchOutline/></button>
              </div>
              <WishlistCard/>
              <div id="social__media__box">
                <p>Share With: </p>
                <ul className="social__media">
                  <li>
                    <Link className="social__item">
                        <FaFacebookF/>
                    </Link>
                  </li>
                  <li>
                    <Link className="social__item">
                        <FaXTwitter/>
                    </Link>
                  </li>
                  <li>
                    <Link className="social__item">
                        <FaInstagram/>
                    </Link>
                  </li>
                  <li>
                    <Link className="social__item">
                        <FaLinkedinIn/>
                    </Link>
                  </li>
                  <li>
                    <Link className="social__item">
                        <FaPinterestP/>
                    </Link>
                  </li>
                  <li>
                    <Link className="social__item">
                        <FaGoogle/>
                    </Link>
                  </li>
                  <li>
                    <Link className="social__item">
                        <FaWhatsapp/>
                    </Link>
                  </li>
                  <li>
                    <Link className="social__item">
                        <FaRegEnvelope/>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* ======= End WishList Section Here ======== */}
      </div>
    </Layout>
  )
}

export default Wishlist
