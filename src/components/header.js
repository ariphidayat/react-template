import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/content'>Content</Link></li>
      <li><Link to='/register'>Register</Link></li>
    </ul>
  </header>
)

export default Header
