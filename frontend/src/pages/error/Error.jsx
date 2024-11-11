import React from 'react'


/* --=======================================
Start Import Components Here 
========================================-- */
import Layout from '../../components/Layout'
/* --=======================================
    End Import Components Here 
========================================-- */


/* --=======================================
Start Import Components Here 
========================================-- */
import error__img from "./../../assets/home__page/error.png"
/* --=======================================
    End Import Components Here 
========================================== */



const Error = () => {
  return (
    <Layout title={"Page Not Found"}>
      <div id='error__page' >
        <div className="sec__pad">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-sm-8 col-lg-6 col-md-8 col-xl-5">
                <div id="error__context__box">
                  <img src={error__img} alt="error " />
                  <div id="context__box">
                    <h3>Page Not Found</h3>
                    <p>Sorry, we couldn’t find the page you where looking for. We suggest that you return to homepage.</p>
                    <button type='type' className='back__btn'>Back To Home</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Error
