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




const AdminOrdersList = () => {
  return (
    <div id='admin__orderslist__box'>
      <div id="order__list">
        <table className="table__box">
          <thead className="table__head">
            <tr>
              <th>
                <h6>Order ID</h6>
              </th>
              <th>
                <h6>Created At</h6>
              </th>
              <th>
                <h6>Customer</h6>
              </th>
              <th>
                <h6>Items</h6>
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
                <p>10/08/2024</p>
              </td>
              <td>
                <p>Kumrul Islam</p>
              </td>
              <td>
                <p>3</p>
              </td>
              <td>
                <p>$800</p>
              </td>
              <td>
                <select name="" id="payment__box" className='paid'>
                  <option value="paid">Paid</option>
                  <option value="unpaid">Unpaid</option>
                  <option value="refund">Refund</option>
                </select>
              </td>
              <td>
                <select name="" id="delivery__box" className='inprogress'>
                  <option value="delivered">DELIVERIED</option>
                  <option value="pending">PENDING</option>
                  <option value="cancelled">CANCELLED</option>
                  <option value="returns">RETURNS</option>
                  <option value="inprogress">INPROGRESS</option>
                  <option value="pickups">PICKUPS</option>
                </select>
              </td>
              <td>
                <div id="action__box">
                  <Link className='show__btn'><BiSolidShow/></Link>
                  <Link className='edit__btn'><RiEdit2Fill/></Link>
                  <Link className='delete__btn'><FaTrash/></Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <p className='order__id'>001</p>
              </td>
              <td>
                <p>10/08/2024</p>
              </td>
              <td>
                <p>Kumrul Islam</p>
              </td>
              <td>
                <p>3</p>
              </td>
              <td>
                <p>$800</p>
              </td>
              <td>
                <select name="" id="payment__box" className='paid'>
                  <option value="paid">Paid</option>
                  <option value="unpaid">Unpaid</option>
                  <option value="refund">Refund</option>
                </select>
              </td>
              <td>
                <select name="" id="delivery__box" className='inprogress'>
                  <option value="delivered">DELIVERIED</option>
                  <option value="pending">PENDING</option>
                  <option value="cancelled">CANCELLED</option>
                  <option value="returns">RETURNS</option>
                  <option value="inprogress">INPROGRESS</option>
                  <option value="pickups">PICKUPS</option>
                </select>
              </td>
              <td>
                <div id="action__box">
                  <Link className='show__btn'><BiSolidShow/></Link>
                  <Link className='edit__btn'><RiEdit2Fill/></Link>
                  <Link className='delete__btn'><FaTrash/></Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <p className='order__id'>001</p>
              </td>
              <td>
                <p>10/08/2024</p>
              </td>
              <td>
                <p>Kumrul Islam</p>
              </td>
              <td>
                <p>3</p>
              </td>
              <td>
                <p>$800</p>
              </td>
              <td>
                <select name="" id="payment__box" className='paid'>
                  <option value="paid">Paid</option>
                  <option value="unpaid">Unpaid</option>
                  <option value="refund">Refund</option>
                </select>
              </td>
              <td>
                <select name="" id="delivery__box" className='inprogress'>
                  <option value="delivered">DELIVERIED</option>
                  <option value="pending">PENDING</option>
                  <option value="cancelled">CANCELLED</option>
                  <option value="returns">RETURNS</option>
                  <option value="inprogress">INPROGRESS</option>
                  <option value="pickups">PICKUPS</option>
                </select>
              </td>
              <td>
                <div id="action__box">
                  <Link className='show__btn'><BiSolidShow/></Link>
                  <Link className='edit__btn'><RiEdit2Fill/></Link>
                  <Link className='delete__btn'><FaTrash/></Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <p className='order__id'>001</p>
              </td>
              <td>
                <p>10/08/2024</p>
              </td>
              <td>
                <p>Kumrul Islam</p>
              </td>
              <td>
                <p>3</p>
              </td>
              <td>
                <p>$800</p>
              </td>
              <td>
                <select name="" id="payment__box" className='paid'>
                  <option value="paid">Paid</option>
                  <option value="unpaid">Unpaid</option>
                  <option value="refund">Refund</option>
                </select>
              </td>
              <td>
                <select name="" id="delivery__box" className='inprogress'>
                  <option value="delivered">DELIVERIED</option>
                  <option value="pending">PENDING</option>
                  <option value="cancelled">CANCELLED</option>
                  <option value="returns">RETURNS</option>
                  <option value="inprogress">INPROGRESS</option>
                  <option value="pickups">PICKUPS</option>
                </select>
              </td>
              <td>
                <div id="action__box">
                  <Link className='show__btn'><BiSolidShow/></Link>
                  <Link className='edit__btn'><RiEdit2Fill/></Link>
                  <Link className='delete__btn'><FaTrash/></Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminOrdersList
