import React,{useState, useEffect} from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import {Container, Row,Col} from "react-bootstrap"

const Preloader = ({path = "login"}) => {
  /* =========================================
      Start UseState Hooks Declaration Here
  ========================================= */
    const [count, setCount] = useState(3);
    const navigate = useNavigate();
    const location = useLocation();
  /* =========================================
      	End UseState Hooks Declaration Here
  ========================================= */

    /* ===== useEffect for Redirect ===== */
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((preValue) => --preValue);
        }, 1000);
        count === 0 && navigate(`/${path}`,{
          state : location.pathname
        });
        return () => clearInterval(interval);
    },[count, navigate, location, path]);
  return (
    <div id="preloader__box">
        <Container>
            <Row className='align-items-center justify-content-center'>
                <Col sm={12} md={8} lg={6}>
                  <div id="preloader__content">
                    <div className='preloader'>
		                  <div className="loader"><span></span></div>
		                  <div className="loader"><span></span></div>
		                  <div className="loader"><i></i></div>
		                  <div className="loader"><i></i></div>
	                  </div>
                    <h6>Redirecting To You in <span>{count}</span> seconds</h6>
                  </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Preloader
