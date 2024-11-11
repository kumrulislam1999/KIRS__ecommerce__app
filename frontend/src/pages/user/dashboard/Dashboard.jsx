
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
/* --=======================================
    End Import Components Here 
========================================-- */

const Dashboard = () => {
  return (
    <Layout title={"Dashboard"}>
      <div id="user__profile__page">

        { /* ========= Start Page Bannar Section Here ========= */}
          <PageBannar title={"Dashboard"}/>
        { /* ========= End Page Bannar Section Here ========= */}



        { /* ========= Start Page Bannar Section Here ========= */}
          <div id="user__profile__section">
            <div className="sec__mar">
              <div className="container">
                <div className="row justify-content-between g-0">
                  <div className="col-12 col-lg-3">
                      <UserDashboardMenu/>
                  </div>
                  <div className="col-12 col-lg-9">
                    <div id="Dashboard__content__box">
                      <h4>My Profile Details</h4>
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

export default Dashboard
