import React from 'react'
import { Link } from 'react-router-dom';

/* ========================================
      Start Import React Icons Here 
 ========================================*/
import { FaUser } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaShopify } from "react-icons/fa6";
import { FaFirstOrder } from "react-icons/fa6";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdLocalShipping } from "react-icons/md";
import { FaQuestion } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoCameraSharp } from "react-icons/io5";

/* ========================================
      End Import React Icons Here 
 ========================================*/


/* ========================================
      Start Import Images Here 
 ========================================*/
 import profile__img from "../../../assets/home__page/profile__img.webp"
/* ========================================
      End Import Images Here 
 ========================================*/


 const user__menu = [
  {
    name : "Dashboard",
    path : "/dashboard/user",
    icon : MdDashboard,
  },
  {
    name: "Profile",
    path : "/dashboard/user/profile",
    icon : FaUser,
  },
  {
    name : "Orders",
    path : "/dashboard/user/orders",
    icon : FaShopify,
  },
  {
    name : "Shipping",
    path : "/dashboard/user/shipping",
    icon : MdLocalShipping,
  },
  {
    name : "Logout",
    path : "#",
    icon : RiLogoutCircleLine,
  }
 ];

const UserDashboardMenu = () => {
  return (
    <div id='user__dashboard__menu'>
      <div id="dashboard__box">
        <div id="profile__box">
          <div id="img__box">
            <img src={profile__img} alt="profile__image" />
            <div id="image__upload__box">
              <form action="">
                <label htmlFor="upload__img"><IoCameraSharp/></label>
                <input type="file" id='upload__img' hidden />
              </form>
            </div>
          </div>
          <div id="profile__info">
              <h6>Maria Smith</h6>
              <p className='position'>User</p>
              <p className='visiting'>Last visit 28/10/2024</p>
              <button type="button" className='logout__btn'>Log Out</button>
            </div>
        </div>
        <ul id="user__menu__box">
          {
            user__menu.map((item,i) => (
              <li  key={i}><Link className="menu__item" to={item.path}><i>{<item.icon/>} </i><span>{item.name}</span></Link></li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default UserDashboardMenu
