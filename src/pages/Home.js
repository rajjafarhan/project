import React from 'react'
import "./Home.css"
import Heading from '../MyComponents/Heading'
import Navbar from '../MyComponents/Navbar'
import Section1 from '../sections/Section1'
import Section2 from '../sections/Section2'
import Section3 from '../sections/Section3'
import Card from '../MyComponents/Card'
import Button from '../MyComponents/Button'
import Section4 from '../sections/Section4'
import Footer from '../sections/Footer'
import Copyright from '../MyComponents/Copyright'
import blueshirt from "../images/blue-shirt.jpg"
import { BLUESHIRT } from '../images/images'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Section1/>
      <Section2/>
      <Heading title="our collection"/>
      <Section3/>
      <div className="mens-arrival">
      <Heading  title='Men &rsquo; s Arrival' /></div>
      <div className='card-wrap'>
      <Card img={BLUESHIRT} desc="blue stylish-tshirt" price="$95"/>
      <Card img="https://sc04.alicdn.com/kf/U92e915c9501c412eb6b5abc2b4b8f79df.jpg" desc="black polo shirt" price="$80"/>
      <Card img="https://i.pinimg.com/474x/a2/ce/58/a2ce58581ed5e7f5d165b77177f51e4d.jpg" desc="black polo shirt" price="$83"/>
      <Card img="https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/25833/237774/Fear-Of-Gold-Fashion-Men-Jeans-Hip-Hop-Cool-Streetwear-Biker-Patch-Hole-Ripped-Skinny-Jeans__80161.1549623235.jpg?c=2" desc="black polo shirt" price="$94"/>
      </div>
      <Button/>
      <Section4/>
      <div className="womens-arrival">
      <Heading  title='Women &rsquo; s Arrival' /></div>
      <div className='card-wrap'>
      <Card img="https://media.istockphoto.com/photos/romantic-pink-dress-with-shoesvintage-style-picture-id578573556?k=20&m=578573556&s=612x612&w=0&h=_68cpMlx9bQc5KBjYBCBdCodxoe3qvw_UfrLHCeV0oc=" desc="pink-frock" price="$120"/>
      <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxBSzr6ZBB_cQ2qteT5dn5LU2y3IX9Q-a2-e4X0SrWvlJxOyxfXwK18z9nWNna44yibWI&usqp=CAU" desc="white and black stripe"price="$94"/>
      <Card img="https://stylesatlife.com/wp-content/uploads/2018/03/Saturn-frocks.jpeg.webp" desc="red party dress" price="$93"/>
      <Card img="https://img1.cdn.ucenterdress.com/image/366x586/90/0/f02e656c3e505c2e/624384a4379b528ef9174790f1831639.jpg?format=webp" desc="Prom dress" price="$100"/>
      </div>
      <Button/>
      <Footer/>
      <Copyright/>

      
    </div>
  )
}

export default Home
