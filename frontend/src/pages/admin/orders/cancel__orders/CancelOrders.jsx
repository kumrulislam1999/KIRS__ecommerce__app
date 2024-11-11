import React from 'react'
import { Link } from 'react-router-dom';

/* ===================================
    Start import React Icon Here 
=================================== */
import { LuCircleDollarSign } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import { GiBoxUnpacking } from "react-icons/gi";
import { GrDeliver } from "react-icons/gr";
import { MdPending } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { FaSquareCheck } from "react-icons/fa6";
import { GrInProgress } from "react-icons/gr";
import { MdReviews } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";

/* ===================================
    End import React Icon Here 
=================================== */

/* --=======================================
Start Import Components Here 
========================================-- */
import Layout from '../../../../components/Layout';
import PageBannar from '../../../../components/page__bannar/PageBannar';
import AdminDashboardMenu from '../../../../components/admin__compoenent/admin__dashboard__menu/AdminDashboardMenu';
import PagiNation from '../../../../components/pagi__nation/PagiNation';
import AdminCancelOrdersList from '../../../../components/admin__compoenent/cancel__orders/AdminCancelOrderList';
/* --=======================================
    End Import Components Here 
========================================-- */

const CancelOrders = () => {
  return (
    <Layout title={"Cancel Orders"}>
      <div id="cancel__orders__page">

      { /* ========= Start Page Bannar Section Here ========= */}
        <PageBannar title={"Cancel Orders"}/>
      { /* ========= End Page Bannar Section Here ========= */}



      { /* ========= Start All Orders Section Here ========= */}
        <div id="cancel__orders__section">
          <div className="sec__mar">
            <div className="container">
              <div className="row justify-content-between g-0">
                <div className="col-12 col-lg-3">
                    <AdminDashboardMenu/>
                </div>
                <div className="col-12 col-lg-9">
                  <div id="all__orders__content__box">
                    <h4>Orders Overviews</h4>
                    {/* ====== Start Orders Overview Section Here ======= */}
                    <div id="order__overview__section">
                      <h5>Orders Overviews</h5>
                      <div id="orders__overviews">
                        <div id="orders__overviews__box">
                          <div className="row justify-content-center g-0">
                            <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                              <div className="orders__overviews__item">
                                <div className="overview__text__content">
                                  <h6 className='title'>Payment Refund</h6>
                                  <h6>490</h6>
                                </div>
                                <div className="overviews__icon">
                                  <i><LuCircleDollarSign/></i>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                              <div className="orders__overviews__item">
                                <div className="overview__text__content">
                                  <h6 className='title'>Order Cancel</h6>
                                  <h6>230</h6>
                                </div>
                                <div className="overviews__icon">
                                  <i><MdOutlineCancel/></i>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                              <div className="orders__overviews__item">
                                <div className="overview__text__content">
                                  <h6 className='title'>Order Shipped</h6>
                                  <h6>650</h6>
                                </div>
                                <div className="overviews__icon">
                                  <i><GiBoxUnpacking/></i>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                              <div className="orders__overviews__item">
                                <div className="overview__text__content">
                                  <h6 className='title'>Order Delivering</h6>
                                  <h6>170</h6>
                                </div>
                                <div className="overviews__icon">
                                  <i><GrDeliver/></i>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                            <div className="orders__overviews__item">
                              <div className="overview__text__content">
                                <h6 className='title'>Pending Review</h6>
                                <h6>210</h6>
                              </div>
                              <div className="overviews__icon">
                                <i><MdReviews/></i>
                              </div>
                            </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                              <div className="orders__overviews__item">
                                <div className="overview__text__content">
                                  <h6 className='title'>Pending Payment</h6>
                                  <h6>608</h6>
                                </div>
                                <div className="overviews__icon">
                                  <i><MdOutlinePayment/></i>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                              <div className="orders__overviews__item">
                                <div className="overview__text__content">
                                  <h6 className='title'>Delivered</h6>
                                  <h6>200</h6>
                                </div>
                                <div className="overviews__icon">
                                  <i><FaSquareCheck/></i>
                                </div>
                              </div>
                            </div>                        
                            <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                              <div className="orders__overviews__item">
                                <div className="overview__text__content">
                                  <h6 className='title'>In Progress</h6>
                                  <h6>656</h6>
                                </div>
                                <div className="overviews__icon">
                                  <i><GrInProgress/></i>
                                </div>
                              </div>
                            </div> 
                            <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                              <div className="orders__overviews__item">
                                <div className="overview__text__content">
                                  <h6 className='title'>Pending Review</h6>
                                  <h6>210</h6>
                                </div>
                                <div className="overviews__icon">
                                  <i><MdReviews/></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ====== End Orders Overview Section Here ======= */}




                    {/* ====== End Orders List Section Here ======= */}
                      <div id="all__order__list__section">
                          <div id="all__order__list">
                            <div id="all__order__list__box">
                              <h5>Cancel Order List</h5>
                              <AdminCancelOrdersList/>
                            </div>
                            <PagiNation/>
                          </div>
                      </div>
                    {/* ====== End Orders List Section Here ====== */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      { /* ========= End All Orders Section Here ========= */}
      </div>
    </Layout>
  )
}

export default CancelOrders
