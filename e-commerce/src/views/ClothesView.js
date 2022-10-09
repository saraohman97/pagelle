import React from 'react'
import { Link } from 'react-router-dom'
import ClothesItem from '../components/ClothesItem'

const ClothesView = () => {
  return (
    <div className='clothes-view'>
      <div className="filter-menu">
        <h2>Kläder</h2>
          <Link to='/kläder'>Skjortor & Blusar</Link>
          <Link to='/kläder'>Tröjor</Link>
          <Link to='/kläder'>Koftor & Sweatshirts</Link>
          <Link to='/kläder'>Jackor & kappor</Link>
          <Link to='/kläder'>Kostym</Link>
          <Link to='/kläder'>Byxor</Link>
          <Link to='/kläder'>Jeans</Link>
          <Link to='/kläder'>Shorts</Link>
          <Link to='/kläder'>Jumpsuits</Link>
          <Link to='/kläder'>Kjolar</Link>
          <Link to='/kläder'>Klänningar</Link>
          <Link to='/kläder'>Badkläder</Link>
          <Link to='/kläder'>Basplagg</Link>
          <Link to='/kläder'>Strumpbyxor & Tights</Link>
          <Link to='/kläder'>Underkläder</Link>
          <Link to='/kläder'>Sovplagg</Link>
          <br />
          <Link to='/kläder' className='clr-pink'>Loungewear</Link>
          <Link to='/kläder' className='clr-pink'>Träningskläder</Link>
      </div>

      <div className="main">
        <div className="filter-clothes">
          <button className='btn-filter'>Kategori</button>
          <button className='btn-filter'>Storlek</button>
          <button className='btn-filter'>Färg</button>
          <button className='btn-filter'>Märke</button>
          <button className='btn-filter'>Pris</button>
        </div>
      </div>

      <div className="clothes">
        <ClothesItem />
      </div>

    </div>
  )
}

export default ClothesView