import React from 'react'
import { Pagination } from 'react-bootstrap'
import { Link } from 'react-router-dom';

/* ========================================
    Start Improt React Icons Here 
======================================== */
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
/* ========================================
    End Improt React Icons Here 
======================================== */


const PagiNation = () => {
  return (
    <div id='pagi__nation'>
        <ul id="pagi__nation__box">
          <li className="pagi__nation__item"><Link className='pagi__nation__link' to={"#"}><FaAnglesLeft/></Link></li>
          <li className="pagi__nation__item"><Link className='pagi__nation__link' to={"#"}>1</Link></li>
          <li className="pagi__nation__item active"><Link className='pagi__nation__link' to={"#"}>2</Link></li>
          <li className="pagi__nation__item"><Link className='pagi__nation__link' to={"#"}>3</Link></li>
          <li className="pagi__nation__item"><Link className='pagi__nation__link' to={"#"}>4</Link></li>
          <li className="pagi__nation__item"><Link className='pagi__nation__link' to={"#"}><FaAnglesRight/></Link></li>
        </ul>      
    </div>
  )
}

export default PagiNation
