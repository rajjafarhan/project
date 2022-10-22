import React from 'react'
import './Card.css'
import { AiFillStar } from 'react-icons/ai'

const Card = props => {
  return (
    <div className='card-wrapper'>
      <div className='card'>
        <div className='card-img'>
          <img className='img-size' src={props.img} alt='mmm' />
        </div>
        <h4 className='card-desc'>{props.desc}</h4>
        <div className='card-icons'>
          <AiFillStar className='stars' />
          <AiFillStar className='stars' />
          <AiFillStar className='stars' />
          <AiFillStar className='stars' />
          <AiFillStar className='stars' />
        </div>
        <h5 className='price'>{props.price}</h5>
        <div className='card-button'>
          <button className='button-1'>1</button>
          <button className='button-2'>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Card
