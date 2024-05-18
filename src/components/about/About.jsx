import React from 'react'
import './about.scss'
import img1 from "../../assets/about-1.png"
import img2 from '../../assets/about-2.png'
import stars from '../../assets/about-stars.svg'

const About = () => {
  return (
    <section className='about container'>
      <div className="about__top">
        <h4>Here are our some of the best clients.</h4>
        <h1>What People Say About Us</h1>
      </div>
      <div className="about__bottom ">
        <div className="about__bottom__card">
          <div className="about__bottom__card-img">
            <img src={img1} alt="" />
          </div>
          <div className="about__bottom__card-desc">
            <h1>Hamza Faizi</h1>
            <p>Don’t waste time, just order! This <br /> is the best website to puschase <br /> smart watches.</p>
            <img src={stars} alt="" />
          </div>
        </div>
        <div className="about__bottom__card">
          <div className="about__bottom__card-img">
            <img src={img2} alt="" />
          </div>
          <div className="about__bottom__card-desc">
            <h1>Hafiz Huzaifa</h1>
            <p>Don’t waste time, just order! This <br /> is the best website to puschase <br /> smart watches.</p>
            <img src={stars} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About