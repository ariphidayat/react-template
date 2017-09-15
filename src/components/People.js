import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as peopleActions from '../actions/peopleActions'

class People extends Component {
  componentWillMount() {
    this.props.fetchPeople()
  }

  renderPeople(people, i) {
    return (
      <div key={i} className="card">
        <img className="card-img-top" src="http://via.placeholder.com/204x204"/>
        <div className="card-body">
          <h5 className="card-title">{people.name}</h5>
          <p>{people.email}</p>
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

function mapStateToProps(state) {
  return { people: state.people }
}

export default connect(mapStateToProps, peopleActions)(People)
