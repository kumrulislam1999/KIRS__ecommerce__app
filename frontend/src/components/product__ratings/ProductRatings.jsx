import React from 'react'
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";


const ProductRatings = ({rating}) => {
  return (
    <div className="rating__box">
       <p>
        <i>{rating >= 1 ? <FaStar/> : rating >= 0.5 ? <FaStarHalfAlt/> : <FaRegStar/>}</i>
        <i>{rating >= 2 ? <FaStar/> : rating >= 1.5 ? <FaStarHalfAlt/> : <FaRegStar/>}</i>
        <i>{rating >= 3 ? <FaStar/> : rating >= 2.5 ? <FaStarHalfAlt/> : <FaRegStar/>}</i>
        <i>{rating >= 4 ? <FaStar/> : rating >= 3.5 ? <FaStarHalfAlt/> : <FaRegStar/>}</i>
        <i>{rating >= 5 ? <FaStar/> : rating >= 4.5 ? <FaStarHalfAlt/> : <FaRegStar/>}</i></p> <span>({rating})</span>
    </div>
  )
}

export default ProductRatings
