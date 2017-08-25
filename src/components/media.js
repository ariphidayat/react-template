import React from 'react';

const Media = ({img, subject, body}) => (
    <div className="media">
      <img className="d-flex mr-3" src={img} width="64" alt="Image placeholder"/>
      <div className="media-body">
        <h5 className="mt-0 mb-1">{subject}</h5>
        <p>{body}</p>
      </div>
    </div>
)

export default Media;
