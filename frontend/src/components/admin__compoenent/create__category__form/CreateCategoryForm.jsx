import React from 'react'

const CreateCategoryForm = ({title,CategoryHandleSubmit,value,setValue}) => {
  return (
    <div id='create__category__form'>
      <form action="" className='form__box' onSubmit={CategoryHandleSubmit}>
        <h6>{title} Category</h6>
        <div className="input__group">
          <input type="text" name="cname" id="cname" placeholder='Enter Category Name' value={value} required onChange={(e) => setValue(e.target.value)} />
          <button type="submit" className='create__btn'>{title}</button>
        </div>
      </form>
    </div>
  )
}

export default CreateCategoryForm
