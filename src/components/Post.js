import React from 'react'
import img from '../images/arip.jpg'

const Post = () => (
  <div className="media">
    <img className="d-flex mr-3" src={img} width="64" alt="Image placeholder"/>
    <div className="media-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
)

export default Post
