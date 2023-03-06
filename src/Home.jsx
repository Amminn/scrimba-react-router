import React from 'react'
import Menu from './Menu'

function Home() {
  return (
    <>
      <Menu />
      <main className='home-main'>
        <div className="container">
          <h1 className='home-main__title'>You got the travel plans, we got the travel vans.</h1>
          <p home-main__paragraph>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
          <button className='home-main__button'>Find your van</button>
        </div>
      </main>
    </>
  )
}

export default Home