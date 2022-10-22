import React from 'react'
import "./Navbar.css"
// import logo from '.././images/logo.jfif';
import { BiSearch } from "react-icons/bi"
import { BiUser } from "react-icons/bi"
import { AiOutlineShoppingCart } from "react-icons/ai"

const Navbar = () => {
  return (
    <div>
      <div className="main">
        <div className="logo">
          <div><img src="https://images-platform.99static.com//LA2Ckx7ULes2v19YM6_KE8UU3mQ=/587x266:1417x1096/fit-in/500x500/99designs-contests-attachments/120/120471/attachment_120471684" /></div>
        </div>
        <div className="list">
          <ul className='list-ul'>
            <li> Home</li>
            <li>PopularBranch</li>
            <li>Catalog</li>
            <li>Items Condition</li>
          </ul>
        </div>
        <div className="icons">
          <div className='icon-gap'><BiSearch size="1.3rem" color='black'/>
          <BiUser size="1.3rem" color='black' />
          <AiOutlineShoppingCart size="1.3rem" color='black'/></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
