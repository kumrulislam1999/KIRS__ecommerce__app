import React from 'react'
import { Link } from 'react-router-dom';

/* ========================================
    Start Import Bannar Images Here
======================================== */
import bannar__img1 from "../../assets/home__page/banner_2_1.jpg";
import bannar__img2 from "../../assets/home__page/banner_2_2.jpg"
import bannar__img3 from "../../assets/home__page/banner_2_3.jpg"
/* ========================================
    End Import Bannar Images Here
======================================== */

const MiniBannar = () => {
  return (
    <div id='minibannar__section'>
      <div className="sec__mar">
        <div className="container">
          <div className="row justify-content-center g-0">
            <div className="col-12 col-lg-4">
              <div className="row align-items-center justify-content-center g-0">
                <div className="col-12 pad__12"> 
                  <div className="content__bg">
                        <img src={bannar__img1} alt="" />
                        <div className="text__content">
                        <h3><Link to="/">Face Cream</Link></h3>
                        <button type="button" className='shop__btn'>Shop Now</button>                  
                        </div>
                  </div>
                  </div>
                <div className="col-12 pad__12"> 
                  <div className="content__bg" >
                      <img src={bannar__img1} alt=""/>
                      <div className="text__content">
                        <h3><Link to="/">Face Cream</Link></h3>
                        <button type="button" className='shop__btn'>Shop Now</button>
                      </div>
                  </div>
                  </div>
              </div>  
            </div>
            <div className="col-12 col-lg-8 pad__12">
                  <div  className="content__bg" >
                      <img src={bannar__img1} alt=""  />
                      <div className="text__content">
                        <h3><Link to="/">Face Cream</Link></h3>
                        <button type="button" className='shop__btn'>Shop Now</button>
                      </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiniBannar
