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
      <form onSubmit={this.onFormSubmit} className="form-post">
        <div className="form-group">
          <textarea ref="post" rows="3" className="form-control" placeholder="Write something.."/>
        </div>
        <button type="submit" className="btn btn-primary pull-right">Publish</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ createPost }, dispatch)
}

export default connect(null, mapDispatchToProps)(PostForm)
