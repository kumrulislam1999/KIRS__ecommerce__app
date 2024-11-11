import React from 'react'
import { Link } from 'react-router-dom'



/*======================================
    Start Import Images Here
===================================== */
import getup__img from "../../assets/home__page/offer_banner_2_1.jpg";
/*======================================
    End Import Images Here
===================================== */




const GetUpSection = () => {
  return (
    <div id='getup__section'>
        <div className='sec__mar'>
            <div id="getup__bg" className='sec__pad' style={{backgroundImage : `url(${getup__img})`}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className=" col-12 col-sm-10 col-md-8 col-lg-5">
                            <div className="content__box">
                                <h3>Get Up To 35% Off all Best Spa Cosmetics </h3>
                                <p>Holisticly maximize interoperable action items for effective e-business. Globally impact enterprise-wide niche markets through dynamic.</p>
                                <Link to={"#"} className='shop__btn'>Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetUpSection
