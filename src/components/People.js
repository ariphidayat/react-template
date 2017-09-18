import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as peopleActions from '../actions/peopleActions'

class People extends Component {
  componentWillMount() {
    this.props.fetchPeople()
  }

  renderPeople(people, i) {
    let name = people.name.length > 15 ? people.name.substring(0,14).concat('..') : people.name
    let email = people.email.length > 25 ? people.email.substring(0,25).concat('..') : people.email

    return (
      <div key={i} className="card">
        <img className="card-img-top" src="http://via.placeholder.com/204x204"/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text"><small>{email}</small></p>
          <a href="#" className="btn btn-primary">Follow</a>
        </div>
      </div>
    )
  }

  render() {
    return (
      <section className="col-md-7">
        <div className="row">
          {this.props.people.map((p, i) => this.renderPeople(p, i))}
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return { people: state.people }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPeople: () => dispatch(peopleActions.fetchPeople())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(People)
