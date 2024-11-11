
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { message, Modal } from 'antd';
import axios from 'axios';


/* --=======================================
Start Import React Icons Here 
========================================-- */
import { FaUserEdit } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

/* --=======================================
Start Import React Icons Here 
========================================-- */

/* --=======================================
Start Import Components Here 
========================================-- */
import Layout from '../../../components/Layout'
import PageBannar from "../../../components/page__bannar/PageBannar";
import AdminDashboardMenu from '../../../components/admin__compoenent/admin__dashboard__menu/AdminDashboardMenu';
import CategoryList from '../../../components/admin__compoenent/category__list/CategoryList';
import CreateCategoryForm from '../../../components/admin__compoenent/create__category__form/CreateCategoryForm';
/* --=======================================
    End Import Components Here 
========================================-- */

const CreateCategory = () => {

  /* ==== Start useState Decleration Here ==== */
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const [updatedName, setUpdatedName] = useState("");
  /* ==== End useState Decleration Here ==== */


  /* ====== Start Create Category Handle Submit Here ====== */
  const createCategoryHandleSubmit = async(e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post(`${import.meta.env.VITE_REACT_APP_API}/api/v1/category/create-category`,{name});

      if(data?.success){
        message?.success(`${data.category.name} is created successfully`)
        getAllCategories();
      }else{
        message?.error(data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something weng wrong in creating category")
    }
  }
/* ====== End Create Category Handle Submit Here ====== */

  /* ====== Start Update Category Handle Submit Here ====== */
  const updateCategoryHandleSubmit = async(e) => {
    e.preventDefault();
    try {
      const {data} = await axios.put(`${import.meta.env.VITE_REACT_APP_API}/api/v1/category/update-category/${selected._id}`,{name : updatedName});

      if(data?.success){
        message?.success(`${data.category.name} is updated successfully`)
        setSelected(null);
        setUpdatedName("");
        setOpen(false);
        getAllCategories();
      }else{
        message?.error(data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something weng wrong in creating category")
    }
  }
  /* ====== End Update Category Handle Submit Here ====== */


  /* ====== Start Update Category Handle Submit Here ====== */
  const deleteCategoryHandleSubmit = async(cid) => {
    try {
      const {data} = await axios.delete(`${import.meta.env.VITE_REACT_APP_API}/api/v1/category/delete-category/${cid}`);
      console.log(data);
      if(data?.success){
        message?.success(data.message)
        getAllCategories();
      }else{
        message?.error(data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something weng wrong in creating category")
    }
  }
    /* ====== End Update Category Handle Submit Here ====== */
  


  /* ==== Start Get all categories Here ===== */
  const getAllCategories = async () => {
    try {
      const {data} = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/api/v1/category/get-all-category`);

      if(data?.success){
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong while getting categories");
    }
  }
  /* ==== End Get all categories Here ===== */


  /* ===== Start UseEffect for calling inital time here ===== */
  useEffect(() => {
    getAllCategories();
  },[])
  /* ===== End UseEffect for call ing inital time here ===== */
  return (
    <Layout title={"Category"}>
      <div id="admin__create__category__page">

        { /* ========= Start Page Bannar Section Here ========= */}
          <PageBannar title={"Category"}/>
        { /* ========= End Page Bannar Section Here ========= */}



        { /* ========= Start Page Bannar Section Here ========= */}
          <div id="create__category__section">
            <div className="sec__mar">
              <div className="container">
                <div className="row justify-content-between g-0">
                  <div className="col-12 col-md-4 col-lg-3">
                      <AdminDashboardMenu/>
                  </div>
                  <div className="col-12 col-md-8 col-lg-9">
                    <div id="category__content__box">
                      <h4>Category</h4>
                      <CreateCategoryForm title={"Create"} CategoryHandleSubmit={createCategoryHandleSubmit} value={name} setValue={setName}/>

                      <div id="category__list__section">
                        <h5>All Categories</h5>
                        <CategoryList categories={categories} setOpen={setOpen} setSelected={setSelected} setUpdatedName={setUpdatedName} deleteCategoryHandleSubmit={deleteCategoryHandleSubmit}/>
                      </div>

                      <div id="update__category__model">
                        <Modal className='modal__box' closeIcon={<span className='modal__close'><span className='modal__close__btn' ><IoCloseSharp/></span></span>} onCancel={() => setOpen(false)} footer={null} open={open}>
                          <CreateCategoryForm title={"Update"} value={updatedName} setValue={setUpdatedName} CategoryHandleSubmit={updateCategoryHandleSubmit} />
                        </Modal>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        { /* ========= End Page Bannar Section Here ========= */}
      </div>
    </Layout>
  )
}

export default CreateCategory
