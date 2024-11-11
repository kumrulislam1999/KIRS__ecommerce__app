import React from 'react'


/* --=======================================
Start Import React Icons Here 
========================================-- */
  import { MdCloudUpload } from "react-icons/md";

/* --=======================================
Start Import React Icons Here 
========================================-- */

/* --=======================================
Start Import Components Here 
========================================-- */
import Layout from '../../../components/Layout'
import PageBannar from "../../../components/page__bannar/PageBannar";
import AdminDashboardMenu from '../../../components/admin__compoenent/admin__dashboard__menu/AdminDashboardMenu';
/* --=======================================
    End Import Components Here 
========================================-- */




/* --=======================================
Start Import React Icons Here 
========================================-- */
import pre__img from "../../../assets/home__page/featured-2-8.jpg"

/* --=======================================
Start Import React Icons Here 
========================================-- */


const UpdateProduct = () => {

/* ======== Decleartion Use State Hooqs Here ========= */







  return (
    <Layout title={"Update Produt"}>
      <div id="update__product__page">

        { /* ========= Start Page Bannar Section Here ========= */}
          <PageBannar title={"Update Product"}/>
        { /* ========= End Page Bannar Section Here ========= */}



        { /* ========= Start Create Product Section Here ========= */}
          <div id="update__product__section">
            <div className="sec__mar">
              <div className="container">
                <div className="row justify-content-between g-0">
                  <div className="col-12 col-lg-3">
                      <AdminDashboardMenu/>
                  </div>
                  <div className="col-12 col-lg-9">
                    <div id="product__content__box">
                      <h4>Update Product</h4>
                      <form action="" className='form__box'>
                        <div id="upload__images__box">
                          <h5>Products Images</h5>
                          <div id="image__preview__upload">
                            <div className="row justify-content-between g-0">
                              <div className="col-lg-6">
                                <label htmlFor="p__images">
                                  <i><MdCloudUpload/></i>
                                  <h6>Drop your images here, or <span>click to browse</span></h6>
                                  <p>1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed</p>
                                </label>
                                <input type="file" multiple accept="image/*" hidden/>
                              </div>
                              <div className="col-lg-6">
                                <div id="images__preview__box">
                                  <div id="preview">
                                    <img src={pre__img} id='pre__imgs' alt="" />
                                    <img src={pre__img} id='pre__imgs' alt="" />
                                    <img src={pre__img} id='pre__imgs' alt="" />
                                    <img src={pre__img} id='pre__imgs' alt="" />
                                    <img src={pre__img} id='pre__imgs' alt="" />
                                    <img src={pre__img} id='pre__imgs' alt="" />
                                    <img src={pre__img} id='pre__imgs' alt="" />
                                    <img src={pre__img} id='pre__imgs' alt="" />
                                    <img src={pre__img} id='pre__imgs' alt="" />
                                    <img src={pre__img} id='pre__imgs' alt="" />
                                    <img src={pre__img} id='pre__imgs' alt="" />
                                    <img src={pre__img} id='pre__imgs' alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="product__info__box">
                          <h5>Product Information</h5>
                          <div className="row align-items-center justify-content-between g-0">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                              <div className="input__group">
                                <label htmlFor="pro__name">Product Name</label>
                                <input type="text" name="pro__name" id="pro__name" placeholder='Product Name'/>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                              <div className="input__group">
                                <label htmlFor="cat__name">Product Categories</label>
                                <select name="cat__name" id="cat__name">
                                  <option value="">Man's Collection</option>
                                  <option value="">Woman's Collection</option>
                                  <option value="">Kid's Collection</option>
                                  <option value="">Boy's Collection</option>
                                  <option value="">Girl's Collection</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                              <div className="input__group">
                                <label htmlFor="bd__name">Brand Name</label>
                                <input type="text" name="bd__name" id="bd__name" placeholder='Brand Name'/>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                              <div className="input__group">
                                <label htmlFor="pro__weight">Product Weight</label>
                                <input type="number" name="pro__weight" id="pro__weight" placeholder='Product Weight'/>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                              <div className="input__group">
                                <label htmlFor="gender">Gender</label>
                                <select name="gender" id="gender">
                                  <option value="">Male</option>
                                  <option value="">Female</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                              <div className="input__group">
                                <label htmlFor="quantity">Product Quantity</label>
                                <input type="number" name="quantity" id="quantity" placeholder='Product Quantity'/>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                              <div className="input__group">
                                <label htmlFor="pro__price">Product Price</label>
                                <input type="number" name="pro__price" id="pro__price" placeholder='Product Price'/>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                              <div className="input__group">
                                <label htmlFor="pro__discount">Discount</label>
                                <input type="text" name="pro__discount" id="pro__discount" placeholder='Product Discount %'/>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                              <div className="input__group">
                                <label htmlFor="pro__tag">Tag</label>
                                <select name="pro__tag" id="pro__tag">
                                  <option value="">Headphones</option>
                                  <option value="">Watches</option>
                                  <option value="">Fashions</option>
                                  <option value="">Dresses</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                              <div className="input__group">
                                <label htmlFor="pro__tex">Tex</label>
                                <input type="text" name="pro__tex" id="pro__tex" placeholder='Product Tex'/>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                              <div className="input__group">
                                <label htmlFor="size__box">Size</label>
                                <div id="size__box">
                                  <div className="size__item">
                                    <label htmlFor="size__sm" className='active'>S</label>
                                    <input type="checkbox" name="size__sm" id="size__sm" hidden/>
                                  </div>
                                  <div className="size__item">
                                    <label htmlFor="size__md">M</label>
                                    <input type="checkbox" name="size__md" id="size__md" hidden/>
                                  </div>
                                  <div className="size__item">
                                    <label htmlFor="size__lg">L</label>
                                    <input type="checkbox" name="size__lg" id="size__lg" hidden/>
                                  </div>
                                  <div className="size__item">
                                    <label htmlFor="size__xl">XL</label>
                                    <input type="checkbox" name="size__xl" id="size__xl" hidden/>
                                  </div>
                                  <div className="size__item">
                                    <label htmlFor="size__xxl">XXL</label>
                                    <input type="checkbox" name="size__xxl" id="size__xxl" hidden/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                              <div className="input__group">
                              <label htmlFor="color__box">Color</label>
                                <div id="color__box">
                                  <div className="color__item">
                                    <label htmlFor="color__red" className='active'>
                                      <span className='red'></span>
                                    </label>
                                    <input type="checkbox" name="color__red" id="color__red" hidden/>
                                  </div>
                                  <div className="color__item">
                                    <label htmlFor="color__green">
                                      <span className='green'></span>
                                    </label>
                                    <input type="checkbox" name="color__green" id="color__green" hidden/>
                                  </div>
                                  <div className="color__item">
                                    <label htmlFor="color__blue">
                                      <span className='blue'></span>
                                    </label>
                                    <input type="checkbox" name="color__blue" id="color__blue" hidden/>
                                  </div>
                                  <div className="color__item">
                                    <label htmlFor="color__orange">
                                      <span className='orange'></span>
                                    </label>
                                    <input type="checkbox" name="color__orange" id="color__orange" hidden/>
                                  </div>
                                  <div className="color__item">
                                    <label htmlFor="color__teal">
                                      <span className='teal'></span>
                                    </label>
                                    <input type="checkbox" name="color__teal" id="color__teal" hidden/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="input__group">
                                <label htmlFor="pro__description">Product Description</label>
                                <textarea type="text" name="pro__description" id="pro__description" placeholder='Product Description'></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="btn__box">
                          <button type="submit" className='create__btn'>Update Product</button>
                          <button type="submit" className='cancel__btn'>Cancel</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        { /* ========= End Create Product Section Here ========= */}
      </div>
    </Layout>
  )
}

export default UpdateProduct
