
import React from 'react'
import { Link } from 'react-router-dom';


/* --=======================================
Start Import React Icons Here 
========================================-- */
  import { FaUserEdit } from "react-icons/fa";
/* --=======================================
Start Import React Icons Here 
========================================-- */

/* =========================================
        Start Import Images Here
========================================= */
import order__pro__img from "../../../assets/home__page/featured-2-2.jpg";
/* =========================================
        Start Import Images Here
========================================= */

/* --=======================================
Start Import Components Here 
========================================-- */
import Layout from '../../../components/Layout'
import PageBannar from "../../../components/page__bannar/PageBannar";

import UserDashboardMenu from "../../../components/user__component/user__dashboard__menu/UserDashboardMenu";
import UserOrderList from "../../../components/user__component/user__order__list/UserOrderList";
import PagiNation from '../../../components/pagi__nation/Pagination';
/* --=======================================
    End Import Components Here 
========================================-- */
const OrderDetails = () => {
  return (
    <Layout title={"Order Details"}>
        <div id='user__order__details__page'>
            {/* ======== Start Page Bannar Section Here ========= */}
            <PageBannar title={"Order Details"}/>
            {/* ======== End Page Bannar Section Here ========= */}


            { /* ========= Start Page Bannar Section Here ========= */}
            <div id="user__order__details__section">
                <div className="sec__mar">
                <div className="container">
                    <div className="row justify-content-between">
                    <div className="col-12 col-lg-3">
                        <UserDashboardMenu/>
                    </div>

                    <div className="col-12 col-lg-9">
                        <div id="user__content__box">
                            <h4>Order Details</h4>
                            {/* ====== End Orders List Section Here ======= */}
                            <div id="order__details__card">
                                <div id="order__cart__title">
                                    <div id="card__img">
                                        <img src={order__pro__img} alt="order product__image" />
                                    </div>
                                    <div id="card__text">
                                        <h6>In Progress</h6>
                                        <h5>Order ID: #001</h5>
                                    </div>
                                </div>
                                <div id="order__card__body">
                                    <div id="card__body__item">
                                        <p className='title'>Category Name</p>
                                        <p className='description'>Beauty</p>
                                    </div>
                                    <div id="card__body__item">
                                        <p className='title'>Product Name</p>
                                        <p className='description'>Skin Cream</p>
                                    </div>
                                    <div id="card__body__item">
                                        <p className='title'>Product Item</p>
                                        <p className='description'>04</p>
                                    </div>
                                    <div id="card__body__item">
                                        <p className='title'>Payment Method</p>
                                        <p className='description'>Cash On Delivery</p>
                                    </div>
                                    <div id="card__body__item">
                                        <p className='title'>Payment Status</p>
                                        <p className='description'>Cash On Delivery</p>
                                    </div>
                                    <div id="card__body__item">
                                        <p className='title'>Delivery Method</p>
                                        <p className='description'>Courier</p>
                                    </div>
                                    <div id="card__body__item">
                                        <p className='title'>Delivery Status</p>
                                        <p className='description'>Pending</p>
                                    </div>
                                    <div id="card__body__item">
                                        <p className='title'>Delivery ID</p>
                                        <p className='description'>#0003</p>
                                    </div>
                                    <div id="card__body__item">
                                        <p className='title'>Payment Method</p>
                                        <p className='description'>Cash On Delivery</p>
                                    </div>
                                </div>
                            </div>
                            {/* ====== End Orders List Section Here ====== */}
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

export default OrderDetails
