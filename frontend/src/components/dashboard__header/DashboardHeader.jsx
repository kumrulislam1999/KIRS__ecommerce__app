import React from 'react'



/* ========================================
    Start Import React Icons Here
======================================== */
import { MdOutlineDehaze } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";

/* ========================================
    End Import React Icons Here
======================================== */



const DashboardHeader = () => {
  return (
    <div id='dashboard__header'>
        <div id="dashboard__header__box">
            <button type="button" className='toggle__btn'><MdOutlineDehaze/></button>
            <div id="form__search">
                <input type="text" placeholder='Search Hehe .....' required/>
                <button type='submit' className='search__btn'>Search</button>
            </div>
        </div>
    </div>
  )
}

export default DashboardHeader
