import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPost } from '../actions/postActions'
import PostForm from './PostForm'
import Post from './Post'
import Modal from './Modal'

class Timeline extends Component {
  constructor(props) {
    super(props)
    this.state = { message: ''}
  }
  componentWillMount() {
    this.props.fetchPost()
  }

  renderPost() {
    return this.props.posts.map((post, i) => {
      return (
        <Post key={i} post={post} message={(message) => this.setState({message})}/>
      )
    })
  }

  render() {
    return (
      <section className="col-md-7 content-container">
        <PostForm/>
        {this.renderPost()}
        <Modal message={this.state.message}/>
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
