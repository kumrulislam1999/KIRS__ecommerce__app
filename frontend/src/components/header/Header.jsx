
import React, { useEffect, useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import {message} from "antd"


import {useAuth} from "../../context/auth";


/* =====================================
    Start import Bootstrap Here
====================================== */
import { Dropdown } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { Form } from 'react-bootstrap';
/* =====================================
    End import Bootstrap Here
====================================== */


/* =====================================
    Start import React Icons Here
====================================== */
import { FaSearch, FaRegHeart, FaRegUser,FaRegEnvelope,FaUserEdit,FaCamera,FaRegRegistered ,FaFacebookF, FaInstagram , FaLinkedinIn   } from "react-icons/fa";
import { IoMdCart,IoMdClose, IoIosNotifications,IoMdSettings,IoMdHelp, IoMdNotifications  } from "react-icons/io";
import { MdDashboard , MdOutlineManageHistory} from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";
import { SiShopify } from "react-icons/si";
import { RiLogoutCircleLine, RiTwitterXFill  } from "react-icons/ri";




/* =====================================
    End import React Icons Here
====================================== */



/* =====================================
    Start import Images Here
====================================== */
import logo__img from "../../assets/home__page/logo1.png";
import user__img from "../../assets/home__page/userprofile.png"
/* =====================================
    End import Images Here
====================================== */

const icons__menu__notlogin =[
  { path: "/cart",
    icon: IoMdCart,
    name: "Cart"
  },
  { path: "/wishlist",
    icon: FaRegHeart,
    name: "Wishlist"
  },
  {
    path : "/notifications",
    icon : IoMdNotifications,
    name : "Notification"
  },
  { path: "/login",
    icon: AiOutlineLogin,
    name: "Login"
  },
  { path: "/register",
    icon: FaRegRegistered,
    name: "Register"
  },
  
] ;
const icons__menu__login =[
  { path: "/cart",
    icon: IoMdCart,
    name: "Cart"
  },
  { path: "/wishlist",
    icon: FaRegHeart,
    name: "Wishlist"
  },
  {
    path : "/notifications",
    icon : IoMdNotifications,
    name : "Notification"
  },
  {
    path : "/login",
    icon : RiLogoutCircleLine,
    name : "Logout",
  }
  
] ;
const primary__menu = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/contact",
    name: "Contact",
  },
  {
    path: "/blog",
    name: "Blog",
  },
  {
    path: "/shop",
    name: "Shop",
  }
];
const dashboard__menu =[
  { path: "profile",
    icon: FaRegUser,
    name: "Profile"
  },
  { path: "update-profile",
    icon: FaUserEdit,
    name: "Udpate Profile"
  },
  { path: "history",
    icon: MdOutlineManageHistory,
    name: "Manage History"
  },
  { path: "settings",
    icon: IoMdSettings,
    name: "Settings"
  },
  { path: "orders",
    icon: SiShopify,
    name: "Orders"
  },
  { path: "wishlist",
    icon: FaRegHeart,
    name: "Wishlist"
  },
  { path: "notification",
    icon: IoIosNotifications,
    name: "Notifications"
  },
  { path: "messages",
    icon: FaRegEnvelope,
    name: "Message"
  },
  { path: "help",
    icon: IoMdHelp,
    name: "Help"
  },
  
] ;
const category__menu = [
  {
    name : "Boy's Collection",
    path: "boy's-collection",
    slug: "boys-collection"
  },
  {
    name : "Girl's Collection",
    path: "girl's-collection",
    slug: "girls-collection"
  },
  {
    name : "Kid's Collection",
    path: "kid's-collection",
    slug: "kids-collection"
  },
  {
    name : "Women's Collection",
    path: "women's-collection",
    slug: "womens-collection"
  },
  {
    name : "Men's Collection",
    path: "men's-collection",
    slug: "mens-collection"
  }
];
const quick__link = [
  {
    name : "My Account",
    path : "/dashboard"
  },
  {
    name : "Cart",
    path : "/cart",
  },
  {
    name : "Wishlist",
    path : "/wishlist",
  },
  {
    name : "Login",
    path : "/login",
  },
  {
    name : "Contact",
    path : "/contact"
  }
]
const social__media = [
  {
    icon : FaFacebookF,
    path : "https://www.facebook.com/"
  },
  {
    icon : RiTwitterXFill,
    path : "https://www.twitter.com/"
  },
  {
    icon : FaInstagram,
    path : "https://www.instagram.com/"
  },
  {
    icon : FaLinkedinIn,
    path : "https://www.LinkedIn.com/"
  }
]




const Header = () => {

  /* =========================================
      	Start UseState Hooks Declaration Here
  ========================================= */
  const [search, setSearch] = useState();
  const [width, setWidth] = useState(window.innerWidth);

  const [toggle, setToggle] = useState(false);
/* =========================================
      	End UseState Hooks Declaration Here
  ========================================= */

  /* ==== Start Auth Context Hooq ==== */
  const [auth, setAuth] = useAuth();
  /* ==== End Auth Context Hooq ==== */



  /* =========================================
      	Start Window Resize Handler Here
  ========================================= */
  useEffect (() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
  })
  /* =========================================
      	Start Window Resize Handler Here
  ========================================= */

  /* =========================================
      	Start Handle Search Submit Here
  ========================================= */
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  }
  /* =========================================
      	End Handle Search Submit Here
  ========================================= */


    /* =========================================
      	Start Handle Search Submit Here
  ========================================= */
  const handleLogoutClick = (e) => {
    setAuth({
      ...auth,
      user : null,
      token : ""
    });
    localStorage.removeItem("auth");
    message.success("Logout Successfully");
  }
  /* =========================================
      	End Handle Search Submit Here
  ========================================= */



  return (
    <div id="header__section" >
      <div id='header__lg' >
        <div id="header__top">
          <div className="container ">
            <div className="row align-items-center justify-content-between g-0">
              {
                (width > 768) && (<>
              <div className=" col-md-5 col-lg-4" id='top__left'>
                <p className='text__content'>FREE Returns. Standard Shipping Orders $99+</p>
              </div>
                </>)
              }
              <div className="col-12 col-md-7 col-lg-8" id='top__right'>
                {
                  (width > 992) && (<>
                      <div id="important__menu__box">
                  <ul className='quick__menu'>
                    {
                      quick__link.map((item,i) => (
                        <li className='quick__item' key={i}><Link to={item.path} className='quick__link'>{item.name}</Link></li>
                      ))
                    }
                  </ul>
                </div>
                  </>) 
                }
                <div id="currency__lang__box">
                  <ul id="currency__lang">
                    <li className='currency__box'>
                    <Form.Select bg="none" className='currency__select'>
                      <option className='currency__item' value={""}>Currency</option>
                      <option className='currency__item' value="usd">USD</option>
                      <option className='currency__item' value="usd">Rupe</option>
                      <option className='currency__item' value="usd">BDT</option>
                      <option className='currency__item' value="usd">Robble</option>
                      <option className='currency__item' value="usd">UAD</option>
                    </Form.Select>
                    </li>
                    <li className='language__box'>
                    <Form.Select bg="none" className='language__select'>
                      <option className='language__item' value={""}>Language</option>
                      <option className='language__item' value="usd">Arabic</option>
                      <option className='language__item' value="usd">English</option>
                      <option className='language__item' value="usd">Bangla</option>
                      <option className='language__item' value="usd">Hindi</option>
                      <option className='language__item' value="usd">Chinies</option>
                    </Form.Select>
                    </li>
                  </ul>
                </div>
                <div id="social__media__box">
                    <ul id="social__media">
                      {
                        social__media.map((item,i) => (
                          <li className="social__item" key={i}><Link to={item.path}>{<item.icon/>}</Link></li>
                        ))
                      }
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='header__middle'>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-6 col-sm-3" id='middle__logo__box'>
                        <Link to={"/"}><img src={logo__img} alt='company logo'/></Link>
                    </div>
                    {
                        ( width > 768 ) ? (
                        <>
                            <div className="col-md-5 col-lg-4 col-xl-3" id='middle__search__box'>
                                    <form action="" onSubmit={handleSearchSubmit}>
                                        <div id="form__search">
                                            <input type="text" placeholder='Search Hehe .....' name={search} required onChange={(e) => setSearch(e.target.value)}/>
                                            <button type='submit' className='search__btn'>Search</button>
                                        </div>
                                    </form>
                            </div>
                            <div className="col-md-3" id='middle__right__menu'>
                                <ul className='right__menu'>
                                    {
                                    
                                    !auth.user ? (<>
                                        {icons__menu__notlogin.map((item,i) => (
                                          <li className='right__menu__item' key={i}><NavLink to={item.path}>{<item.icon/>}</NavLink></li>
                                        ))}
                                        </>)
                                     : (<>
                                        {icons__menu__login.map((item,i) => (
                                           <li className='right__menu__item' key={i}><NavLink to={item.path} onClick={item.name === "Logout"  ? handleLogoutClick : "" }>{<item.icon/>}</NavLink></li>
                                         ))}
                                        </>) 
                                    }
                                </ul>
                            </div>
                        </>
                        ) : (
                          (width > 576 && width < 768) ? (
                            <>
                            <div className="col-6" id='middle__search__box'>
                                    <form action="">
                                        <div id="form__search">
                                            <input type="text" placeholder='Search Hehe .....' required/>
                                            <button type='submit' className='search__btn'>Search</button>
                                        </div>
                                    </form>
                            </div>
                            <div className='col-2' id='middle__nav__toggle__box'><button id='nav__toggle__btn' type='button' onClick={() => setToggle(!toggle)}><MdDashboard/></button></div>
                            </>
                          )  :
                        (<>
                            <div className='col-6' id='middle__nav__toggle__box'><button id='nav__toggle__btn' type='button' onClick={() => setToggle(!toggle)}><MdDashboard/></button></div>
                        </>))
                    }
                </div>
            </div>
        </div>
        {
          (width  > 576) && (<>
          <div id="header__bottom">
            <div className="container">
                <div className="row align-items-center justify-content-between g-0">
                    
                    {
                        ( width > 300) ? (
                      <>
                        <div className=" col-9 col-md-6" id='bottom__menu__box'>
                              <ul className='primary__menu'>
                                {
                                    primary__menu.map((item,i) => (
                                    <li className='primary__menu__item' key={i}><Link to={item.path}>{item.name}</Link></li>
                                    ))
                                }
                              </ul>
                        </div>
                        <div className="col-2 col-md-3" id='bottom__profile__box'>
                              <Dropdown id='dashboard__box'>
                                <Dropdown.Toggle variant="none" id="profile__btn">
                                  <FaRegUser/>
                                </Dropdown.Toggle>                                           
                                <Dropdown.Menu id='dropdown__item__menu'>
                                  <div id="dropdwon__menu__scroll">
                                    <div className='dropdown__profile__title'>
                                      <div className='img__box'>
                                          <img src={user__img} alt="user profile avarta" />
                                          <div id='avarta__box'>
                                            <label htmlFor="upload__img"><FaCamera/></label>
                                            <input type="file" id='upload__img' alt='upload avarta' hidden/>
                                          </div>
                                      </div>
                                      <div className="text__content">
                                      
                                        <h6 className='user__name'>{auth?.user ? auth.user.name : "User"}</h6>
                                        <p className='user__email'>{auth?.user ? auth.user.email : "user@gmail.com"}</p>
                                      </div>
                                    </div>
                                      
                                    {
                                      dashboard__menu.map((item, i) => (
                                        <Dropdown.Item className='dropdown__item' key={i} href={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}/${item.path}`}><span className='item__display'><i>{<item.icon/>}</i><span className='display__name'>{item.name}</span></span><Badge pill bg='none' className='badge__box'>4</Badge></Dropdown.Item>
                                      ))
                                    }
                                      <Dropdown.Item className='dropdown__item' href='/login' onClick={handleLogoutClick}><span className='item__display'><i>{<RiLogoutCircleLine/>}</i><span className='display__name'>Logout</span></span></Dropdown.Item>
                                    </div>
                                </Dropdown.Menu>
                              </Dropdown>
                        </div>
                      </>
                        ) : ("")
                    }
                    
            
                </div>
            </div>
        </div>
          </>)
        }
        
      </div>
      <div id="header__sidebar" className={toggle ? "active" : ""}>
        <div id="header__sidebar__top">
          <Link to={"/"} className='sidebar__logo'><img src={logo__img} alt='header sidebar logo'/></Link>
          <button className='close__btn' type='button' onClick={() => setToggle(!toggle)}><IoMdClose/></button>
        </div>
        <div id='sidebar__content'>
          <div id="header__sidebar__middle">
            <div id="form__search">
                <input type="text" placeholder='Search Hehe .....' required/>
                <button type='submit' className='search__btn'>Search</button>
            </div>
            <ul id="header__sidebar__menu">
              {
                primary__menu.map((item, i) => (
                  <li key={i} className='primary__sidebar__item'><NavLink to={item.path}>{item.name}</NavLink></li>
                ))
              }
            </ul>
          </div>
          <div id="header__sidebar__bottom">
            <ul id="header__sidebar_dashboard">
              {
                !auth.user ? (<>
                    {icons__menu__notlogin.map((item,i) => (
                      <li className='dashboard__sidebar__item' key={i}><NavLink to={item.path} ><span className='dashboard__item'><i>{<item.icon/>}</i><span className='name'>{item.name}</span></span><span className="badge text-bg-secondary item__badge">4</span></NavLink></li>
                      ))
                    }
                </>) : (<>
                    {icons__menu__login.map((item,i) => (
                      <li className='dashboard__sidebar__item' key={i}><NavLink to={item.path} onClick={item.name === "Logout"  ? handleLogoutClick : "" } ><span className='dashboard__item'><i>{<item.icon/>}</i><span className='name'>{item.name}</span></span><span className="badge text-bg-secondary item__badge">4</span></NavLink></li>
                      ))
                    }
                </>)
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
