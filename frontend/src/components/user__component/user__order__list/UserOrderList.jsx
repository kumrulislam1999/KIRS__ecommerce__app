import React from 'react'
import { Link } from 'react-router-dom'


/* =====================================
    Start Import React Icons Here
===================================== */
import { BiSolidShow } from "react-icons/bi";
import { RiEdit2Fill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
/* =====================================
    End Import React Icons Here
===================================== */




const UserOrdersList = () => {
  return (
    <div id='user__orderslist__box'>
      <div id="order__list">
        <table className="table__box">
          <thead className="table__head">
            <tr>
              <th>
                <h6>Order ID</h6>
              </th>
              <th>
                <h6>Order Date</h6>
              </th>
              <th>
                <h6>Delivery Date</h6>
              </th>
              <th>
                <h6>Customer</h6>
              </th>
              <th>
                <h6>Items</h6>
              </th>
              <th>
                <h6>Product Name</h6>
              </th>
              <th>
                <h6>Price</h6>
              </th>
              <th>
                <h6>Payment Status</h6>
              </th>
              <th>
                <h6>Order Status</h6>
              </th>
              <th>
                <h6>Actions</h6>
              </th>
            </tr>
          </thead>
          <tbody className="table__body">
            <tr>
              <td>
                <p className='order__id'>001</p>
              </td>
              <td>
                <p className='order__date'>10/08/2024</p>
              </td>
              <td>
                <p className='delivery__date'>10/08/2024</p>
              </td>
              <td>
                <p>Kumrul Islam</p>
              </td>
              <td>
                <p>3</p>
              </td>
              <td>
                <div id="product__box">
                  <p>Black Jacket</p>
                  <p>T-Shirk</p>
                  <p>Head Caps</p>
                </div>
              </td>
              <td>
                <p className='price'>$800</p>
              </td>
              <td>
                <p className='paid' id='payment__box'>PAID</p>
              </td>
              <td>
                <p className='delivered' id='delivery__box'>DELIVERIED</p>
              </td>
              <td>
                <div id="action__box">
                  <Link className='show__btn' to={"/order-details"}><BiSolidShow/></Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <p className='order__id'>001</p>
              </td>
              <td>
                <p className='order__date'>10/08/2024</p>
              </td>
              <td>
                <p className='delivery__date'>10/08/2024</p>
              </td>
              <td>
                <p>Kumrul Islam</p>
              </td>
              <td>
                <p>3</p>
              </td>
              <td>
                <div id="product__box">
                  <p>Black Jacket</p>
                  <p>T-Shirk</p>
                  <p>Head Caps</p>
                </div>
              </td>
              <td>
                <p className='price'>$800</p>
              </td>
              <td>
                <p className='unpaid' id='payment__box'>UNPAID</p>
              </td>
              <td>
                <p className='cancelled' id='delivery__box'>CANCELLED</p>
              </td>
              <td>
                <div id="action__box">
                  <Link className='show__btn' to={"/order-details"}><BiSolidShow/></Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <p className='order__id'>001</p>
              </td>
              <td>
                <p className='order__date'>10/08/2024</p>
              </td>
              <td>
                <p className='delivery__date'>10/08/2024</p>
              </td>
              <td>
                <p>Kumrul Islam</p>
              </td>
              <td>
                <p>3</p>
              </td>
              <td>
                <div id="product__box">
                  <p>Black Jacket</p>
                  <p>T-Shirk</p>
                  <p>Head Caps</p>
                </div>
              </td>
              <td>
                <p className='price'>$800</p>
              </td>
              <td>
                <p className='refund' id='payment__box'>REFUND</p>
              </td>
              <td>
                <p className='pickups' id='delivery__box'>PICKUPS</p>
              </td>
              <td>
                <div id="action__box">
                <Link className='show__btn' to={"/order-details"}><BiSolidShow/></Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <p className='order__id'>001</p>
              </td>
              <td>
                <p className='order__date'>10/08/2024</p>
              </td>
              <td>
                <p className='delivery__date'>10/08/2024</p>
              </td>
              <td>
                <p>Kumrul Islam</p>
              </td>
              <td>
                <p>3</p>
              </td>
              <td>
                <div id="product__box">
                  <p>Black Jacket</p>
                  <p>T-Shirk</p>
                  <p>Head Caps</p>
                </div>
              </td>
              <td>
                <p className='price'>$800</p>
              </td>
              <td>
                <p className='unpaid' id='payment__box'>UNPAID</p>
              </td>
              <td>
                <p className='returns' id='delivery__box'>RETURNS</p>
              </td>
              <td>
                <div id="action__box">
                  <Link className='show__btn' to={"/order-details"}><BiSolidShow/></Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserOrdersList
