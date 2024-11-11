import React from 'react'

/* =====================================
    Start Import React Slick Slider Here
===================================== */
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";
/* =====================================
    End Import React Slick Slider Here
===================================== */



const NextArrow = (props) => {

        const { className, style, onClick } = props;
        const class__Name = `${className} next__arrow`
        return (
          <div
            className={class__Name}
    
            style={{ ...style }}
            onClick={onClick}
          ><FaAnglesRight/></div>
        );
    
  
}

export default NextArrow
