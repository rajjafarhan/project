import React from 'react'
import {FaFacebook} from "react-icons/fa";
import {BsInstagram} from "react-icons/bs";
import {FaMobileAlt} from "react-icons/fa";
import {ImLocation2} from "react-icons/im";
import {FaRegEnvelope} from "react-icons/fa";
import {BsSearch} from "react-icons/bs";
import {BsTwitter} from 'react-icons/bs';
import {BsSnapchat} from 'react-icons/bs'



import "./Footer.css"

const Footer = () => {
  return (
<div className='main-footer'>
    <div className='footer'>
        <div className="foot-sec1">
            <div><a href='index.html'><img className='logo-img' src="https://images-platform.99static.com//LA2Ckx7ULes2v19YM6_KE8UU3mQ=/587x266:1417x1096/fit-in/500x500/99designs-contests-attachments/120/120471/attachment_120471684" alt="logo" /></a>
            </div >
           <div className='gap'>
            <FaFacebook size="1.5rem" color='white' padding="15px"/>
            <BsInstagram size="1.5rem" color='white'/>
            <BsTwitter size="1.5rem" color='white'/>
            <BsSnapchat size="1.5rem" color='white'/>

            </div>
            

        </div>

        <div className="foot-sec2">
            <div className="foot-sec-haeding"><h3 className='white'>USEFUL LINK</h3></div>
            <div>
                <ul>
                    <li className='white'>home</li>
                    <li className='white'>about</li>
                    <li className='white'>visit</li>
                    <li className='white'>stay</li>
                    <li className='white'>shop</li>
                </ul>
            </div>
        </div>
        <div className="foot-sec3">
            <div className="foot-sec-haeding"><h3 className='white'>CATEGORIES</h3></div>
            <div>
                <ul>
                    <li className='white'>Men's</li>
                    <li className='white'>Women's</li>
                    <li className='white'>Boys</li>
                    <li className='white'>Girls</li>
                    <li className='white'>Accessories</li>
                </ul>
            </div>
        </div>
       
        <div className="foot-sec4">
            <div className="foot-sec-haeding"><h3 className='white'>SUBSCRIBE TO OUR EMAIL</h3></div>
            <div className="subscribe">
                <input className='foot-input' type="text" placeholder='EMAIL'/>
                <button className='foot-button'><BsSearch size="1rem" color='white'/></button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer
