import React from 'react'
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className='navBar'>
      <NavLink to='/' activeClassName="activeNavButton">Home</NavLink>
      <NavLink to='/form' activeClassName="activeNavButton">Add Member</NavLink>
    </div>
  )
}

export default Navigation
