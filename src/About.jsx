import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import myImage from './assets/about-background.png';

function About() {
  return (
    <>
      <Menu />
      <main className='about-main'>
        <img className='about-main__full-image' src={myImage} alt="" />
        <div className="container">
          <h2 className='about-main__title'>
            Don’t squeeze in a sedan when you could relax in a van.
          </h2>
          <p className='about-main__paragraph'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. <br />
            (Hitch costs extra 😉)
            <br />
            <span>
              Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </span>
          </p>

          <div className="about-main__card">
            <h3>
              Your destination is waiting. <br />
              Your van is ready.
            </h3>
            <Link
              className='about-main__card-button'
              to="/vans"
            >
              Explore our vans
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default About