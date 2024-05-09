import React from 'react'
import './watches.scss'
import apple from '../../assets/apple-img.png'
import xiaomi from '../../assets/xiaomi-img.png'
import bitfit from '../../assets/bitfit-img.png'

const Watches = () => {

  return (
    <section className='watches container'>
        <div className="watches__card">
          <div className="watches__apple__img">
            <img src={apple} alt="" />
          </div>
          <div className="watches__apple__desc">
            <h2>Apple</h2>
            <p>Apple is one of the <br /> most famous smart <br /> watches providing <br /> company.</p>
          </div>
        </div>
        <div className="watches__card">
          <div className="watches__apple__img">
            <img src={xiaomi} alt="" />
          </div>
          <div className="watches__apple__desc">
            <h2>Xiaomi</h2>
            <p>Xiaomi smart watches <br /> are produced by MI <br /> company.</p>
          </div>
        </div>
        <div className="watches__card">
          <div className="watches__apple__img">
            <img src={bitfit  } alt="" />
          </div>
          <div className="watches__apple__desc">
            <h2>BitFit</h2>
            <p>FitBit smart watches <br /> are best for there <br /> health and fitness <br /> features.</p>
          </div>
        </div>
    </section>
  )
}

export default Watches