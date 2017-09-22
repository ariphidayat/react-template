import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createPost } from '../actions/postActions'

class PostForm extends Component {
  constructor(props) {
    super(props)

    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit(event) {
    event.preventDefault()
    let data = {
      body: this.refs.post.value
    }
    this.props.createPost(data);
    event.target.reset();
  }

  render() {
    return (
      <div className="box">
        <form onSubmit={this.onFormSubmit}>
          <div className="box-body">
            <textarea ref="post" rows="3" className="form-control" placeholder="Write something.."/>
          </div>
          <div className="box-footer">
            <button type="submit" className="btn btn-primary">Publish</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ createPost }, dispatch)
}

export default connect(null, mapDispatchToProps)(PostForm)
