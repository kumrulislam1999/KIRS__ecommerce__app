import {useState, useEffect} from 'react';

import { Outlet } from 'react-router-dom';

import axios from "axios";


import { useAuth } from '../../context/auth';
import Preloader from '../preloader/Preloader';



const AdminRoute = () => {
  /* =========================================
      Start UseState Hooks Declaration Here
  ========================================= */
  const [ok, setOk] = useState(false);
  const [auth,setAuth] = useAuth();
  /* =========================================
      	End UseState Hooks Declaration Here
  ========================================= */


  
  /* =========================================
      	Start Protected Auth Calling Here
  ========================================= */
  useEffect(() => {
    const authCheck = async () => {
      const {data} = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/api/v1/auth/admin-auth`);
      if(data?.ok){
        setOk(true);
      }else{
        setOk(false);
      }
    }
    if(auth?.token) authCheck();
  },[auth?.token])
  /* =========================================
      	End Protected Auth Calling Here
  ========================================= */
  return ok ? <Outlet/> : <Preloader path=''/>;
}

export default AdminRoute
