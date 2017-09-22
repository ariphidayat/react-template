import React from 'react'
import img from '../images/arip.jpg'
import Comment from './Comment'

const Post = ({ post }) => (
  <div className="box">
    <div className="box-header">
      <div className="user-block">
        <img src={img}/>
        <span className="name"><a href="#">Arip Hidayat</a></span>
        <span className="description">7:30 PM</span>
      </div>
      <div className="box-tools">
        <button type="button" className="btn btn-box-tool"><span className="fa fa-times"/></button>
      </div>
    </div>
    <div className="box-body">
      <p>{post.body}</p>
      <button type="button" className="btn btn-action"><span className="fa fa-heart-o"/></button>
      <span className="text-muted float-right">45 Loves - 2 Comments</span>
    </div>
    <Comment/>
  </div>
)

export default Post
