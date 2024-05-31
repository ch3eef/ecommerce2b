import React from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories'>
      <div className="col">
        <div className="row">
            <img src="https://plus.unsplash.com/premium_photo-1708633003240-569a6135deaa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGZhc2hpb258ZW58MHwwfDB8fHww" alt="" />
            <button>
                <Link className='link' to="/products/1">Sale </Link>
            </button>
        </div>
        <div className="row">
        <img src="https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGZhc2hpb258ZW58MHwwfDB8fHww" alt="" />
            <button>
                <Link className='link' to="/products/1">Sale </Link>
            </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
        <img src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZhc2hpb258ZW58MHwwfDB8fHww" alt="" />
            <button>
                <Link className='link' to="/products/1">Sale </Link>
            </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
            <div className="col">
                <div className="row">
                <img src="https://plus.unsplash.com/premium_photo-1703118813631-f85cdcb22dd0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhc2hpb258ZW58MHwwfDB8fHww" alt="" />
            <button>
                <Link className='link' to="/products/1">Sale </Link>
            </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                <img src="https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc2hpb258ZW58MHwwfDB8fHww" alt="" />
            <button>
                <Link className='link' to="/products/1">Shoes </Link>
            </button>
                </div> 
            </div>
        </div>
        <div className="row">
        <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbnxlbnwwfDB8MHx8fDA%3D" alt="" />
            <button>
                <Link className='link' to="/products/1">Accessories </Link>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Categories
