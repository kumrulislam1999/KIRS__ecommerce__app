import React, {useState} from 'react'
import {message} from "antd"
import axios from "axios";
import { useNavigate } from 'react-router-dom';






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
import { FaUserEdit } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdQuestionAnswer } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

/* --=======================================
    End Import React Icons Here 
========================================-- */


const Register = () => {


  /* ===== Start useState Declearatio Here ===== */
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const [username, setUserName] = useState("");
  /* ===== End useState Declearation Here =====  */


  /* ==== Start Hooqs Here ===== */
  const navigate = useNavigate();
  /* ==== End Hooqs Here ==== */

  /* ====== Start handleRegisterSubmit Here ====== */
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post(`${import.meta.env.VITE_REACT_APP_API}/api/v1/auth/register`,{name,email,phone,password,address,answer,username});

      if(data?.success){
        message.success(data?.message);
        navigate("/login");
      }else{
        message.error(data?.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something Weng Wrong")
    }
  }
  /* ====== End handleRegisterSubmit Submit ======  */
  return (
    <Layout title={"Register"}>
        <div id="register__page">
          
        {/* ========== Start Page Bannar Here =========== */}
        <PageBannar title={"Register"}/>
        {/* ========== End Page Bannar Here =========== */}

        {/* ========== Start Register Section Here =========== */}
        <div id="register__section">
          <div className="sec__mar">
            <div className="container">
            <div id='register__box'>
                <div className="row  justify-content-center g-0">
                  <div className="col-12 col-sm-10 col-md-8 col-lg-5 pad__12">
                    <div id="register__form__box">
                      <h4>Register Form</h4>
                      <form action="" onSubmit={handleRegisterSubmit}>
                        <div className="input__group">
                          <label htmlFor="name"><FaUserEdit/></label>
                          <input type="text" id='name' placeholder='Your Name' name='name' value={name} required onChange={(e) => {setName(e.target.value);}} />
                        </div>
                        <div className="input__group">
                          <label htmlFor="email"><FaEnvelope/></label>
                          <input type="text" id='email' placeholder='Your Email' name='email' value={email} required onChange={(e) => {setEmail(e.target.value);}}/>
                        </div>
                        <div className="input__group">
                          <label htmlFor="username"><FaUser/></label>
                          <input type="text" id='username' placeholder='Your Username' name='username' value={username} required onChange={(e) => {setUserName(e.target.value);}}/>
                        </div>
                        <div className="input__group">
                          <label htmlFor="phone"><FaPhone/></label>
                          <input type="number" id='phone' placeholder='Your Phone' name='phone' value={phone} required onChange={(e) => {setPhone(e.target.value);}}/>
                        </div>
                        <div className="input__group">
                          <label htmlFor="password"><RiLockPasswordFill/></label>
                          <input type="text" id='password' placeholder='Your Password' name='password' value={password} required  onChange={(e) => {setPassword(e.target.value);}}/>
                        </div>
                        <div className="input__group">
                          <label htmlFor="address"><MdLocationOn/></label>
                          <input type="text" id='address' placeholder='Your Address' name='address' value={address} required  onChange={(e) => {setAddress(e.target.value);}}/>
                        </div>
                        <div className="input__group">
                          <label htmlFor="answer"><MdQuestionAnswer/></label>
                          <input type="text" id='answer' placeholder='Your Favorite Answer' name='answer' value={answer} required  onChange={(e) => {setAnswer(e.target.value);}}/>
                        </div>
                        <button type="submit" className='register__btn'>Register</button>
                      </form>
                      <p> Have an account? please, <Link to={"/login"}>login</Link> here</p>
                    </div>
                  </div>
                  <div className="col-12 col-sm-10 col-md-8 col-lg-5 pad__12">
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
        {/* ========== End Register Section Here =========== */}
        </div>
    </Layout>
  )
}

export default Register
