
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
import UserDashboardMenu from "../../../components/user__component/user__dashboard__menu/UserDashboardMenu";
import UserOrderList from "../../../components/user__component/user__order__list/UserOrderList";
import PagiNation from '../../../components/pagi__nation/Pagination';
/* --=======================================
    End Import Components Here 
========================================-- */

const Orders = () => {
  return (
    <Layout title={"Orders"}>
      <div id="user__order__page">

        { /* ========= Start Page Bannar Section Here ========= */}
          <PageBannar title={"Orders"}/>
        { /* ========= End Page Bannar Section Here ========= */}



        { /* ========= Start Page Bannar Section Here ========= */}
          <div id="user__order__section">
            <div className="sec__mar">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-12 col-lg-3">
                      <UserDashboardMenu/>
                  </div>

                  <div className="col-12 col-lg-9">
                    <div id="user__content__box">
                      <h4>Your Orders</h4>
                      {/* ====== End Orders List Section Here ======= */}
                      <div id="all__user__order__list">
                            <div id="all__order__list">
                              <div id="all__order__list__box">
                                <h5>Order List</h5>
                                <UserOrderList/>
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
        { /* ========= End Page Bannar Section Here ========= */}
      </div>
    </Layout>
  )
}

export default Orders
