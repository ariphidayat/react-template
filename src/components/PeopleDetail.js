import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as peopleActions from '../actions/peopleActions'

class PeopleDetail extends Component {
  componentDidMount() {
    this.props.fetchPeopleById(this.props.match.params.peopleId)
  }

  render() {
    return (
      <section className="col-md-7 content-container">
        <div className="row">
          <div className="col-md-4">
            <img src="http://via.placeholder.com/204x204"/>
          </div>
          <div className="col-md-8">
              <h2>{this.props.people.name}</h2>
              <p>{this.props.people.email}</p>
              <a href="#" className="btn btn-primary">Follow</a>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return { people: state.people }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPeopleById: peopleId => dispatch(peopleActions.fetchPeopleById(peopleId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleDetail)
