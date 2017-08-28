import React from 'react'
import { Link } from 'react-router-dom'

const LeftSidebar = () => (
  <div>
    <ul>
      <li><Link to='/content/timeline'>Timeline</Link></li>
      <li><Link to='/content/people'>People</Link></li>
      <li><Link to='/content/inbox'>Inbox</Link></li>
    </ul>
  </div>
)

export default LeftSidebar
