import React, {Component} from 'react';

export default class LeftSidebar extends Component {
  render() {
    return (
      <aside className="col-md-2 sidebar">
        <ul className="navbar-nav sidebar-menu sticky-top">
          <li>
            <a href="#"><span className="fa fa-newspaper-o"/>News Feed</a>
          </li>
          <li>
            <a href="#"><span className="fa fa-envelope-o"/>Inbox
              <span className="badge badge-secondary pull-right">17</span>
            </a>
          </li>
          <li>
            <a href="#"><span className="fa fa-user-circle-o"/>People</a>
          </li>
          <li className="header">GROUP</li>
          <li>
            <a href="#" data-toggle="collapse" data-target="#menu1">
              <span className="fa fa-send-o"/>Menu 1
              <span><i className="fa fa-angle-left pull-right"></i></span>
            </a>
            <ul id="menu1" className="treeview-menu collapse">
              <li><a href="#">Sub Menu 1.1</a></li>
              <li><a href="#">Sub Menu 1.2</a></li>
              <li><a href="#">Sub Menu 1.3</a></li>
            </ul>
          </li>
        </ul>
      </aside>
    )
  }
}
