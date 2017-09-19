import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPeopleById } from '../actions/peopleActions'

class PeopleDetail extends Component {
  componentDidMount() {
    this.props.fetchPeopleById(this.props.match.params.peopleId)
  }

  render() {
    const people = this.props.people
    return (
      <section className="col-md-7 content-container">
        <div className="row">
          <div className="col-md-4">
            <img src="http://via.placeholder.com/204x204"/>
          </div>
          <div className="col-md-8">
              <h2>{people.name}</h2>
              <p>{people.email}</p>
              <a href="#" className="btn btn-primary">Follow</a>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({ people }) => {
  return { people }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchPeopleById }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleDetail)
