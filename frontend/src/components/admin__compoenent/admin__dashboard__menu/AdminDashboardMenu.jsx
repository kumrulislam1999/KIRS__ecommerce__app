import React from 'react'
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';


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
import { FaProductHunt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { RiEdit2Fill } from "react-icons/ri";
import { IoMdCreate } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { MdCategory } from "react-icons/md";

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
    path : "/dashboard/admin",
    icon : MdDashboard,
  },
  {
    name: "Profile",
    path : "/dashboard/admin/profile",
    icon : FaUser,
  },
  {
    name : "Products",
    path : "/dashboard/admin/all-products",
    icon : FaProductHunt,
  },
  {
    name : "Create Product",
    path : "/dashboard/admin/create-product",
    icon : FaProductHunt,
    eicon : FaPlus
  },
  {
    name : "Create Category",
    path : "/dashboard/admin/create-category",
    icon : MdCategory,
  },
  {
    name : "All Category",
    path : "/dashboard/admin/all-category",
    icon : MdCategory,
    eicon : FaPlus
  },
  {
    name : "All Orders",
    path : "/dashboard/admin/all-orders",
    icon : FaShopify,
    inner__item : [
      {
        name : "All Orders",
        path : "/dashboard/admin/all-orders",
      },
      {
        name : "Cancel Orders",
        path : "/dashboard/admin/cancel-orders",
      },
      {
        name : "Return Orders",
        path : "/dashboard/admin/return-orders",
      },
      {
        name : "Delivery Orders",
        path : "/dashboard/admin/delivery-orders"
      },
      {
        name : "InProgress Orders",
        path : "/dashboard/admin/inprogress-orders",
      },
      {
        name : "Paid Orders",
        path : "/dashboard/admin/paid-orders",
      },
      {
        name : "Unpaid Orders",
        path : "/dashboard/admin/unpaid-orders",
      },
      {
        name : "PicksUp Orders",
        path : "/dashboard/admin/picksup-orders",
      },
      {
        name : "Refund Orders",
        path : "/dashboard/admin/refund-orders",
      }
      
    ]
  },
  {
    name : "Shipping",
    path : "/shipping",
    icon : MdLocalShipping,
  },
  {
    name : "Review",
    path : "/review",
    icon : FaStar,
  },
  {
    name : "Logout",
    path : "#",
    icon : RiLogoutCircleLine,
  }
 ];

const AdminDashboardMenu = () => {
  return (
    <div id='admin__dashboard__menu'>
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
              <p className='position'>Admin</p>
              <p className='visiting'>Last visit 28/10/2024</p>
              <button type="button" className='logout__btn'>Log Out</button>
            </div>
        </div>
        <ul id="admin__menu__box">
          {
            user__menu.map((item,i) => (
              <li  key={i}>
                {item.inner__item ? (
                  <Dropdown id='dorp__down' drop='end'>
                      <Dropdown.Toggle variant="none" className='menu__item dropdown__btn' drop="end">
                      <i>{<item.icon/>} <b className='extra__icon'>{ item.eicon && <item.eicon/>}</b> </i><span>{item.name}</span>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className='drop__down__menu'>
                        {
                          item.inner__item.map((in__item, i) =>(
                            <Dropdown.Item className='menu__item' href={in__item.path} key={i}><Link  to={in__item.path}><span>{in__item.name}</span></Link></Dropdown.Item>
                          ))
                        }
                      </Dropdown.Menu>
                    </Dropdown>
                ) : (
                <Link className="menu__item" to={item.path}><i>{<item.icon/>} <b className='extra__icon'>{ item.eicon && <item.eicon/>}</b> </i><span>{item.name}</span></Link>

                )
              }
                
              
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default AdminDashboardMenu
