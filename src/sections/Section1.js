import React from 'react'
import "./Section1.css"
import {BsFacebook} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsSnapchat} from 'react-icons/bs';

const Section1 = () => {
  return (
    <div>
      <div className="section1">
        <div className="section1-wrapper">
        <div className='sec-text'>
          <h2>WEAR WITHOUT WASTE</h2>
          <h4>easy on your wallet and the planet</h4>
          <button>EXPLORE NOW</button>
          <div className='sec-icons'>
            <BsFacebook className='size'  />
            <BsWhatsapp className='size'/>
            <BsInstagram className='size'/>
            <BsTwitter className='size'/>
            <BsSnapchat className='size'/>
          </div>
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default Section1
