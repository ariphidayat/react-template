import React from 'react'
import img from '../images/arip.jpg'

const Post = ({ post }) => (
  <div className="media">
    <img className="d-flex mr-3" src={img} width="64" alt="Image placeholder"/>
    <div className="media-body">
      <p>{post.body}</p>
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
)

export default Post
