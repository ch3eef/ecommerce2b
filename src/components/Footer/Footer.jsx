import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          Thriftbyzee is the best corporate wear online store available in town. It is a platform for everybody who cares about what they wear. We provide unique pieces. All you need to do is pick your favorite, add to cart, check out and we will deliver to your doorstep.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Office: Abuja, Nigeria. <br />
            Phone: (234) 08125222248 <br />
            Email: sales@thriftbyzee.com
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Thriftbyzee</span>
          <span className="copyright">© Copyright 2023. All Rights Reserved.</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
