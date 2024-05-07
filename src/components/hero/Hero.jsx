import React from 'react'
import './hero.scss'
import heroImg from '../../assets/hero-img.png'
import { IoSearchOutline } from "react-icons/io5";


const Hero = () => {
  return (
    <section className='hero'>
      <div className="container row">
        <div className="hero__left">
          <h1>Discover <br /> Most Suitable <br /> Watches</h1>
          <p>Find the best, reliable, and cheap smart watches here. <br /> We focus on product quality. Here you can find smart <br /> watches of almost all brands. So why you are waiting? <br /> Just order now!</p>
          <form action="">
            <IoSearchOutline className='img'/>
            <input type="text" placeholder='Fint the best brand' />
            <button type='submit'>Search</button>
          </form>
        </div>
        <div className="hero__right">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero