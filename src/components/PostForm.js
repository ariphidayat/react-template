import React from 'react'

const PostForm = () =>(
  <form className="form-post">
    <div className="form-group">
      <textarea rows="3" className="form-control" placeholder="Write something.."/>
    </div>
    <button type="submit" className="btn btn-primary pull-right">Publish</button>
  </form>
)

export default PostForm
