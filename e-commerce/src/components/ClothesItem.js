import React from 'react'
import { Link } from 'react-router-dom'
import img from '../img/img.jpg'

const ClothesItem = () => {
  return (
    <Link to='/' className='clothes-item'>
        <img src={img} alt="" />
        <div className="text">
            <p>Tröja med v-hals</p>
            <div className="bottom">
                <p>350kr</p>
                <button className='btn-clothes'>Köp</button>
            </div>
        </div>
    </Link>
  )
}

export default ClothesItem