import React from 'react'
import './subscribe.scss'
import img from '../../assets/suscribe-img.png'

const Subscribe = () => {
  return (
    <section className="subscribe container row">
      <div className="subscribe__left">
        <h1>Subscribe To Newsletter</h1>
        <p>Get free guide about smart watches daily. </p>
        <form className='row' action="">
          <input type="text" placeholder='Enter Email Address'/>
          <button>Subscribe</button>
        </form>
      </div>
      <div className="subscribe__right">
        <img src={img} alt="" />
      </div>
    </section>
  )
}

export default Subscribe