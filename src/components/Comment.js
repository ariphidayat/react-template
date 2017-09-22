import React from 'react'
import img from '../images/arip.jpg'
import CommentForm from './CommentForm'

const Comment = () => (
  <div className="box-footer box-comments">
    <div className="box-comment">
      <img src={img} width="32"/>
      <div className="comment-text">
            <span className="name">
              Alisiana Ulfah
              <span className="text-muted pull-right">8:03 PM</span>
            </span>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </div>
    </div>
    <CommentForm/>
  </div>
)

export default Comment
