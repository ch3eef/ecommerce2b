import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card'

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id: 1,
            img: "https://plus.unsplash.com/premium_photo-1708110921381-5da0d7eb2e0f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGZhc2hpb258ZW58MHwwfDB8fHww",
            img2: "https://plus.unsplash.com/premium_photo-1673502751768-586478eb3fcb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfDB8MHx8fDA%3D",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://plus.unsplash.com/premium_photo-1673502751768-586478eb3fcb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfDB8MHx8fDA%3D",
            title: "Coat",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1612731486606-2614b4d74921?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZhc2hpb258ZW58MHwwfDB8fHww",
            img2: "https://plus.unsplash.com/premium_photo-1673502751768-586478eb3fcb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfDB8MHx8fDA%3D",
            title: "Hat",
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1483181957632-8bda974cbc91?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGZhc2hpb258ZW58MHwwfDB8fHww",
            img2: "https://plus.unsplash.com/premium_photo-1673502751768-586478eb3fcb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfDB8MHx8fDA%3D",
            title: "Long Sleeve Graphic T-shirt",
            oldPrice: 19,
            price: 12,
        },
    ]

  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} products</h1>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam delectus dolor voluptate voluptatibus explicabo inventore, illum iste ullam deleniti obcaecati molestias ipsa minus odio maxime fuga earum! Ut, nisi perferendis.
        </p>
      </div>
      <div className="bottom">
        {data.map(item=>(
            <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
