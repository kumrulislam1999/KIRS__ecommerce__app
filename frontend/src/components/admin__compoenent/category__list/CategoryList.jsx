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



const CategoryList = ({categories, setOpen, setUpdatedName,setSelected,deleteCategoryHandleSubmit}) => {
  return (
    <div id='category__list__box'>
      <div id="category__list">
        <table className="table__box">
          <thead className="table__head">
            <tr>
              <th>
                <h6>ID</h6>
              </th>
              <th>
                <h6>Name</h6>
              </th>
              <th>
                <h6>Slug</h6>
              </th>
              <th>
                <h6>Category ID</h6>
              </th>
              <th>
                <h6>Created At</h6>
              </th>
              <th>
                <h6>Items</h6>
              </th>
              <th>
                <h6>Actions</h6>
              </th>
            </tr>
          </thead>
          <tbody className="table__body">
              
            {categories?.map((c,i) => (
              
            
              <tr key={i}>
                <td>
                  <p className='order__id'>{`${i < 9 ? "0" : ""}${i + 1}`}</p>
                </td>
                <td>
                  <p>{c.name}</p>
                </td>
                <td>
                  <p>{c.slug}</p>
                </td>
                <td>
                  <p>{c._id}</p>
                </td>
                <td>
                  <p>{c.createdAt}</p>
                </td>
                <td>
                  <p>3</p>
                </td>
                <td>
                  <div id="action__box">
                    <Link className='show__btn' to={`/dashboard/admin//category-details/${c._id}`}><BiSolidShow/></Link>
                    <button type='button' className='edit__btn'  onClick={() => {setOpen(true); setUpdatedName(c.name); setSelected(c)}}><RiEdit2Fill/></button>
                    <button type='button' className='delete__btn' onClick={() => deleteCategoryHandleSubmit(c._id)}><FaTrash/></button>
                  </div>
                </td>
              </tr>
              ))
            }  
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CategoryList
