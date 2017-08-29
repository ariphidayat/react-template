import React, { Component } from 'react'

class Register extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit(e) {
    e.preventDefault()
    console.log('name', this.refs.name.value)
    console.log('username', this.refs.username.value)
    console.log('password', this.refs.password.value)
  }

  render() {
    const { name, username, password } = this.props

    return (
      <form onSubmit={this.submit} className="container register">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" ref="name" type="text" className="form-control" required/>
            </div>
            <div className="form-group">
              <label htmlFor="userName">Username</label>
              <input id="username" ref="username" type="text" className="form-control" required/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input id="password" ref="password" type="password" className="form-control" required/>
            </div>
            <p>By clicking "Register" you indicate that you have read and agree
            to the Term of Service and Privacy Policy.</p>
            <button className="btn btn-primary">Register</button>
          </div>
        </div>
      </form>
    )
  }
}

export default Register
