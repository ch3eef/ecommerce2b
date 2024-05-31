import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';

const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const images = [
    "https://images.pexels.com/photos/13037579/pexels-photo-13037579.jpeg",
    "https://images.pexels.com/photos/19137864/pexels-photo-19137864/free-photo-of-a-green-snake-is-hanging-from-a-branch.jpeg"
  ]
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
            <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$444</span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ipsum magnam enim ducimus repellendus porro repellat quis dolore cupiditate placeat cumque quae recusandae omnis deserunt eum maxime, perspiciatis sunt fugit?</p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev)=>prev ===1 ? 1 : prev-1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev)=>prev+1)}>+</button>
        </div>
        <button className='add'>
          <AddShoppingCart /> ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product
