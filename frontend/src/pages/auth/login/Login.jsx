import React, { useState } from 'react'

import {message} from "antd"
import axios from "axios";
import { useNavigate,useLocation } from 'react-router-dom';

import { useAuth } from '../../../context/auth';


/* --=======================================
Start Import Components Here 
========================================-- */
import Layout from '../../../components/Layout'
import PageBannar from '../../../components/page__bannar/PageBannar'
import { Link } from 'react-router-dom'
/* --=======================================
    End Import Components Here 
========================================-- */

/* --=======================================
    Start Import React Icons Here 
========================================-- */
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
/* --=======================================
    End Import React Icons Here 
========================================-- */

import login__bg__img from "../../../assets/home__page/login-bg.jpg";

const Login = () => {

  /* === Start useStatue Declear Here === */
  const [email, setEmail] = useState("");
  const [ password, setPassword] = useState("");
  /* === End useStatue Declear Here === */

  
  /* ==== Start Auth Context Hooq ==== */
  const [auth, setAuth] = useAuth();
  /* ==== End Auth Context Hooq ==== */

  /* ==== Start Hooqs Here ===== */
  const navigate = useNavigate();
  const location = useLocation();
  /* ==== End Hooqs Here ==== */

  /* ====== Start handleLoginSubmit Here ====== */
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post(`${import.meta.env.VITE_REACT_APP_API}/api/v1/auth/login`,{password,email});

      if(data?.success){
        message.success(data?.message);
        setAuth({
          ...auth,
          user : data.user,
          token : data.token,
        });
        localStorage.setItem("auth", JSON.stringify(data));
        navigate(location.state || "/");
      }else{
        message.error(data?.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something Weng Wrong")
    }
  }
  /* ====== End handleLoginSubmit Submit ======  */

  return (
    <Layout title={"Login"}>
      <div id="login__page">
        {/* ========== Start Page Bannar Here =========== */}
        <PageBannar title={"Login"}/>
        {/* ========== End Page Bannar Here =========== */}


        
        {/* ========== Start Login Section Here =========== */}
        <div id="login__section">
          <div className="sec__mar">
            <div className="container">
              <div id='login__box'>
                <div className="row justify-content-center  g-0">
                  <div className="col-12 col-sm-10 col-md-8 col-lg-6 pad__12">
                    <div id="login__form__box">
                      <h4>Login Form</h4>
                      <form action="" onSubmit={handleLoginSubmit}>
                        <div className="input__group">
                          <label htmlFor="email"><FaUser/></label>
                          <input type="text" id='email' placeholder='Enter Email' name={email} value={email} required onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input__group">
                          <label htmlFor="password"><RiLockPasswordFill/></label>
                          <input type="text" id='password' placeholder='Enter Password' name={password} value={password} required onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div id="btn__box">
                          <Link to={"/forget-password"}>forget Password</Link>
                          <button type="submit" className='login__btn'>Login</button>
                        </div>
                      </form>
                      <p>don't Have an account? please, <Link to={"/register"}>Register</Link> here</p>
                    </div>
                  </div>
                  <div className="col-12 col-sm-10 col-md-8 col-lg-6 pad__12">
                    <div id="content__box">
                        <h3>KIRS</h3>
                        <h5>Welcome To KIRS</h5>
                        <div id="social__medial">
                          <Link to={"https://www.facebook.com/"}><FaFacebookF/></Link>
                          <Link to={"https://www.facebook.com/"}><FaTwitter/></Link>
                          <Link to={"https://www.facebook.com/"}><FaGoogle/></Link>
                          <Link to={"https://www.facebook.com/"}><FaInstagram/></Link>
                          <Link to={"https://www.facebook.com/"}><FaLinkedinIn/></Link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ========== End Login Section Here =========== */}

      </div>
    </Layout>
  )
}

export default Login
