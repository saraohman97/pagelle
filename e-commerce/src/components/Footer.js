import React from 'react'
import pagelle from '../img/pagelle.png'
import karta from '../img/karta.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="left">
                <img src={pagelle} alt="" />
                <Link to='/'>Hem</Link>
                <Link to='/'>Butiker</Link>
                <Link to='/'>Arbeta hos oss</Link>
                <Link to='/'>Våra tjänster</Link>
                <Link to='/'>Varumärken hos oss</Link>
            </div>
            <div className="center">
                <h3>Kontakt</h3> <br />
                <p>Pagelle AB</p> <br />
                <strong>Huvudkontor</strong>
                <p>Kungsgatan 7</p>
                <p>702 11 ÖREBRO</p> <br />
                <p>Telefon: 019 10 69 60</p>
            </div>
            <div className="right">
                <img src={karta} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer