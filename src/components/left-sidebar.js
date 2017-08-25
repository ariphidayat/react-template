import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class LeftSidebar extends Component {
  render() {
    return (
      <aside className="col-md-2 sidebar">
        <div className="navbar-nav sidebar-menu">
          <Link to="/"><span className="fa fa-newspaper-o"/>Home</Link>
          <a href="#"><span className="fa fa-envelope-o"/>Inbox
            <span className="badge badge-secondary pull-right">17</span>
          </a>
          <a href="#"><span className="fa fa-user-circle-o"/>People</a>
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
  }
}
