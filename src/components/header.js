import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Fixed navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Default
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
              <li className="nav-item">
                <form className="form-inline ml-auto">
                  <input className="form-control header-search-input" type="text" placeholder="Search" aria-label="Search"/>
                </form>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="#" className="nav-link">Sign In</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Register</a>
                </li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}
