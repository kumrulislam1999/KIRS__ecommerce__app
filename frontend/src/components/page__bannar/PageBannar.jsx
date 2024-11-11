import React from 'react'

import Breadcrumb from 'react-bootstrap/Breadcrumb';

/* =========================================
    Start Import Images Here
========================================= */
import bannar__img from "../../assets/contact__page/contact__page__bg.webp"
/* =========================================
    End Import Images Here
========================================= */

/* =========================================
    Start Declearation Variable Here
========================================= */
const bannar__item = {
    title : "Contact Us",
    link__title : "Contact",
    bg__img : bannar__img,
}
/* =========================================
    End Declearation Variable Here
========================================= */


const PageBannar = ({title}) => {
  return (
    <div id='pagebannar__section'>
      <div id="pagebannar__bg" className='sec__pad' style={{backgroundImage: `url(${bannar__item.bg__img})`}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className=" col-12 col-sm-10 col-md-8 col-lg-5">
                    <div id="bannar__content">
                        <h2>{title}</h2>
                        <Breadcrumb id='breadcrumb__box'>
                            <Breadcrumb.Item className='breadcrumb__item' href='/'>Home</Breadcrumb.Item>
                            <Breadcrumb.Item className='breadcrumb__item' href='#'>{bannar__item.link__title}</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PageBannar
