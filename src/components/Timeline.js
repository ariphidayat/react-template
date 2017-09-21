import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPost } from '../actions/postActions'
import PostForm from './PostForm'
import Post from './Post'

class Timeline extends Component {
  componentWillMount() {
    this.props.fetchPost()
  }

  renderPost() {
    return this.props.posts.map((post, i) => {
      return (
        <Post key={i} post={post}/>
      )
    })
  }

  render() {
    return (
      <section className="col-md-7 content-container">
        <PostForm/>
        {this.renderPost()}
      </section>
    )
  }
}

const mapStateToProps = ({ posts }) => {
  return { posts }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchPost }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Timeline)
