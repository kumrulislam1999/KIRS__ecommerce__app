import React,{useState} from 'react'
import { message } from 'antd'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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
import { FaUser,FaUserEdit,FaEnvelope, FaPhone } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdQuestionAnswer } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";


/* --=======================================
    End Import React Icons Here 
========================================-- */

const ForgetPassword = () => {
  /* === Start useStatue Declear Here === */
  const [email, setEmail] = useState("");
  const [ answer, setAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  /* === End useStatue Declear Here === */

  /* ==== Start Custom Hooks Here ==== */
  const navigate = useNavigate();
  /* ==== End Custom Hooks Here ==== */

  const handleForgetPasswordSubmit = async(e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post(`${import.meta.env.VITE_REACT_APP_API}/api/v1/auth/forget-password`,{email, answer, newPassword, confirmPassword});
      if(data?.success){
        message.success(data?.message);
      }else{
        message.error(data?.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something Went Wrong");
    }
  }

  return (
    <Layout title={"Forget Password"}>
      <div id="forget__password__page">
        {/* ========== Start Page Bannar Here =========== */}
        <PageBannar title={"Forget Password"}/>
        {/* ========== End Page Bannar Here =========== */}

        {/* ========== Start Register Section Here =========== */}
        <div id="forget__password__section">
          <div className="sec__mar">
            <div className="container">
              <div id='forget__box'>
                <div className="row align-items-center justify-content-center g-0">
                  <div className="col-12 col-md-8 col-lg-5">
                    <div id="forget__form__box">
                      <h4>Reset Password</h4>
                      <form action="" onSubmit={handleForgetPasswordSubmit}>
                        <div className="input__group">
                          <label htmlFor="email"><FaEnvelope/></label>
                          <input type="text" id='email' placeholder='Your Email' name='email' value={email} required  onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="input__group">
                          <label htmlFor="answer"><MdQuestionAnswer/></label>
                          <input type="text" id='answer' placeholder='Your Favorite Answer' name='answer' value={answer} required  onChange={(e) => setAnswer(e.target.value)} />
                        </div>
                        <div className="input__group">
                          <label htmlFor="new__password"><RiLockPasswordFill/></label>
                          <input type="text" id='new__password' placeholder='New Password' name='new__password' value={newPassword} required  onChange={(e) => setNewPassword(e.target.value)} />
                        </div>
                        <div className="input__group">
                          <label htmlFor="confirm__password"><TbPasswordFingerprint/></label>
                          <input type="text" id='confirm__password' placeholder='Confirm Password' name='confirm__password' value={confirmPassword} required  onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        <button type="submit" className='forget__btn'>Reset</button>
                      </form>
                      <p> remember password ? <Link to={"/login"}>login</Link> by password</p>
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

export default ForgetPassword
