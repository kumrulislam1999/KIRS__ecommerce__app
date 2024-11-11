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




const AdminReturnOrdersList = () => {
  return (
    <div id='admin__return__orderslist__box'>
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
                <h6>Cancel Date</h6>
              </th>
              <th>
                <h6>Price</h6>
              </th>
              <th>
                <h6>Order Status</h6>
              </th>
              <th>
                <h6>Reasons</h6>
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
                <p>01/05/2025</p>
              </td>
              <td>
                <p>$800</p>
              </td>
              <td>
                <p id="delivery__box" className='inprogress'>
                  CANCELLED
                </p>
              </td>
              <td>
                <p>Broken and Not Working</p>
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
                <p>01/05/2025</p>
              </td>
              <td>
                <p>$800</p>
              </td>
              <td>
                <p id="delivery__box" className='inprogress'>
                  CANCELLED
                </p>
              </td>
              <td>
                <p>Broken and Not Working</p>
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
                <p>01/05/2025</p>
              </td>
              <td>
                <p>$800</p>
              </td>
              <td>
                <p id="delivery__box" className='inprogress'>
                  CANCELLED
                </p>
              </td>
              <td>
                <p>Broken and Not Working</p>
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

export default AdminReturnOrdersList
