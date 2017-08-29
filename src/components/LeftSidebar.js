import React from 'react'
import { Link } from 'react-router-dom'

const LeftSidebar = () => (
  <aside className="col-md-2 sidebar">
    <div className="navbar-nav sidebar-menu">
      <Link to='/content/timeline'><span className="fa fa-newspaper-o"/>Timeline</Link>
      <Link to='/content/people'><span className="fa fa-user-circle-o"/>People</Link>
      <Link to='/content/inbox'><span className="fa fa-envelope-o"/>Inbox
        <span className="badge badge-secondary pull-right">10</span>
      </Link>
      <div className="header">GROUP</div>
      <a href="#" data-toggle="collapse" data-target="#menu1">
        <span className="fa fa-send-o"/>Menu 1
        <span><i className="fa fa-angle-left pull-right"/></span>
      </a>
      <div id="menu1" className="treeview-menu collapse">
        <div><a href="#">Sub Menu 1.1</a></div>
        <div><a href="#">Sub Menu 1.2</a></div>
        <div><a href="#">Sub Menu 1.3</a></div>
      </div>
    </div>
  </aside>
)

export default LeftSidebar
