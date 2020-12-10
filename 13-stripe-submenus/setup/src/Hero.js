import React from 'react'
import phoneImg from './images/phone.svg'
import {useGlobalContext} from './context'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext()

  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Infrastruttura dei pagamenti per Internet</h1>
          <p>Milioni di aziende di ogni dimensione - dalle startup a Fortune 500s - usano il software e le API di Stripe per accettare i pagamenti, fare versamenti e gestire i propri affari online</p>
          <button className='btn'>Inizia ora</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} alt="phone" className="phone-img"/>
        </article>
      </div>
    </section>
  )
}

export default Hero
