import React from 'react'
import {Link} from 'react-router-dom'

function Menu() {
  return (
    <div className='menu'>
      <div className="container">
        <nav className="nav">
          <Link to='/' className='logo'>#VANLIFE</Link>
          <Link to='/about' className='link'>About</Link>
          <Link to='/vans' className='link'>Vans</Link>
        </nav>
      </div>
    </div>
  )
}

export default Menu