import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./hero.scss"

function Hero() {
  return (
    <div className='hero'>
        <Navbar />
        <div className="parts">
            <div className="image">
                <img src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png" alt="" />
            </div>
          <div className="texts">
            <p> 60% discount</p>
            <p>Winter Conclusion</p>
            <p> Best cloth by 2020</p>
            <button>Shop Now</button>
          </div>
        </div>
    </div>
  )
}

export default Hero