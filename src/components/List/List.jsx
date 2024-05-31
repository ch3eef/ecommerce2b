import React from 'react'
import './List.scss'
import Card from '../Card/Card'

const List = () => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/4034442/pexels-photo-4034442.jpeg",
            img2: "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/4034442/pexels-photo-4034442.jpeg",
            img2: "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg",
            title: "Coat",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/4034442/pexels-photo-4034442.jpeg",
            img2: "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg",
            title: "Hat",
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/4034442/pexels-photo-4034442.jpeg",
            img2: "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg",
            title: "Long Sleeve Graphic T-shirt",
            oldPrice: 19,
            price: 12,
        }
        
         
    ]

  return (
    <div className='list'>
      {data?.map(item=>(
        <Card item={item} key={item.id  }/>
      ))}
    </div>
  )
}

export default List
